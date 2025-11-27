import type { Url } from "@/types/common.ts";

export interface RSSFeedProvider {
  id: number;
  name: string;
  url: Url;
  subject: "gaming" | "tech";
}

export const RSS_PROVIDERS: RSSFeedProvider[] = [
  {
    id: 1,
    name: "IGN",
    url: {
      name: "FeedBurner",
      address: "https://feeds.feedburner.com/ign/games-all",
    },
    subject: "gaming",
  },
  {
    id: 2,
    name: "IGN",
    url: {
      name: "FeedBurner",
      address: "https://feeds.feedburner.com/ign/tech-articles",
    },
    subject: "tech",
  },
  {
    id: 3,
    name: "PC Gamer",
    url: {
      name: "PC Gamer",
      address: "https://pcgamer.com/feeds/tag/games",
    },
    subject: "gaming",
  },
  {
    id: 4,
    name: "PC Gamer",
    url: {
      name: "PC Gamer",
      address: "https://pcgamer.com/feeds/tag/hardware",
    },
    subject: "tech",
  },
  {
    id: 5,
    name: "TechRadar",
    url: {
      name: "TechRadar",
      address: "https://www.techradar.com/feeds/tag/gaming",
    },
    subject: "gaming",
  },
  {
    id: 6,
    name: "TechRadar",
    url: {
      name: "TechRadar",
      address: "https://www.techradar.com/feeds.xml",
    },
    subject: "tech",
  },
  {
    id: 7,
    name: "GameSpot",
    url: {
      name: "GameSpot",
      address: "https://www.gamespot.com/feeds/game-news",
    },
    subject: "gaming",
  },
  {
    id: 8,
    name: "Polygon",
    url: {
      name: "Polygon",
      address: "https://www.polygon.com/rss/gaming/index.xml",
    },
    subject: "gaming",
  },
  {
    id: 9,
    name: "Nvidia",
    url: {
      name: "Nvidia Blog",
      address: "https://blogs.nvidia.com/feed/",
    },
    subject: "tech",
  },
  {
    id: 10,
    name: "Eurogamer",
    url: {
      name: "Eurogamer",
      address: "https://www.eurogamer.net/feed",
    },
    subject: "gaming",
  },
  {
    id: 11,
    name: "Rock Paper Shotgun",
    url: {
      name: "Rock Paper Shotgun",
      address: "https://www.rockpapershotgun.com/feed/news",
    },
    subject: "gaming",
  },
  {
    id: 12,
    name: "Siliconera",
    url: {
      name: "Siliconera",
      address: "https://www.siliconera.com/feed/",
    },
    subject: "gaming",
  },
  {
    id: 13,
    name: "Steam",
    url: {
      name: "Steam",
      address: "https://store.steampowered.com/feeds/news/",
    },
    subject: "gaming",
  },
];
