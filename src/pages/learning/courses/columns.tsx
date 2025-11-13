"use client";

import type { ColumnDef } from "@tanstack/react-table";
import { Badge } from "@/components/ui/badge";
import { IconCircleCheckFilled } from "@tabler/icons-react";

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
];
