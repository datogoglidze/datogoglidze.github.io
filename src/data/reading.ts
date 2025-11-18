export interface Reading {
  id: number;
  name: string;
  author: string;
  url: string;
  urlName: string;
  languages: string[];
}

export default function getReadings(): Reading[] {
  return [
    {
      id: 1,
      name: "SQL Style Guide",
      author: "Simon Holywel",
      url: "https://www.sqlstyle.guide/",
      urlName: "sqlstyle",
      languages: ["SQL"],
    },
    {
      id: 2,
      name: "Design Patterns",
      author: "Alexander Shvets",
      url: "https://refactoring.guru/design-patterns/catalog",
      urlName: "Refactoring Guru",
      languages: [
        "c#",
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
      url: "https://python-patterns.guide/",
      urlName: "python-patterns",
      languages: ["Python"],
    },
    {
      id: 4,
      name: "Clean Code: A Handbook of Agile Software Craftsmanship",
      author: "Robert C. Martin",
      url: "https://a.co/d/czySsBe",
      urlName: "Amazon",
      languages: ["Java"],
    },
    {
      id: 5,
      name: "The Clean Coder: A Code of Conduct for Professional Programmers",
      author: "Robert C. Martin",
      url: "https://a.co/d/j2et4s8",
      urlName: "Amazon",
      languages: ["Java"],
    },
  ];
}
