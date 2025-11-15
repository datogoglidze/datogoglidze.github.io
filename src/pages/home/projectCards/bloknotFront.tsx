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

export function BloknotFrontCard() {
  return (
    <Card className="bg-muted/50">
      <CardHeader>
        <CardTitle>Bloknot: Front</CardTitle>
        <CardDescription>Manage basic notes</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-1 items-end">
        <img
          src="/main-page/bloknot.jpg"
          className="rounded-md"
          alt="library in computer"
        />
      </CardContent>
      <CardFooter>
        <Button variant="outline" size="sm" asChild className="w-full">
          <a
            href="https://github.com/datogoglidze/bloknot-front.git"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2"
          >
            GitHub
            <ExternalLink className="h-3 w-3" />
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}
