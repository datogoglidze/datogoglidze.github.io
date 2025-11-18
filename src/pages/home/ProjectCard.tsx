import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card.tsx";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button.tsx";

import type { Project } from "@/data/project.ts";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="bg-muted/50">
      <CardHeader>
        <CardTitle>{project.name}</CardTitle>
        <CardDescription>{project.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-1 items-end">
        <img
          src={project.imageSource}
          className="rounded-md"
          alt={project.imageAlt}
        />
      </CardContent>
      <CardFooter>
        <Button variant="outline" size="sm" asChild className="w-full">
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2"
          >
            {project.urlName}
            <ExternalLink className="h-3 w-3" />
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}
