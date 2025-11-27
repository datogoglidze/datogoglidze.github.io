import type { RSSFeed, RSSFeedItem } from "@/types/rss";
import { fetchViaCorsProxy } from "@/lib/proxies/corsproxy";
import { fetchViaWhateverOrigin } from "@/lib/proxies/whateverorigin";

const CONTENT_SNIPPET_LENGTH = 200;

type ProxyFetcher = (url: string, signal: AbortSignal) => Promise<string>;

const PROXIES: ProxyFetcher[] = [fetchViaCorsProxy, fetchViaWhateverOrigin];

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
  description: string
): string | undefined {
  const mediaThumbnail = item.querySelector("media\\:thumbnail, thumbnail");
  if (mediaThumbnail) {
    const url = mediaThumbnail.getAttribute("url");
    if (url) return url;
  }

  const mediaContent = item.querySelector("media\\:content, content");
  if (mediaContent) {
    const contentType =
      mediaContent.getAttribute("type") ||
      mediaContent.getAttribute("medium") ||
      "";
    if (contentType.startsWith("image")) {
      const url = mediaContent.getAttribute("url");
      if (url) return url;
    }
  }

  const enclosure = item.querySelector("enclosure");
  if (enclosure) {
    const enclosureType = enclosure.getAttribute("type") || "";
    if (enclosureType.startsWith("image")) {
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

export function parseRSS(xmlText: string): RSSFeed {
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

export async function fetchRSS(
  feedUrl: string,
  timeout = 30000
): Promise<string> {
  let lastError: Error = new Error("No proxies available");

  for (const fetchViaProxy of PROXIES) {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), timeout);

    try {
      const content = await fetchViaProxy(feedUrl, controller.signal);

      if (!content?.trim().startsWith("<")) {
        lastError = new Error("Response is not XML format");
        continue;
      }

      return content;
    } catch (error) {
      lastError = error as Error;
    } finally {
      clearTimeout(timeoutId);
    }
  }

  throw lastError;
}
