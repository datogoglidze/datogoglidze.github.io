import { Link, useLocation } from "react-router-dom";
import { Home, GraduationCap, Gamepad2, Laugh } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
} from "@/components/ui/sidebar";

const items = [
  {
    title: "Home",
    url: "/home",
    icon: Home,
  },
  {
    title: "Learning",
    url: "/learning",
    icon: GraduationCap,
  },
  {
    title: "Gaming",
    url: "/gaming",
    icon: Gamepad2,
  },
  {
    title: "Memes",
    url: "/memes",
    icon: Laugh,
  },
];

export function AppSidebar() {
  const location = useLocation();

  return (
    <Sidebar variant="floating">
      <SidebarHeader>Side-Header</SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {items.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton
                asChild
                isActive={location.pathname === item.url}
              >
                <Link to={item.url}>
                  <item.icon />
                  <span>{item.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter>Side-Footer</SidebarFooter>
    </Sidebar>
  );
}
