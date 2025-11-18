export interface Reading {
  id: number;
  title: string;
  author: string;
  url: string;
  urlSource: string;
  languages: string[];
}

export default function getReadings(): Reading[] {
  return [
    {
      id: 1,
      title: "SQL Style Guide",
      author: "Simon Holywel",
      url: "https://www.sqlstyle.guide/",
      urlSource: "sqlstyle",
      languages: ["SQL"],
    },
    {
      id: 2,
      title: "Design Patterns",
      author: "Alexander Shvets",
      url: "https://refactoring.guru/design-patterns/catalog",
      urlSource: "Refactoring Guru",
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
      title: "Python Design Patterns",
      author: "Brandon Rhodes",
      url: "https://python-patterns.guide/",
      urlSource: "python-patterns",
      languages: ["Python"],
    },
    {
      id: 4,
      title: "Clean Code: A Handbook of Agile Software Craftsmanship",
      author: "Robert C. Martin",
      url: "https://a.co/d/czySsBe",
      urlSource: "Amazon",
      languages: ["Java"],
    },
    {
      id: 5,
      title: "The Clean Coder: A Code of Conduct for Professional Programmers",
      author: "Robert C. Martin",
      url: "https://a.co/d/j2et4s8",
      urlSource: "Amazon",
      languages: ["Java"],
    },
  ];
}
