"use client";

import type { ColumnDef } from "@tanstack/react-table";

export type Course = {
  id: number;
  name: string;
  link: string;
  languages: string;
  hasCertificate: boolean;
};

export const columns: ColumnDef<Course>[] = [
  {
    accessorKey: "id",
    header: "#",
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "link",
    header: "Link",
  },
  {
    accessorKey: "languages",
    header: "Languages",
  },
  {
    accessorKey: "hasCertificate",
    header: "With Certificate",
  },
];
