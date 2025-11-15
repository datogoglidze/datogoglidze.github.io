import { useLocation } from "react-router-dom";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { ModeToggle } from "@/components/mode-toggle.tsx";

const routeTitles: Record<string, string> = {
  "/home": "Home",
  "/learning": "Learning",
  "/articles": "Articles",
  "/memes": "Memes",
};

export function SiteHeader() {
  const location = useLocation();
  const title = routeTitles[location.pathname];

  return (
    <header className="flex justify-between h-16 shrink-0 items-center gap-2 px-4">
      <div className="flex flex-row">
        <SidebarTrigger className="-ml-1" />
        <Separator
          orientation="vertical"
          className="ml-2 mr-3 mt-1 data-[orientation=vertical]:h-5"
        />
        <h1 className="text-base font-medium">{title}</h1>
      </div>
      <ModeToggle />
    </header>
  );
}
