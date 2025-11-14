"use client";

import type { ColumnDef } from "@tanstack/react-table";
import { Badge } from "@/components/ui/badge.tsx";

export type Practice = {
  id: number;
  name: string;
  url: string;
  languages: string[];
};

export const columns: ColumnDef<Practice>[] = [
  {
    accessorKey: "id",
    header: "#",
  },
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => {
      return (
        <a
          href={row.original.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline"
        >
          {row.original.name}
        </a>
      );
    },
  },
  {
    accessorKey: "languages",
    header: "Languages",
    cell: ({ row }) => {
      return (
        <div className="flex flex-wrap gap-1">
          {row.original.languages.map((language: string, index: number) => (
            <Badge key={index} variant="outline" className="px-1.5">
              {language}
            </Badge>
          ))}
        </div>
      );
    },
  },
];
