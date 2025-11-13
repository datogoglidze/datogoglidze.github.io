import { DataTable } from "@/pages/learning/data-table";
import { columns as courseColumns } from "@/pages/learning/courses/columns.tsx";
import { columns as readingColumns } from "@/pages/learning/reading/columns.tsx";
import { columns as practiceColumns } from "@/pages/learning/practices/columns.tsx";
import getCoursesData from "@/pages/learning/courses/data.tsx";
import getReadingsData from "@/pages/learning/reading/data.tsx";
import getPracticesData from "@/pages/learning/practices/data.tsx";

export default function LearningPage() {
  const courses = getCoursesData();
  const readings = getReadingsData();
  const practices = getPracticesData();

  return (
    <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
      <div className="bg-muted/50 rounded-xl md:min-h-min p-6">
        <h1 className="text-2xl font-bold mb-4">Courses</h1>
        <DataTable columns={courseColumns} data={courses} />
      </div>

      <div className="bg-muted/50 rounded-xl md:min-h-min p-6">
        <h1 className="text-2xl font-bold mb-4">Reading</h1>
        <DataTable columns={readingColumns} data={readings} />
      </div>

      <div className="bg-muted/50 rounded-xl md:min-h-min p-6">
        <h1 className="text-2xl font-bold mb-4">Practice</h1>
        <DataTable columns={practiceColumns} data={practices} />
      </div>
    </div>
  );
}
