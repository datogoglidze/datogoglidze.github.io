import type { RSSFeedProvider } from "@/pages/articles/types.ts";

const RSS_PROVIDERS: RSSFeedProvider[] = [
  {
    id: 1,
    name: "IGN Articles",
    url: "https://feeds.feedburner.com/ign/all",
    type: "articles",
  },
  {
    id: 2,
    name: "IGN News",
    url: "https://feeds.feedburner.com/ign/news",
    type: "news",
  },
  {
    id: 3,
    name: "PC Gamer Articles",
    url: "https://www.pcgamer.com/rss/",
    type: "articles",
  },
  {
    id: 4,
    name: "PC Gamer News",
    url: "https://www.pcgamer.com/feeds/articletype/news/",
    type: "news",
  },
  {
    id: 5,
    name: "TechRadar Articles",
    url: "https://www.techradar.com/feeds.xml",
    type: "articles",
  },
  {
    id: 6,
    name: "TechRadar News",
    url: "https://www.techradar.com/feeds/articletype/news",
    type: "news",
  },
  {
    id: 7,
    name: "GameSpot Articles",
    url: "https://www.gamespot.com/feeds/mashup",
    type: "articles",
  },
  {
    id: 8,
    name: "Polygon Articles",
    url: "https://www.polygon.com/rss/index.xml",
    type: "articles",
  },
  {
    id: 9,
    name: "Polygon News",
    url: "https://www.polygon.com/rss/news/index.xml",
    type: "news",
  },
  {
    id: 10,
    name: "Nvidia Articles",
    url: "https://blogs.nvidia.com/feed/",
    type: "articles",
  },
];

export default RSS_PROVIDERS;
