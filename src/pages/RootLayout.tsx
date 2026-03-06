import { Outlet } from "react-router-dom";
import { AppSidebar } from "@/components/app-sidebar.tsx";
import { SiteHeader } from "@/components/site-header.tsx";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar.tsx";
import { SEOHead } from "@/components/seo-head.tsx";

export default function RootLayout() {
  return (
    <>
      <SEOHead
        title="David Goglidze"
        description="Schwifter's personal site — software engineering projects, learning resources, articles, music, and more."
        path="/"
      />

      <div className="[--header-height:calc(--spacing(14))]">
        <SidebarProvider className="flex flex-col">
          <SiteHeader />
          <div className="flex flex-1">
            <AppSidebar />
            <SidebarInset>
              <Outlet />
            </SidebarInset>
          </div>
        </SidebarProvider>
      </div>
    </>
  );
}
