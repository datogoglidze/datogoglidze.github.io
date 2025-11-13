import type { Course } from "@/pages/learning/courses/columns.tsx";

export default function getCoursesData(): Course[] {
  return [
    {
      id: 1,
      name: "Computer Science course CS50",
      link: "CS50x",
      languages: "",
      hasCertificate: true,
    },
    {
      id: 2,
      name: "Learn coding (multiple languages)",
      link: "freeCodeCamp",
      languages: "",
      hasCertificate: true,
    },
    {
      id: 3,
      name: "Learn coding (multiple languages)",
      link: "The Coding Train",
      languages: "",
      hasCertificate: false,
    },
    {
      id: 4,
      name: "Git tutorial",
      link: "Tools & Concepts for Mastering Version Control with Git",
      languages: "",
      hasCertificate: false,
    },
  ];
}
