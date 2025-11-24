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
    name: "IGN",
    url: {
      name: "FeedBurner",
      address: "https://feeds.feedburner.com/ign/all",
    },
    type: "articles",
  },
  {
    id: 2,
    name: "IGN",
    url: {
      name: "FeedBurner",
      address: "https://feeds.feedburner.com/ign/news",
    },
    type: "news",
  },
  {
    id: 3,
    name: "PC Gamer",
    url: {
      name: "PC Gamer",
      address: "https://www.pcgamer.com/rss/",
    },
    type: "articles",
  },
  {
    id: 4,
    name: "PC Gamer",
    url: {
      name: "PC Gamer",
      address: "https://www.pcgamer.com/feeds/articletype/news/",
    },
    type: "news",
  },
  {
    id: 5,
    name: "TechRadar",
    url: {
      name: "TechRadar",
      address: "https://www.techradar.com/feeds.xml",
    },
    type: "articles",
  },
  {
    id: 6,
    name: "TechRadar",
    url: {
      name: "TechRadar",
      address: "https://www.techradar.com/feeds/articletype/news",
    },
    type: "news",
  },
  {
    id: 7,
    name: "GameSpot",
    url: {
      name: "GameSpot",
      address: "https://www.gamespot.com/feeds/mashup",
    },
    type: "articles",
  },
  {
    id: 8,
    name: "Polygon",
    url: {
      name: "Polygon",
      address: "https://www.polygon.com/rss/index.xml",
    },
    type: "articles",
  },
  {
    id: 9,
    name: "Polygon",
    url: {
      name: "Polygon",
      address: "https://www.polygon.com/rss/news/index.xml",
    },
    type: "news",
  },
  {
    id: 10,
    name: "Nvidia",
    url: {
      name: "Nvidia Blog",
      address: "https://blogs.nvidia.com/feed/",
    },
    type: "articles",
  },
  {
    id: 11,
    name: "Eurogamer",
    url: {
      name: "Eurogamer",
      address: "https://www.eurogamer.net/feed/blogs",
    },
    type: "articles",
  },
  {
    id: 12,
    name: "Eurogamer",
    url: {
      name: "Eurogamer",
      address: "https://www.eurogamer.net/feed/news",
    },
    type: "news",
  },
  {
    id: 13,
    name: "Rock Paper Shotgun",
    url: {
      name: "Rock Paper Shotgun",
      address: "https://www.rockpapershotgun.com/feed/news",
    },
    type: "news",
  },
  {
    id: 14,
    name: "Siliconera",
    url: {
      name: "Siliconera",
      address: "https://www.siliconera.com/feed/",
    },
    type: "articles",
  },
];
