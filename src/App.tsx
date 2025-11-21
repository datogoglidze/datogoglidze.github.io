import {
  RouterProvider,
  Navigate,
  createBrowserRouter,
} from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";
import RootLayout from "@/pages/RootLayout.tsx";
import HomePage from "@/pages/home/page";
import LearningPage from "@/pages/learning/page";
import ArticlesPage from "@/pages/articles/page";
import MemesPage from "@/pages/memes/page";

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
        path: "articles",
        element: <ArticlesPage />,
      },
      {
        path: "memes",
        element: <MemesPage />,
      },
    ],
  },
]);

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
