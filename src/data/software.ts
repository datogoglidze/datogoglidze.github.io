export interface Software {
  id: number;
  category: string;
  names: string[];
}

export const SOFTWARE: Software[] = [
  {
    id: 1,
    category: "OS",
    names: ["Windows 11", "Debian 13"],
  },
  {
    id: 2,
    category: "IDE",
    names: ["PyCharm", "WebStorm", "Cursor", "Google Antigravity"],
  },
  {
    id: 3,
    category: "Browser",
    names: ["Google Chrome", "Mozilla Firefox"],
  },
  {
    id: 4,
    category: "Office",
    names: ["MS Office", "Google Docs", "Notion"],
  },
  {
    id: 5,
    category: "Remote Access",
    names: [
      "Chrome Remote Desktop",
      "Moonlight + Sunshine",
      "Windows Remote Desktop Connection",
    ],
  },
  {
    id: 6,
    category: "Photo/Video Editing",
    names: ["Adobe Photoshop", "GIMP", "Davinci Resolve"],
  },
  {
    id: 7,
    category: "Gaming",
    names: [
      "Steam",
      "Epic Games",
      "EA Play",
      "Ubisoft Connect",
      "Battle.net",
      "Xbox",
    ],
  },
  {
    id: 8,
    category: "Media",
    names: ["Plex", "Kodi", "Spotify"],
  },
];
