import { useState } from "react";
import { useRSSFeed } from "./useRSSFeed";
import { formatDate } from "./dateFormatter";
import type { RSSFeedItem, RSSFeedProvider } from "./types";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { ExternalLink, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator.tsx";
import RSS_PROVIDERS from "@/data/rssProviders.ts";

const SKELETON_COUNT = 3;

function LoadingSkeleton() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {Array.from({ length: SKELETON_COUNT }).map((_, i) => (
        <Card key={i}>
          <CardHeader className="mb-1">
            <Skeleton className="h-10 w-full" />
            <Skeleton className="h-4 w-1/2" />
          </CardHeader>
          <CardContent>
            <Skeleton className="h-40" />
          </CardContent>
          <CardContent>
            <Skeleton className="h-20 w-full" />
          </CardContent>
          <CardFooter>
            <Skeleton className="h-10 w-full" />
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}

function ErrorMessage({ message }: { message: string }) {
  return (
    <div className="text-destructive p-4 rounded-lg bg-destructive/10">
      <p className="font-semibold">Error loading feed</p>
      <p className="text-sm">{message}</p>
    </div>
  );
}

function ArticleCard({ item }: { item: RSSFeedItem }) {
  const hasContentSnippet = Boolean(item.contentSnippet);
  const buttonText = hasContentSnippet ? "Read More" : "Read Article";

  return (
    <Card className="bg-muted/50 flex flex-col">
      <CardHeader className="flex flex-1 flex-col justify-between">
        <CardTitle className="line-clamp-2">{item.title}</CardTitle>
        {item.pubDate && (
          <CardDescription className="flex items-center gap-1 text-xs">
            <Calendar className="h-3 w-3" />
            {formatDate(item.pubDate || item.isoDate)}
          </CardDescription>
        )}
      </CardHeader>
      <CardContent>
        {item.thumbnail && (
          <img
            src={item.thumbnail}
            alt={item.title}
            className="rounded-md"
            loading="lazy"
          />
        )}
      </CardContent>
      {hasContentSnippet && (
        <CardContent className="flex-1">
          <p className="text-sm text-muted-foreground line-clamp-3">
            {item.contentSnippet}
          </p>
        </CardContent>
      )}
      <CardFooter>
        <Button variant="outline" size="sm" asChild className="w-full">
          <a
            href={item.link}
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

export default function ArticlesPage() {
  const [selectedProvider, setSelectedProvider] = useState<RSSFeedProvider>(
    () => {
      const stored = localStorage.getItem("ArticlesSelectedProvider");
      if (stored) {
        const provider = RSS_PROVIDERS.find((p) => p.id === Number(stored));
        if (provider) return provider;
      }
      return RSS_PROVIDERS[0];
    },
  );

  const { feed, loading, error } = useRSSFeed(selectedProvider.url);

  const handleProviderChange = (value: string) => {
    const provider = RSS_PROVIDERS.find((p) => p.id === Number(value))!;
    setSelectedProvider(provider);
    localStorage.setItem("ArticlesSelectedProvider", value);
  };

  const hasArticles = feed && feed.items.length > 0;

  return (
    <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
      <div className="flex-1 bg-muted/50 min-h-[calc(100vh-4rem-0.5rem)] md:min-h-min rounded-xl p-6">
        <div className="flex gap-3 items-center mb-4">
          <h1 className="text-md font-bold">Provider</h1>
          <Select
            value={String(selectedProvider.id)}
            onValueChange={handleProviderChange}
          >
            <SelectTrigger className="w-[170px]">
              <SelectValue placeholder="Select provider" />
            </SelectTrigger>

            <SelectContent>
              <SelectGroup>
                <SelectLabel>News</SelectLabel>
                {RSS_PROVIDERS.filter(
                  (provider) => provider.type === "news",
                ).map((provider) => (
                  <SelectItem key={provider.id} value={String(provider.id)}>
                    {provider.name}
                  </SelectItem>
                ))}
              </SelectGroup>

              <Separator orientation="horizontal" className="my-2" />

              <SelectGroup>
                <SelectLabel>Articles</SelectLabel>
                {RSS_PROVIDERS.filter(
                  (provider) => provider.type === "articles",
                ).map((provider) => (
                  <SelectItem key={provider.id} value={String(provider.id)}>
                    {provider.name}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        {loading && <LoadingSkeleton />}

        {error && <ErrorMessage message={error} />}

        {!loading && !error && feed && (
          <div>
            {feed.items.length === 0 ? (
              <p className="text-muted-foreground">No articles found.</p>
            ) : (
              <div className="grid auto-rows-min gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {feed.items.map((item, index) => (
                  <ArticleCard
                    key={item.guid || item.link || index}
                    item={item}
                  />
                ))}
              </div>
            )}
          </div>
        )}
      </div>

      {!loading && !error && hasArticles && (
        <div className="flex flex-col gap-2 items-center bg-muted/50 rounded-xl p-6">
          <h1>That's all for now...</h1>
          <h1>Come back tomorrow</h1>
        </div>
      )}
    </div>
  );
}
