import type { RSSFeedItem } from "@/types/rss.ts";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card.tsx";
import { Calendar, ExternalLink } from "lucide-react";
import { formatDate } from "@/pages/articles/dateFormatter.ts";
import { Button } from "@/components/ui/button.tsx";

export default function ArticleCard({ article }: { article: RSSFeedItem }) {
  const hasContentSnippet = Boolean(article.contentSnippet);
  const buttonText = hasContentSnippet ? "Read More" : "Read Article";

  return (
    <Card className="bg-muted/50 card-bounce flex flex-col">
      <CardHeader
        className="flex flex-1 flex-col justify-between"
        title={article.title}
      >
        <CardTitle className="line-clamp-2">{article.title}</CardTitle>
        {article.pubDate && (
          <CardDescription className="flex items-center gap-1 text-xs">
            <Calendar className="h-3 w-3" />
            {formatDate(article.pubDate || article.isoDate)}
          </CardDescription>
        )}
      </CardHeader>
      <CardContent className="justify-items-center">
        {article.thumbnail && (
          <img
            src={article.thumbnail}
            alt={article.title}
            className="rounded-md"
            loading="lazy"
          />
        )}
      </CardContent>
      {hasContentSnippet && (
        <CardContent className="flex-1" title={article.contentSnippet}>
          <p className="text-sm text-muted-foreground line-clamp-3">
            {article.contentSnippet}
          </p>
        </CardContent>
      )}
      <CardFooter>
        <Button variant="outline" size="sm" asChild className="w-full">
          <a
            href={article.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2"
          >
            {buttonText}
            <ExternalLink className="h-3 w-3" />
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}
