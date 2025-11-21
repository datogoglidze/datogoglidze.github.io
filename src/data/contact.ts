import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import * as React from "react";
import type { Url } from "@/types/common.ts";

export interface Contact {
  id: number;
  name: string;
  url: Url;
  icon: React.ElementType;
}

export const CONTACTS: Contact[] = [
  {
    id: 1,
    name: "schwifterpickle",
    url: {
      name: "X",
      address: "https://x.com/schwifterpickle",
    },
    icon: Twitter,
  },
  {
    id: 2,
    name: "d-goglidze",
    url: {
      name: "LinkedIn",
      address: "https://www.linkedin.com/in/d-goglidze/",
    },
    icon: Linkedin,
  },
  {
    id: 3,
    name: "datogoglidze",
    url: {
      name: "GitHub",
      address: "https://github.com/datogoglidze",
    },
    icon: Github,
  },
  {
    id: 4,
    name: "d.goglidze22@gmail.com",
    url: {
      name: "Gmail",
      address: "mailto:d.goglidze22@gmail.com",
    },
    icon: Mail,
  },
];
