import type { Image, Url } from "@/types/common.ts";

export interface Project {
  id: number;
  name: string;
  description: string;
  image: Image;
  url: Url;
}

export const PROJECTS: Project[] = [
  {
    id: 1,
    name: "Technical Documentation Page",
    description: "Briefly describes basic financial analysis formulas",
    image: {
      name: "Statistical charts on paper",
      source: "/main-page/technicalDocumentation.jpg",
    },
    url: {
      name: "CodePen",
      address: "https://codepen.io/datogoglidze/pen/yLMBgKR",
    },
  },
  {
    id: 2,
    name: "Tribute Page",
    description: "Key life events of Abraham Lincoln",
    image: {
      name: "Abraham Lincoln painting",
      source: "/main-page/tributePage.jpg",
    },
    url: {
      name: "CodePen",
      address: "https://codepen.io/datogoglidze/pen/vYgvqLb",
    },
  },
  {
    id: 3,
    name: "Product Landing Page",
    description: "Test page for product showcase",
    image: {
      name: "Dark studio with illuminated platforms",
      source: "/main-page/productLandingPage.jpg",
    },
    url: {
      name: "CodePen",
      address: "https://codepen.io/datogoglidze/pen/zYNXwjY",
    },
  },
  {
    id: 4,
    name: "Survey Form",
    description: "Survey page layout example",
    image: {
      name: "Person filling out a form on a computer",
      source: "/main-page/surveyForm.jpg",
    },
    url: {
      name: "CodePen",
      address: "https://codepen.io/datogoglidze/pen/qBRgggX",
    },
  },
  {
    id: 5,
    name: "CS50x: Intranet",
    description:
      "Manage company-wide communications between employees and administrators",
    image: {
      name: "Office",
      source: "/main-page/intranet.jpg",
    },
    url: {
      name: "GitHub",
      address: "https://github.com/datogoglidze/cs50x-intranet.git",
    },
  },
  {
    id: 6,
    name: "Bloknot: Front",
    description: "Manage basic notes",
    image: {
      name: "Note on a wall",
      source: "/main-page/bloknot.jpg",
    },
    url: {
      name: "GitHub",
      address: "https://github.com/datogoglidze/bloknot-front.git",
    },
  },
  {
    id: 7,
    name: "Bloknot: Back",
    description: "Manage basic notes",
    image: {
      name: "Note on a wall",
      source: "/main-page/bloknot.jpg",
    },
    url: {
      name: "GitHub",
      address: "https://github.com/datogoglidze/bloknot.git",
    },
  },
  {
    id: 8,
    name: "City Simulation",
    description:
      "Real-time city simulation with role-based agents moving on a hex grid",
    image: {
      name: "Hexagonal shaped city center",
      source: "/main-page/city-simulator.jpg",
    },
    url: {
      name: "GitHub",
      address: "https://github.com/datogoglidze/city-simulation-service.git",
    },
  },
];
