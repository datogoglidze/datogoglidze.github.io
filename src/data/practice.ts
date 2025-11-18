export interface Practice {
  id: number;
  name: string;
  url: string;
  languages: string[];
}

export default function getPractices(): Practice[] {
  return [
    {
      id: 1,
      name: "Code Wars",
      url: "https://www.codewars.com/dashboard",
      languages: ["Python", "JavaScript"],
    },
    {
      id: 2,
      name: "Knight Lab's SQL Murder Mystery",
      url: "https://mystery.knightlab.com/",
      languages: ["SQLite"],
    },
  ];
}
