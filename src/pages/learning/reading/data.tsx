import type { Reading } from "@/pages/learning/reading/columns.tsx";

export default function getReadingsData(): Reading[] {
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
      title: "Refactoring Guru",
      author: "",
      url: "https://refactoring.guru/design-patterns",
      urlSource: "Refactoring Guru",
      languages: [],
    },
  ];
}
