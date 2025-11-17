import type { RSSFeedProvider } from "./types";

export const RSS_FEED_PROVIDERS: Record<string, RSSFeedProvider> = {
  ignArticles: {
    name: "IGN Articles",
    url: "https://feeds.feedburner.com/ign/all",
  },
  ignNews: {
    name: "IGN News",
    url: "https://feeds.feedburner.com/ign/news",
  },
  pcgamerArticles: {
    name: "PC Gamer Articles",
    url: "https://www.pcgamer.com/rss/",
  },
  pcgamerNews: {
    name: "PC Gamer News",
    url: "https://www.pcgamer.com/feeds/articletype/news/",
  },
  techradarArticles: {
    name: "TechRadar Articles",
    url: "https://www.techradar.com/feeds.xml",
  },
  techradarNews: {
    name: "TechRadar News",
    url: "https://www.techradar.com/feeds/articletype/news",
  },
  gamesportArticles: {
    name: "GameSpot Articles",
    url: "https://www.gamespot.com/feeds/mashup",
  },
  polygonArticles: {
    name: "Polygon Articles",
    url: "https://www.polygon.com/rss/index.xml",
  },
  polygonNews: {
    name: "Polygon News",
    url: "https://www.polygon.com/rss/news/index.xml",
  },
  nvidiaBlog: {
    name: "Nvidia Blog",
    url: "https://blogs.nvidia.com/feed/",
  },
};
