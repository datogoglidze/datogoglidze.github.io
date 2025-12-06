import { useDocumentTitle } from "@/hooks/useDocumentTitle";
import hardwareColumns from "@/pages/myGear/hardwareColumns.tsx";
import { DataTable } from "@/components/data-table.tsx";
import { HARDWARE } from "@/data/hardware.ts";

export default function MyGear() {
  useDocumentTitle("My Gear | Schwifter");

  return (
    <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
      <div className="bg-muted/50 rounded-xl p-6 pt-4">
        <div className="flex flex-col xl:flex-row gap-10">
          <div className="bg-muted/50 border border-transparent hover:border rounded-lg card-bounce flex flex-col p-6 pt-4 w-full">
            <h1 className="text-2xl font-bold mb-4">Hardware</h1>
            <DataTable columns={hardwareColumns} data={HARDWARE} />
          </div>

          <div className="bg-muted/50 border border-transparent hover:border rounded-lg card-bounce flex flex-col  p-6 pt-4 w-full">
            <h1 className="text-2xl font-bold mb-4">Software</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
