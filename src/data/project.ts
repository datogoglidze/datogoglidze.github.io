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
      "Distributed dispatching and scheduling platform running ~30 workflows an average of 10,000 times monthly across 30 servers to replace unreliable GitHub Actions native cron schedules; built with FastAPI, APScheduler, SQLite, React 19, and Docker, featuring token bucket rate limiting with jitter, a management dashboard, and a FastMCP server for AI agent workflow automation.",
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
      "FastAPI service used by 3 companies, processing an average of 42,000 messages per day. Replaced direct MSSQL Agent HTTP jobs with an extensible provider-adapter architecture supporting MSG and Silknet for SMS and SMTP for email.",
    image: {
      name: "Notifications",
      source: "/main-page/notifications.jpg",
    },
    isPrivate: true,
  },
  {
    id: 9,
    name: "Campaigns",
    description:
      "Retail checkout engine built with Python (FastAPI) for POS devices. Evaluates active marketing campaigns, calculates real-time basket pricing across complex discount rules, manages loyalty cards with reward points, and generates purchase receipts with itemized totals and promotional gifts.",
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
      "Automated infrastructure using Ansible, Docker, HashiCorp Vault, and self-hosted GitHub Actions runners across 30 Linux servers and 1 Windows server. Manages 40 containerized services and ~200 monthly deployments, reducing server setup from days to 10 minutes and service deploys to 5 minutes.",
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
      "Full-stack platform built with Python (FastAPI), React, DevExtreme, and MSSQL, pilot-tested across 2 warehouses with 5 operators. Replaced paper-based workflows with mobile task tracking on Android phones, role-based state machines, order tracking, and real-time manager visibility.",
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
