import { DataTable } from "@/pages/learning/DataTable.tsx";
import coursesColumns from "@/pages/learning/dataTableColumns/courses.tsx";
import readingsColumns from "@/pages/learning/dataTableColumns/readings.tsx";
import practicesColumns from "@/pages/learning/dataTableColumns/practices.tsx";
import { COURSES } from "@/data/course.ts";
import { PRACTICES } from "@/data/practice.ts";
import { READINGS } from "@/data/reading.ts";

export default function LearningPage() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
      <div className="bg-muted/50 rounded-xl md:min-h-min p-6 pt-4">
        <h1 className="text-2xl font-bold mb-4">Courses</h1>
        <DataTable columns={coursesColumns} data={COURSES} />
      </div>

      <div className="bg-muted/50 rounded-xl md:min-h-min p-6 pt-4">
        <h1 className="text-2xl font-bold mb-4">Reading</h1>
        <DataTable columns={readingsColumns} data={READINGS} />
      </div>

      <div className="bg-muted/50 rounded-xl md:min-h-min p-6 pt-4">
        <h1 className="text-2xl font-bold mb-4">Practice</h1>
        <DataTable columns={practicesColumns} data={PRACTICES} />
      </div>
    </div>
  );
}
