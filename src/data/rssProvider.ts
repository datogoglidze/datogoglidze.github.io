import type { Url } from "@/types/common.ts";

export interface RSSFeedProvider {
  id: number;
  name: string;
  url: Url;
  subject: "gaming" | "tech" | "finance";
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
  {
    id: 14,
    name: "Android Authority",
    url: {
      name: "Android Authority",
      address: "https://androidauthority.com/news/feed",
    },
    subject: "tech",
  },
  {
    id: 15,
    name: "Google",
    url: {
      name: "Google blog",
      address: "https://blog.google/rss/",
    },
    subject: "tech",
  },
  {
    id: 16,
    name: "Google Research",
    url: {
      name: "Google research",
      address: "https://research.google/blog/rss",
    },
    subject: "tech",
  },
  {
    id: 17,
    name: "Game Rant",
    url: {
      name: "Game Rant",
      address: "https://gamerant.com/feed/gaming",
    },
    subject: "gaming",
  },
  {
    id: 18,
    name: "GamesRadar+",
    url: {
      name: "GamesRadar",
      address: "https://www.gamesradar.com/feeds/tag/games/",
    },
    subject: "gaming",
  },
  {
    id: 19,
    name: "GamesRadar+",
    url: {
      name: "GamesRadar",
      address: "https://www.gamesradar.com/feeds/tag/hardware/",
    },
    subject: "tech",
  },
  {
    id: 20,
    name: "Bloomberg",
    url: {
      name: "bloomberg",
      address: "https://feeds.bloomberg.com/technology/news.rss",
    },
    subject: "tech",
  },
  {
    id: 21,
    name: "Bloomberg Markets",
    url: {
      name: "bloomberg",
      address: "https://feeds.bloomberg.com/markets/news.rss",
    },
    subject: "finance",
  },
  {
    id: 22,
    name: "Bloomberg Economics",
    url: {
      name: "bloomberg",
      address: "https://feeds.bloomberg.com/economics/news.rss",
    },
    subject: "finance",
  },
  {
    id: 23,
    name: "Bloomberg Business",
    url: {
      name: "bloomberg",
      address: "https://feeds.bloomberg.com/business/news.rss",
    },
    subject: "finance",
  },
  {
    id: 24,
    name: "Financial Times",
    url: {
      name: "Financial Times",
      address: "https://www.ft.com/rss/home",
    },
    subject: "finance",
  },
  {
    id: 25,
    name: "The Wall Street Journal",
    url: {
      name: "dowjones",
      address: "https://feeds.content.dowjones.io/public/rss/socialeconomyfeed",
    },
    subject: "finance",
  },
  {
    id: 26,
    name: "Yahoo",
    url: {
      name: "yahoo",
      address: "https://finance.yahoo.com/news/rssindex",
    },
    subject: "finance",
  },
  {
    id: 27,
    name: "BBC",
    url: {
      name: "bbc",
      address: "https://feeds.bbci.co.uk/news/business/rss.xml",
    },
    subject: "finance",
  },
  {
    id: 28,
    name: "BBC",
    url: {
      name: "bbc",
      address: "https://feeds.bbci.co.uk/news/technology/rss.xml",
    },
    subject: "tech",
  },
  {
    id: 29,
    name: "Finance Asia",
    url: {
      name: "financeasia",
      address: "https://www.financeasia.com/rss/latest",
    },
    subject: "finance",
  },
];
