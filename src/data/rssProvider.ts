import type { Url } from "@/types/common.ts";

export interface RSSFeedProvider {
  id: number;
  name: string;
  url: Url;
  type: "articles" | "news";
}

export const RSS_PROVIDERS: RSSFeedProvider[] = [
  {
    id: 1,
    name: "IGN Articles",
    url: {
      name: "FeedBurner",
      address: "https://feeds.feedburner.com/ign/all",
    },
    type: "articles",
  },
  {
    id: 2,
    name: "IGN News",
    url: {
      name: "FeedBurner",
      address: "https://feeds.feedburner.com/ign/news",
    },
    type: "news",
  },
  {
    id: 3,
    name: "PC Gamer Articles",
    url: {
      name: "PC Gamer",
      address: "https://www.pcgamer.com/rss/",
    },
    type: "articles",
  },
  {
    id: 4,
    name: "PC Gamer News",
    url: {
      name: "PC Gamer",
      address: "https://www.pcgamer.com/feeds/articletype/news/",
    },
    type: "news",
  },
  {
    id: 5,
    name: "TechRadar Articles",
    url: {
      name: "TechRadar",
      address: "https://www.techradar.com/feeds.xml",
    },
    type: "articles",
  },
  {
    id: 6,
    name: "TechRadar News",
    url: {
      name: "TechRadar",
      address: "https://www.techradar.com/feeds/articletype/news",
    },
    type: "news",
  },
  {
    id: 7,
    name: "GameSpot Articles",
    url: {
      name: "GameSpot",
      address: "https://www.gamespot.com/feeds/mashup",
    },
    type: "articles",
  },
  {
    id: 8,
    name: "Polygon Articles",
    url: {
      name: "Polygon",
      address: "https://www.polygon.com/rss/index.xml",
    },
    type: "articles",
  },
  {
    id: 9,
    name: "Polygon News",
    url: {
      name: "Polygon",
      address: "https://www.polygon.com/rss/news/index.xml",
    },
    type: "news",
  },
  {
    id: 10,
    name: "Nvidia Articles",
    url: {
      name: "Nvidia Blog",
      address: "https://blogs.nvidia.com/feed/",
    },
    type: "articles",
  },
];
