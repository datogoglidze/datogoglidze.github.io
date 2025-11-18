import { useState, useEffect } from "react";
import type {
  RSSFeed,
  RSSFeedItem,
  UseRSSFeedResult,
} from "../../types/rss.ts";

const CORS_PROXIES = [
  (url: string) => `https://corsproxy.io/?${encodeURIComponent(url)}`,
  (url: string) =>
    `https://api.allorigins.win/get?url=${encodeURIComponent(url)}`,
] as const;

const CONTENT_SNIPPET_LENGTH = 200;

function getTextContent(element: Element | null, tagName: string): string {
  const el = element?.querySelector(tagName);
  return el?.textContent?.trim() || "";
}

function createContentSnippet(content: string): string {
  const stripped = content.replace(/<[^>]*>/g, "");
  return stripped.substring(0, CONTENT_SNIPPET_LENGTH).trim() + "...";
}

function extractThumbnail(
  item: Element,
  description: string,
): string | undefined {
  const mediaThumbnail = item.querySelector("media\\:thumbnail, thumbnail");
  if (mediaThumbnail) {
    const url = mediaThumbnail.getAttribute("url");
    if (url) return url;
  }

  const mediaContent = item.querySelector("media\\:content, content");
  if (mediaContent) {
    const contentType = mediaContent.getAttribute("type") || "";
    if (contentType.startsWith("image/")) {
      const url = mediaContent.getAttribute("url");
      if (url) return url;
    }
  }

  const enclosure = item.querySelector("enclosure");
  if (enclosure) {
    const enclosureType = enclosure.getAttribute("type") || "";
    if (enclosureType.startsWith("image/")) {
      const url = enclosure.getAttribute("url");
      if (url) return url;
    }
  }

  if (description) {
    const imgMatch = description.match(/<img[^>]+src=["']([^"']+)["']/i);
    if (imgMatch?.[1]) {
      return imgMatch[1];
    }
  }

  return undefined;
}

function parseRSSItem(item: Element): RSSFeedItem | null {
  const title = getTextContent(item, "title");
  const link = getTextContent(item, "link");

  if (!title || !link) return null;

  const pubDate = getTextContent(item, "pubDate");
  const guid = getTextContent(item, "guid");
  const description = getTextContent(item, "description");

  const contentEncoded = item.querySelector("content\\:encoded, encoded");
  const content = contentEncoded?.textContent?.trim() || description;

  const contentSnippet = content ? createContentSnippet(content) : undefined;
  const thumbnail = extractThumbnail(item, description);

  return {
    title,
    link,
    pubDate,
    guid: guid || link,
    contentSnippet,
    isoDate: pubDate ? new Date(pubDate).toISOString() : undefined,
    thumbnail,
  };
}

function parseRSSFeed(xmlText: string): RSSFeed {
  const parser = new DOMParser();
  const xmlDoc = parser.parseFromString(xmlText, "text/xml");

  const parseError = xmlDoc.querySelector("parsererror");
  if (parseError) {
    throw new Error("Failed to parse RSS feed XML");
  }

  const channel = xmlDoc.querySelector("channel");
  if (!channel) {
    throw new Error("Invalid RSS feed format: no channel found");
  }

  const title = getTextContent(channel, "title");
  const description = getTextContent(channel, "description");
  const link = getTextContent(channel, "link");

  const itemElements = channel.querySelectorAll("item");
  const items: RSSFeedItem[] = Array.from(itemElements)
    .map(parseRSSItem)
    .filter((item): item is RSSFeedItem => item !== null);

  return {
    title,
    description: description || undefined,
    link: link || undefined,
    items,
  };
}

async function fetchThroughProxy(proxyUrl: string): Promise<string> {
  const response = await fetch(proxyUrl);

  if (!response.ok) {
    throw new Error(`Proxy returned ${response.status}`);
  }

  const contentType = response.headers.get("content-type") || "";
  let xmlText: string;

  if (contentType.includes("application/json")) {
    const proxyData = await response.json();

    if (!proxyData.contents) {
      throw new Error("Unexpected proxy JSON response format");
    }

    if (proxyData.status?.http_code && proxyData.status.http_code !== 200) {
      throw new Error(`Feed returned ${proxyData.status.http_code}`);
    }

    xmlText = proxyData.contents;
  } else {
    xmlText = await response.text();
  }

  if (!xmlText?.trim().startsWith("<")) {
    throw new Error("Proxy response is not XML format");
  }

  return xmlText;
}

async function fetchRSSFeedXML(feedUrl: string): Promise<string> {
  let lastError: Error | null = null;

  for (const createProxyUrl of CORS_PROXIES) {
    try {
      const proxyUrl = createProxyUrl(feedUrl);
      return await fetchThroughProxy(proxyUrl);
    } catch (proxyError) {
      lastError =
        proxyError instanceof Error
          ? proxyError
          : new Error("Proxy fetch failed");
      console.log(`Proxy failed, trying next...`, lastError.message);
    }
  }

  throw lastError || new Error("All proxy attempts failed");
}

export function useRSSFeed(feedUrl: string): UseRSSFeedResult {
  const [feed, setFeed] = useState<RSSFeed | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!feedUrl) {
      setLoading(false);
      setFeed(null);
      setError(null);
      return;
    }

    let isCancelled = false;

    async function fetchFeed() {
      try {
        setLoading(true);
        setError(null);

        const xmlText = await fetchRSSFeedXML(feedUrl);

        if (isCancelled) return;

        const parsed = parseRSSFeed(xmlText);
        setFeed(parsed);
      } catch (err) {
        if (isCancelled) return;

        const errorMessage =
          err instanceof Error ? err.message : "Failed to fetch RSS feed";
        setError(errorMessage);
        console.error("RSS Feed Error:", err);
      } finally {
        if (!isCancelled) {
          setLoading(false);
        }
      }
    }

    fetchFeed();

    return () => {
      isCancelled = true;
    };
  }, [feedUrl]);

  return { feed, loading, error };
}
