import { useState, useEffect } from "react";
import type { RSSFeed, UseRSSFeedResult } from "@/types/rss.ts";
import { getCachedFeed, setCachedFeed } from "./rssFeedCache.ts";
import { fetchRSS, parseRSS } from "@/lib/rssParser";

export function useRSSFeed(
  feedUrl: string,
  refreshTrigger = 0
): UseRSSFeedResult {
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

        const cachedFeed = getCachedFeed(feedUrl);
        if (cachedFeed) {
          if (!isCancelled) {
            setFeed(cachedFeed);
            setLoading(false);
          }
          return;
        }

        const xmlText = await fetchRSS(feedUrl);

        if (isCancelled) return;

        const parsed = parseRSS(xmlText);

        setCachedFeed(feedUrl, parsed);

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
  }, [feedUrl, refreshTrigger]);

  return { feed, loading, error };
}
