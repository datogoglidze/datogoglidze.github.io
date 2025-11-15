import { Link, useLocation } from "react-router-dom";
import {
  Home,
  GraduationCap,
  Newspaper,
  Laugh,
  Twitter,
  Linkedin,
  Github,
  Mail,
} from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

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

const itemsSecondary = [
  {
    id: 1,
    title: "schwifterpickle",
    url: "https://x.com/schwifterpickle",
    icon: Twitter,
  },
  {
    id: 2,
    title: "d-goglidze",
    url: "https://www.linkedin.com/in/d-goglidze/",
    icon: Linkedin,
  },
  {
    id: 3,
    title: "datogoglidze",
    url: "https://github.com/datogoglidze",
    icon: Github,
  },
  {
    id: 4,
    title: "d.goglidze22@gmail.com",
    url: "mailto:d.goglidze22@gmail.com",
    icon: Mail,
  },
];

export function AppSidebar() {
  const location = useLocation();

  return (
    <Sidebar variant="floating">
      <SidebarHeader>
        <div className="flex items-center gap-2 font-medium text-sm">
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
          {itemsSecondary.map((item) => (
            <SidebarMenuItem key={item.id}>
              <SidebarMenuButton asChild>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  <item.icon />
                  {item.title}
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
