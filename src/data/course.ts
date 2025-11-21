import type { Url } from "@/types/common.ts";

export interface Course {
  id: number;
  name: string;
  url: Url;
  languages: string[];
  hasCertificate: boolean;
}

export const COURSES: Course[] = [
  {
    id: 1,
    name: "Computer Science course CS50",
    url: {
      name: "Harvard",
      address: "https://cs50.harvard.edu/x/",
    },
    languages: ["HTML", "CSS", "JavaScript", "Python", "SQLite", "C"],
    hasCertificate: true,
  },
  {
    id: 2,
    name: "FreeCodeCamp",
    url: {
      name: "FreeCodeCamp",
      address: "https://www.freecodecamp.org/",
    },
    languages: ["HTML", "CSS", "JavaScript", "Python", "C#", "SQL"],
    hasCertificate: true,
  },
  {
    id: 3,
    name: "TheCodingTrain",
    url: {
      name: "YouTube",
      address: "https://www.youtube.com/@TheCodingTrain",
    },
    languages: ["JavaScript"],
    hasCertificate: false,
  },
  {
    id: 4,
    name: "FreeCodeCamp",
    url: {
      name: "YouTube",
      address: "https://youtu.be/Uszj_k0DGsg?si=frSFjsNKnIB4KBn4",
    },
    languages: ["Git"],
    hasCertificate: false,
  },
];
