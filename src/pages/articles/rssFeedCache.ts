import type { RSSFeed } from "@/types/rss.ts";

const CACHE_KEY_PREFIX = "rss_cache_";
const CACHE_DURATION_MS = 30 * 60 * 1000;

interface CachedFeed {
  data: RSSFeed;
  timestamp: number;
}

const memoryCache = new Map<string, CachedFeed>();

function getCacheKey(feedUrl: string): string {
  return CACHE_KEY_PREFIX + encodeURIComponent(feedUrl);
}

function isCacheExpired(timestamp: number): boolean {
  return Date.now() - timestamp >= CACHE_DURATION_MS;
}

export function getCachedFeed(feedUrl: string): RSSFeed | null {
  const cacheKey = getCacheKey(feedUrl);
  const cached = memoryCache.get(cacheKey);

  if (!cached) return null;

  if (isCacheExpired(cached.timestamp)) {
    memoryCache.delete(cacheKey);
    return null;
  }

  return cached.data;
}

export function setCachedFeed(feedUrl: string, feed: RSSFeed): void {
  const cacheKey = getCacheKey(feedUrl);
  const cachedData: CachedFeed = {
    data: feed,
    timestamp: Date.now(),
  };

  memoryCache.set(cacheKey, cachedData);
}

export function clearFeedCache(feedUrl?: string): void {
  if (feedUrl) {
    const cacheKey = getCacheKey(feedUrl);
    memoryCache.delete(cacheKey);
  } else {
    memoryCache.clear();
  }
}
