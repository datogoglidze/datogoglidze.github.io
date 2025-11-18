export type Course = {
  id: number;
  name: string;
  url: string;
  languages: string[];
  hasCertificate: boolean;
};

export default function getCoursesData(): Course[] {
  return [
    {
      id: 1,
      name: "Computer Science course CS50",
      url: "https://cs50.harvard.edu/x/",
      languages: ["HTML", "CSS", "JavaScript", "Python", "SQLite", "C"],
      hasCertificate: true,
    },
    {
      id: 2,
      name: "FreeCodeCamp",
      url: "https://www.freecodecamp.org/",
      languages: ["HTML", "CSS", "JavaScript", "Python", "C#", "SQL"],
      hasCertificate: true,
    },
    {
      id: 3,
      name: "TheCodingTrain",
      url: "https://www.youtube.com/@TheCodingTrain",
      languages: ["JavaScript"],
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
