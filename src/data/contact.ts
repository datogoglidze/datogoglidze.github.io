import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import * as React from "react";

export interface Contact {
  id: number;
  name: string;
  url: string;
  icon: React.ElementType;
}

export default function getContacts(): Contact[] {
  return [
    {
      id: 1,
      name: "schwifterpickle",
      url: "https://x.com/schwifterpickle",
      icon: Twitter,
    },
    {
      id: 2,
      name: "d-goglidze",
      url: "https://www.linkedin.com/in/d-goglidze/",
      icon: Linkedin,
    },
    {
      id: 3,
      name: "datogoglidze",
      url: "https://github.com/datogoglidze",
      icon: Github,
    },
    {
      id: 4,
      name: "d.goglidze22@gmail.com",
      url: "mailto:d.goglidze22@gmail.com",
      icon: Mail,
    },
  ];
}
