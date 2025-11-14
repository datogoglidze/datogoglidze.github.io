"use client";

import type { ColumnDef } from "@tanstack/react-table";
import { Badge } from "@/components/ui/badge";
import { IconCircleCheckFilled, IconExternalLink } from "@tabler/icons-react";

export type Course = {
  id: number;
  name: string;
  url: string;
  languages: string[];
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
    cell: ({ row }) => {
      return (
        <a
          href={row.original.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline inline-flex items-center gap-1.5"
        >
          {row.original.name}
          <IconExternalLink className="w-3.5 h-3.5 opacity-70" />
        </a>
      );
    },
  },
  {
    accessorKey: "hasCertificate",
    header: "With Certificate",
    cell: ({ row }) => (
      <Badge variant="outline" className="px-1.5">
        {row.original.hasCertificate ? (
          <IconCircleCheckFilled className="fill-green-500 dark:fill-green-400" />
        ) : (
          <IconCircleCheckFilled className="fill-red-500 dark:fill-red-400" />
        )}
      </Badge>
    ),
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
