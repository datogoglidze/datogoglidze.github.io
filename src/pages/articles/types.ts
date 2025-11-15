export interface RSSFeedItem {
  title: string;
  link: string;
  pubDate: string;
  isoDate?: string;
  contentSnippet?: string;
  guid?: string;
  thumbnail?: string;
}

export interface RSSFeed {
  title: string;
  description?: string;
  link?: string;
  items: RSSFeedItem[];
}

export interface RSSFeedProvider {
  name: string;
  url: string;
}

export interface UseRSSFeedResult {
  feed: RSSFeed | null;
  loading: boolean;
  error: string | null;
}
