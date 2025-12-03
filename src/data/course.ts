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
    name: "FreeCodeCamp Certification",
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
    name: "FreeCodeCamp Videos",
    url: {
      name: "YouTube",
      address: "https://www.youtube.com/@freecodecamp/courses",
    },
    languages: [
      "HTML",
      "CSS",
      "JavaScript",
      "Vite",
      "Python",
      "Django",
      "Node",
      "MySQL",
      "GraphQL",
      "Git",
      "Docker",
      "Firebase",
      "Nginx",
      "Redis",
    ],
    hasCertificate: false,
  },
  {
    id: 5,
    name: "ArjanCodes",
    url: {
      name: "YouTube",
      address:
        "https://youtube.com/playlist?list=PLC0nd42SBTaNf0bVJVd9e2oBV-mcUuxS0&si=rDBOl0CWwNrSwd7r",
    },
    languages: ["Python"],
    hasCertificate: false,
  },
];
