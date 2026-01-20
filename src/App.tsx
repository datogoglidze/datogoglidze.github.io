import {
  RouterProvider,
  Navigate,
  createBrowserRouter,
} from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";
import { Snow } from "@/components/snow-effect/snow.tsx";
import RootLayout from "@/pages/RootLayout.tsx";
import HomePage from "@/pages/home/page";
import LearningPage from "@/pages/learning/page";
import GamingArticlesPage from "@/pages/articles/subjects/gaming.tsx";
import MemesPage from "@/pages/memes/page";
import TechArticlesPage from "@/pages/articles/subjects/tech.tsx";
import FinanceArticlesPage from "@/pages/articles/subjects/finance.tsx";
import MusicPage from "@/pages/music/page.tsx";
import MyGear from "@/pages/my-gear/page.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="/home" replace />,
      },
      {
        path: "home",
        element: <HomePage />,
      },
      {
        path: "learning",
        element: <LearningPage />,
      },
      {
        path: "gaming",
        element: <GamingArticlesPage />,
      },
      {
        path: "tech",
        element: <TechArticlesPage />,
      },
      {
        path: "finance",
        element: <FinanceArticlesPage />,
      },
      {
        path: "memes",
        element: <MemesPage />,
      },
      {
        path: "music",
        element: <MusicPage />,
      },
      {
        path: "my-gear",
        element: <MyGear />,
      },
    ],
  },
]);

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Snow />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
