import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button.tsx";

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
        <Button variant="outline" size="sm" asChild className="w-full">
          <a
            href="https://codepen.io/datogoglidze/pen/qBRgggX"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2"
          >
            CodePen
            <ExternalLink className="h-3 w-3" />
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}
