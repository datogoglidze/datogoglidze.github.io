import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { IconExternalLink } from "@tabler/icons-react";

export function TributeCard() {
  return (
    <Card className="bg-muted/50">
      <CardHeader>
        <CardTitle>Tribute Page</CardTitle>
        <CardDescription>Key life events of Abraham Lincoln</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-1 items-end">
        <img
          src="/main-page/tributePage.jpg"
          className="rounded-md"
          alt="library in computer"
        />
      </CardContent>
      <CardFooter>
        <a
          href="https://codepen.io/datogoglidze/pen/vYgvqLb"
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
