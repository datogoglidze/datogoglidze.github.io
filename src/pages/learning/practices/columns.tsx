"use client";

import type { ColumnDef } from "@tanstack/react-table";
import { Badge } from "@/components/ui/badge.tsx";
import { ExternalLink } from "lucide-react";
import type { Practice } from "@/data/practice.ts";

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
          className="text-primary hover:underline inline-flex items-center gap-2"
        >
          {row.original.name}
          <ExternalLink className="w-3.5 h-3.5 opacity-70" />
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
