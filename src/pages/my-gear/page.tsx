import { SEOHead } from "@/components/seo-head";
import { DataTable } from "@/components/data-table.tsx";
import { HARDWARE } from "@/data/hardware.ts";
import { SOFTWARE } from "@/data/software.ts";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { TypographyList } from "@/components/typography-list.tsx";
import hardwareColumns from "@/pages/my-gear/dataTableColumns/hardware.tsx";

export default function MyGear() {
  return (
    <>
      <SEOHead
        title="My Gear"
        description="Hardware and software tools Schwifter uses for development and daily work."
        path="/my-gear"
      />

      <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
        <div className="bg-muted/50 rounded-xl md:min-h-min p-6 pt-4">
          <h1 className="text-2xl font-bold mb-4">Hardware</h1>
          <DataTable columns={hardwareColumns} data={HARDWARE} />
        </div>

        <div className="bg-muted/50 rounded-xl md:min-h-min p-6 pt-4">
          <h1 className="text-2xl font-bold mb-4">Software</h1>
          <Accordion type="multiple" className="w-full border rounded-lg">
            {SOFTWARE.map((software) => (
              <AccordionItem value={String(software.id)}>
                <AccordionTrigger className="px-2">
                  {software.category}
                </AccordionTrigger>
                <AccordionContent className="px-2">
                  {TypographyList({ items: software.names })}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </>
  );
}
