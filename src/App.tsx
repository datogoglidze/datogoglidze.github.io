import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import HomePage from "@/pages/home/page";
import LearningPage from "@/pages/learning/page";
import ArticlesPage from "@/pages/articles/page";
import MemesPage from "@/pages/memes/page";
import { SiteHeader } from "@/components/site-header.tsx";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <BrowserRouter>
        <div className="[--header-height:calc(--spacing(14))]">
          <SidebarProvider className="flex flex-col">
            <SiteHeader />
            <div className="flex flex-1">
              <AppSidebar />
              <SidebarInset>
                <Routes>
                  <Route path="/" element={<Navigate to="/home" replace />} />
                  <Route path="/home" element={<HomePage />} />
                  <Route path="/learning" element={<LearningPage />} />
                  <Route path="/articles" element={<ArticlesPage />} />
                  <Route path="/memes" element={<MemesPage />} />
                </Routes>
              </SidebarInset>
            </div>
          </SidebarProvider>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
