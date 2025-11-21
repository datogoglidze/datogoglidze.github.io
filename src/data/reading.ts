import type { Url } from "@/types/common.ts";

export interface Reading {
  id: number;
  name: string;
  author: string;
  url: Url;
  languages: string[];
}

export const READINGS: Reading[] = [
  {
    id: 1,
    name: "SQL Style Guide",
    author: "Simon Holywel",
    url: {
      name: "sqlstyle",
      address: "https://www.sqlstyle.guide/",
    },
    languages: ["SQL"],
  },
  {
    id: 2,
    name: "Design Patterns",
    author: "Alexander Shvets",
    url: {
      name: "Refactoring Guru",
      address: "https://refactoring.guru/design-patterns/catalog",
    },
    languages: [
      "C#",
      "C++",
      "Go",
      "Java",
      "PHP",
      "Python",
      "Ruby",
      "Rust",
      "Swift",
      "JavaScript",
    ],
  },
  {
    id: 3,
    name: "Python Design Patterns",
    author: "Brandon Rhodes",
    url: {
      name: "python-patterns",
      address: "https://python-patterns.guide/",
    },
    languages: ["Python"],
  },
  {
    id: 4,
    name: "Clean Code: A Handbook of Agile Software Craftsmanship",
    author: "Robert C. Martin",
    url: {
      name: "Amazon",
      address: "https://a.co/d/czySsBe",
    },
    languages: ["Java"],
  },
  {
    id: 5,
    name: "The Clean Coder: A Code of Conduct for Professional Programmers",
    author: "Robert C. Martin",
    url: {
      name: "Amazon",
      address: "https://a.co/d/j2et4s8",
    },
    languages: ["Java"],
  },
];
