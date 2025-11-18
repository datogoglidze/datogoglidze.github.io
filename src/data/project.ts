export interface Project {
  id: number;
  name: string;
  description: string;
  imageSource: string;
  imageAlt: string;
  url: string;
  urlName: string;
}

export default function getProjects(): Project[] {
  return [
    {
      id: 1,
      name: "Technical Documentation Page",
      description: "Briefly describes basic financial analysis formulas",
      imageSource: "/main-page/technicalDocumentation.jpg",
      imageAlt: "Statistical charts on paper",
      url: "https://codepen.io/datogoglidze/pen/yLMBgKR",
      urlName: "CodePen",
    },
    {
      id: 2,
      name: "Tribute Page",
      description: "Key life events of Abraham Lincoln",
      imageSource: "/main-page/tributePage.jpg",
      imageAlt: "Abraham Lincoln painting",
      url: "https://codepen.io/datogoglidze/pen/vYgvqLb",
      urlName: "CodePen",
    },
    {
      id: 3,
      name: "Product Landing Page",
      description: "Test page for product showcase",
      imageSource: "/main-page/productLandingPage.jpg",
      imageAlt: "Dark studio with illuminated platforms",
      url: "https://codepen.io/datogoglidze/pen/zYNXwjY",
      urlName: "CodePen",
    },
    {
      id: 4,
      name: "Survey Form",
      description: "Survey page layout example",
      imageSource: "/main-page/surveyForm.jpg",
      imageAlt: "Person filling out a form on a computer",
      url: "https://codepen.io/datogoglidze/pen/qBRgggX",
      urlName: "CodePen",
    },
    {
      id: 5,
      name: "Bloknot: Front",
      description: "Manage basic notes",
      imageSource: "/main-page/bloknot.jpg",
      imageAlt: "Note on a wall",
      url: "https://github.com/datogoglidze/bloknot-front.git",
      urlName: "GitHub",
    },
    {
      id: 6,
      name: "Bloknot: Back",
      description: "Manage basic notes",
      imageSource: "/main-page/bloknot.jpg",
      imageAlt: "Note on a wall",
      url: "https://github.com/datogoglidze/bloknot.git",
      urlName: "GitHub",
    },
  ];
}
