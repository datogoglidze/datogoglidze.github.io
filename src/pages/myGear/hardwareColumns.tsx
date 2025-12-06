import type { ColumnDef } from "@tanstack/react-table";
import { ExternalLink } from "lucide-react";
import type { Hardware } from "@/data/hardware.ts";

const hardwareColumns: ColumnDef<Hardware>[] = [
  {
    accessorKey: "component",
    header: "Component",
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "url",
    header: "Specs",
    cell: ({ row }) => {
      return (
        <a
          href={row.original.url.address}
          target="_blank"
          rel="noopener noreferrer"
          className="text-pastel-blue hover:underline inline-flex items-center gap-2"
        >
          {row.original.url.name}
          {row.original.url.address && row.original.url.name && (
            <ExternalLink className="w-3.5 h-3.5 opacity-70" />
          )}
        </a>
      );
    },
  },
];

export default hardwareColumns;
