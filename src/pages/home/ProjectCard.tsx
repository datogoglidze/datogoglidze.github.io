import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card.tsx";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip.tsx";
import { ExternalLink, Lock } from "lucide-react";
import { Button } from "@/components/ui/button.tsx";

import type { Project } from "@/data/project.ts";
import { sendEventToGoogle } from "@/lib/utils.ts";

export function ProjectCard({ project }: { project: Project }) {
  const words = project.description.trim().split(/\s+/);
  const isTruncated = words.length > 10;
  const displayDescription = isTruncated
    ? `${words.slice(0, 10).join(" ")}...`
    : project.description;

  return (
    <Card className="bg-muted/50 card-bounce">
      <CardHeader>
        <CardTitle>{project.name}</CardTitle>
        {isTruncated ? (
          <Tooltip>
            <TooltipTrigger asChild>
              <CardDescription tabIndex={0} className="cursor-default">
                {displayDescription}
              </CardDescription>
            </TooltipTrigger>
            <TooltipContent className="max-w-xs text-xs sm:max-w-sm">
              <p>{project.description}</p>
            </TooltipContent>
          </Tooltip>
        ) : (
          <CardDescription>{displayDescription}</CardDescription>
        )}
      </CardHeader>
      <CardContent className="flex flex-1 items-end justify-center">
        <img
          src={project.image.source}
          className="rounded-md aspect-video w-full object-cover"
          alt={project.image.name}
          width={720}
          height={405}
        />
      </CardContent>
      <CardFooter>
        {project.isPrivate ? (
          <Button
            variant="outline"
            size="sm"
            disabled
            className="w-full text-muted-foreground"
          >
            <Lock className="h-3 w-3" />
            Private
          </Button>
        ) : project.url?.address ? (
          <Button variant="outline" size="sm" asChild className="w-full">
            <a
              href={project.url.address}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2"
              onClick={() =>
                sendEventToGoogle("project_click", {
                  project_name: project.name,
                })
              }
            >
              {project.url.name}
              <ExternalLink className="h-3 w-3" />
            </a>
          </Button>
        ) : (
          <Button
            variant="outline"
            size="sm"
            disabled
            className="w-full text-muted-foreground"
          >
            {project.url?.name || "Website"}
            <ExternalLink className="h-3 w-3" />
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
