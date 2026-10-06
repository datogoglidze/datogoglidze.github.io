import type { Image, Url } from "@/types/common.ts";

export interface Project {
  id: number;
  name: string;
  description: string;
  image: Image;
  url?: Url;
  isPrivate?: boolean;
}

export const PROJECTS: Project[] = [
  {
    id: 1,
    name: "GitHub Workflow Dispatcher",
    description:
      "Distributed dispatching and scheduling platform running ~30 workflows an average of 10,000 times monthly across 30 servers to replace GitHub Actions native cron schedules; built with FastAPI, APScheduler, SQLite, React 19, and Docker, featuring token bucket rate limiting with jitter, a management dashboard, and a FastMCP server for AI agent workflow automation.",
    image: {
      name: "GitHub Workflow Dispatcher",
      source: "/main-page/workflow-scheduler.jpg",
    },
    isPrivate: true,
  },
  {
    id: 2,
    name: "Actions",
    description: "Reusable Workflows for project deployment.",
    image: {
      name: "Actions",
      source: "/main-page/actions.jpg",
    },
    isPrivate: true,
  },
  {
    id: 3,
    name: "Investments Manager",
    description:
      "Transaction recording and data analysis powered by AI agents.",
    image: {
      name: "Investments Manager",
      source: "/main-page/investments.jpg",
    },
    isPrivate: true,
  },
  {
    id: 4,
    name: "AI Robot",
    description:
      "ESP32-S3 programmed to act as an AI-powered family robot with various sensors.",
    image: {
      name: "AI Robot",
      source: "/main-page/ai-robot.jpg",
    },
    isPrivate: true,
  },
  {
    id: 5,
    name: "City Simulation",
    description:
      "Real-time city simulation with role-based agents moving on a hex grid.",
    image: {
      name: "Hexagonal shaped city center",
      source: "/main-page/city-simulator.jpg",
    },
    url: {
      name: "GitHub",
      address: "https://github.com/datogoglidze/city-simulation-service.git",
    },
    isPrivate: false,
  },
  {
    id: 6,
    name: "Bloknot",
    description: "Manage basic notes.",
    image: {
      name: "Note on a wall",
      source: "/main-page/bloknot.jpg",
    },
    url: {
      name: "GitHub",
      address: "https://github.com/datogoglidze/bloknot.git",
    },
    isPrivate: false,
  },
  {
    id: 7,
    name: "CS50x: Intranet",
    description:
      "Manage company-wide communications between employees and administrators.",
    image: {
      name: "Office",
      source: "/main-page/intranet.jpg",
    },
    url: {
      name: "GitHub",
      address: "https://github.com/datogoglidze/cs50x-intranet.git",
    },
    isPrivate: false,
  },
  {
    id: 8,
    name: "Notifications",
    description:
      "Production FastAPI service used by 3 companies, processing an average of 42,000 SMS and email messages per day through extensible provider adapters.",
    image: {
      name: "Notifications",
      source: "/main-page/notifications.jpg",
    },
    isPrivate: true,
  },
  {
    id: 9,
    name: "Campaigns",
    description: "Manages active marketing campaigns for POS devices.",
    image: {
      name: "Campaigns",
      source: "/main-page/campaigns.jpg",
    },
    isPrivate: true,
  },
  {
    id: 10,
    name: "Home Server Automation",
    description:
      "Ansible scripts for home server management and infrastructure.",
    image: {
      name: "Home Server Automation",
      source: "/main-page/home-server.jpg",
    },
    isPrivate: true,
  },
  {
    id: 11,
    name: "Ecosystem",
    description:
      "Automates configuration across 30 Linux servers and 1 Windows server and deployment of 40 services, supporting approximately 200 test and production deployments per month.",
    image: {
      name: "Ecosystem",
      source: "/main-page/ecosystem.jpg",
    },
    isPrivate: true,
  },
  {
    id: 12,
    name: "Warehouse Management System",
    description:
      "Pilot tested across 2 warehouses with 5 users, replacing paper-based test workflows with Android task tracking and immediate manager visibility.",
    image: {
      name: "Warehouse Management System",
      source: "/main-page/warehouse-management-system.jpg",
    },
    isPrivate: true,
  },
  {
    id: 13,
    name: "Bolt Integration",
    description:
      "Periodically synchronizes products, prices, and inventory remainders with Bolt API.",
    image: {
      name: "Bolt Integration",
      source: "/main-page/bolt-integration.png",
    },
    isPrivate: true,
  },
];
