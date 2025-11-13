import type { Course } from "@/pages/learning/courses/columns.tsx";

export default function getCoursesData(): Course[] {
  return [
    {
      id: 1,
      name: "Computer Science course CS50",
      url: "https://cs50.harvard.edu/x/",
      languages: ["C", "Python", "SQLite", "HTML", "CSS", "JavaScript"],
      hasCertificate: true,
    },
    {
      id: 2,
      name: "FreeCodeCamp",
      url: "https://www.freecodecamp.org/",
      languages: ["Python", "SQL", "HTML", "CSS", "JavaScript"],
      hasCertificate: true,
    },
    {
      id: 3,
      name: "TheCodingTrain",
      url: "https://www.youtube.com/@TheCodingTrain",
      languages: [],
      hasCertificate: false,
    },
    {
      id: 4,
      name: "FreeCodeCamp",
      url: "https://youtu.be/Uszj_k0DGsg?si=frSFjsNKnIB4KBn4",
      languages: ["Git"],
      hasCertificate: false,
    },
  ];
}
