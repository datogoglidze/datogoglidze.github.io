import type { Practice } from "@/pages/learning/practices/columns.tsx";

export default function getPracticesData(): Practice[] {
  return [
    {
      id: 1,
      name: "Practice with coding problems",
      link: "Code Wars",
      languages: "",
    },
    {
      id: 2,
      name: "SQL problem (Murder Mystery)",
      link: "Knight Lab's SQL Murder Mystery",
      languages: "SQL",
    },
  ];
}
