import type { Reading } from "@/pages/learning/reading/columns.tsx";

export default function getReadingsData(): Reading[] {
  return [
    {
      id: 1,
      name: "SQL style guide",
      link: "SQL Style Guide by Simon Holywell",
      languages: "SQL",
    },
    {
      id: 2,
      name: "Design patterns",
      link: "Refactoring Guru",
      languages: "",
    },
  ];
}
