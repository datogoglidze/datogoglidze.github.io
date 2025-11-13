"use client";

import type { ColumnDef } from "@tanstack/react-table";

export type Practice = {
  id: number;
  name: string;
  link: string;
  languages: string;
};

export const columns: ColumnDef<Practice>[] = [
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
