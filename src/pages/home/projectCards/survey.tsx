import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { IconExternalLink } from "@tabler/icons-react";

export function SurveyCard() {
  return (
    <Card className="bg-muted/50">
      <CardHeader>
        <CardTitle>Survey Form</CardTitle>
        <CardDescription>Survey page layout example</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-1 items-end">
        <img
          src="/main-page/surveyForm.jpg"
          className="rounded-md"
          alt="library in computer"
        />
      </CardContent>
      <CardFooter>
        <a
          href="https://codepen.io/datogoglidze/pen/qBRgggX"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline inline-flex items-center gap-1.5"
        >
          CodePen
          <IconExternalLink className="w-3.5 h-3.5 opacity-70" />
        </a>
      </CardFooter>
    </Card>
  );
}
