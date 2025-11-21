import { Link, useLocation } from "react-router-dom";
import { GraduationCap, Home, Laugh, Newspaper } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { CONTACTS } from "@/data/contact.ts";

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
    title: "Articles",
    url: "/articles",
    icon: Newspaper,
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
    <Sidebar
      variant="floating"
      className="top-(--header-height) h-[calc(100svh-var(--header-height))]!"
    >
      <SidebarHeader className="py-0">
        <div className="flex items-center h-16 gap-2 font-medium text-sm">
          <Avatar>
            <AvatarImage src="/alien-300-300.jpg" alt="@shadcn" />
            <AvatarFallback>SW</AvatarFallback>
          </Avatar>
          Schwifter
        </div>
      </SidebarHeader>
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
        <SidebarMenu className="mt-auto">
          {CONTACTS.map((item) => (
            <SidebarMenuItem key={item.id}>
              <SidebarMenuButton asChild className="hover:bg-transparent">
                <a
                  href={item.url.address}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  <item.icon />
                  {item.name}
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter></SidebarFooter>
    </Sidebar>
  );
}
