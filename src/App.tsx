import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import HomePage from "@/pages/home/page";
import LearningPage from "@/pages/learning/page";
import GamingPage from "@/pages/gaming/page";
import MemesPage from "@/pages/memes/page";
import { SiteHeader } from "@/components/site-header.tsx";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <BrowserRouter>
        <SidebarProvider
          style={
            {
              "--sidebar-width": "19rem",
            } as React.CSSProperties
          }
        >
          <AppSidebar />
          <SidebarInset>
            <SiteHeader />
            <Routes>
              <Route path="/" element={<Navigate to="/home" replace />} />
              <Route path="/home" element={<HomePage />} />
              <Route path="/learning" element={<LearningPage />} />
              <Route path="/gaming" element={<GamingPage />} />
              <Route path="/memes" element={<MemesPage />} />
            </Routes>
          </SidebarInset>
        </SidebarProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
