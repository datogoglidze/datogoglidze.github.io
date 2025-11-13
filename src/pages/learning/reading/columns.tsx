"use client";

import type { ColumnDef } from "@tanstack/react-table";

export type Reading = {
  id: number;
  name: string;
  link: string;
  languages: string;
};

export const columns: ColumnDef<Reading>[] = [
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
];
