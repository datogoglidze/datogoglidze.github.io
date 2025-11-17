export interface Project {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  linkUrl: string;
  linkText: string;
}

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "Technical Documentation Page",
    description: "Briefly describes basic financial analysis formulas",
    imageSrc: "/main-page/technicalDocumentation.jpg",
    imageAlt: "Statistical charts on paper",
    linkUrl: "https://codepen.io/datogoglidze/pen/yLMBgKR",
    linkText: "CodePen",
  },
  {
    id: "2",
    title: "Tribute Page",
    description: "Key life events of Abraham Lincoln",
    imageSrc: "/main-page/tributePage.jpg",
    imageAlt: "Abraham Lincoln painting",
    linkUrl: "https://codepen.io/datogoglidze/pen/vYgvqLb",
    linkText: "CodePen",
  },
  {
    id: "3",
    title: "Product Landing Page",
    description: "Test page for product showcase",
    imageSrc: "/main-page/productLandingPage.jpg",
    imageAlt: "Dark studio with illuminated platforms",
    linkUrl: "https://codepen.io/datogoglidze/pen/zYNXwjY",
    linkText: "CodePen",
  },
  {
    id: "4",
    title: "Survey Form",
    description: "Survey page layout example",
    imageSrc: "/main-page/surveyForm.jpg",
    imageAlt: "Person filling out a form on a computer",
    linkUrl: "https://codepen.io/datogoglidze/pen/qBRgggX",
    linkText: "CodePen",
  },
  {
    id: "5",
    title: "Bloknot: Front",
    description: "Manage basic notes",
    imageSrc: "/main-page/bloknot.jpg",
    imageAlt: "Note on a wall",
    linkUrl: "https://github.com/datogoglidze/bloknot-front.git",
    linkText: "GitHub",
  },
  {
    id: "6",
    title: "Bloknot: Back",
    description: "Manage basic notes",
    imageSrc: "/main-page/bloknot.jpg",
    imageAlt: "Note on a wall",
    linkUrl: "https://github.com/datogoglidze/bloknot.git",
    linkText: "GitHub",
  },
];
