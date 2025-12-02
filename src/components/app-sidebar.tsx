import { Link, useLocation } from "react-router-dom";
import {
  ChevronRight,
  GraduationCap,
  Home,
  Laugh,
  MusicIcon,
  Newspaper,
} from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
} from "@/components/ui/sidebar";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { CONTACTS } from "@/data/contact.ts";
import { sendEventToGoogle } from "@/lib/utils.ts";

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
    icon: Newspaper,
    isActive: true,
    items: [
      {
        title: "Gaming",
        url: "/gaming",
      },
      {
        title: "Tech",
        url: "/tech",
      },
      {
        title: "Finance",
        url: "/finance",
      },
    ],
  },
  {
    title: "Memes",
    url: "/memes",
    icon: Laugh,
  },
  {
    title: "Music",
    url: "/music",
    icon: MusicIcon,
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
            <AvatarImage src="/alien-300-300.jpg" alt="@alien" />
            <AvatarFallback>SW</AvatarFallback>
          </Avatar>
          Schwifter
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {items.map((item) =>
            item.items ? (
              <Collapsible
                key={item.title}
                asChild
                defaultOpen={item.isActive}
                className="group/collapsible"
              >
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton
                      tooltip={item.title}
                      className="group/item"
                    >
                      <item.icon className="icon-bounce group-hover/item:-translate-y-1" />
                      <span>{item.title}</span>
                      <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      {item.items.map((subItem) => (
                        <SidebarMenuSubItem key={subItem.title}>
                          <SidebarMenuSubButton
                            asChild
                            isActive={location.pathname === subItem.url}
                          >
                            <Link to={subItem.url}>
                              <span>{subItem.title}</span>
                            </Link>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      ))}
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </SidebarMenuItem>
              </Collapsible>
            ) : (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton
                  asChild
                  isActive={location.pathname === item.url}
                >
                  <Link to={item.url} className="group/item">
                    <item.icon className="icon-bounce group-hover/item:-translate-y-1" />
                    <span>{item.title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            )
          )}
        </SidebarMenu>
        <SidebarMenu className="mt-auto">
          {CONTACTS.map((item) => (
            <SidebarMenuItem key={item.id}>
              <SidebarMenuButton asChild className="hover:bg-transparent">
                <a
                  href={item.url.address}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline group/contact"
                  onClick={() =>
                    sendEventToGoogle("social_click", {
                      platform: item.url.name,
                    })
                  }
                >
                  <item.icon className="icon-bounce group-hover/contact:-translate-y-1" />
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
