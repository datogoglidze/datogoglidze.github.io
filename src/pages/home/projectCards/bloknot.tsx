import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { IconExternalLink } from "@tabler/icons-react";

export function BloknotCard() {
  return (
    <Card className="bg-muted/50">
      <CardHeader>
        <CardTitle>Bloknot</CardTitle>
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
        <div className="flex gap-2">
          <a
            href="https://github.com/datogoglidze/bloknot.git"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline inline-flex items-center gap-1.5"
          >
            Backend
            <IconExternalLink className="w-3.5 h-3.5 opacity-70" />
          </a>
          <a
            href="https://github.com/datogoglidze/bloknot-front.git"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline inline-flex items-center gap-1.5"
          >
            Frontend
            <IconExternalLink className="w-3.5 h-3.5 opacity-70" />
          </a>
        </div>
      </CardFooter>
    </Card>
  );
}
