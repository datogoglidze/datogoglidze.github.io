import type { Url } from "@/types/common.ts";

export interface Practice {
  id: number;
  name: string;
  url: Url;
  languages: string[];
}

export const PRACTICES: Practice[] = [
  {
    id: 1,
    name: "Code Wars",
    url: {
      name: "Codewars",
      address: "https://www.codewars.com/dashboard",
    },
    languages: ["Python", "JavaScript"],
  },
  {
    id: 2,
    name: "Knight Lab's SQL Murder Mystery",
    url: {
      name: "Knight Lab",
      address: "https://mystery.knightlab.com/",
    },
    languages: ["SQLite"],
  },
];
