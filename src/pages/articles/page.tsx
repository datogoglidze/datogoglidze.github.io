import { useState } from "react";
import { useRSSFeed } from "./useRSSFeed";
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
import getRssProviders, { type RSSFeedProvider } from "@/data/rssProvider.ts";
import LoadingSkeleton from "@/pages/articles/LoadingSkeleton.tsx";
import ArticleCard from "@/pages/articles/ArticleCard.tsx";
import ErrorMessage from "@/pages/articles/ErrorMessage.tsx";

export default function ArticlesPage() {
  const rssProviders = getRssProviders();

  const [selectedProvider, setSelectedProvider] = useState<RSSFeedProvider>(
    () => {
      const stored = localStorage.getItem("ArticlesSelectedProvider");
      if (stored) {
        const provider = rssProviders.find((p) => p.id === Number(stored));
        if (provider) return provider;
      }
      return rssProviders[0];
    }
  );

  const { feed, loading, error } = useRSSFeed(selectedProvider.url.address);

  const handleProviderChange = (id: string) => {
    const provider = rssProviders.find((p) => p.id === Number(id))!;
    setSelectedProvider(provider);
    localStorage.setItem("ArticlesSelectedProvider", id);
  };

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
                {rssProviders
                  .filter((provider) => provider.type === "news")
                  .map((provider) => (
                    <SelectItem key={provider.id} value={String(provider.id)}>
                      {provider.name}
                    </SelectItem>
                  ))}
              </SelectGroup>

              <Separator orientation="horizontal" className="my-2" />

              <SelectGroup>
                <SelectLabel>Articles</SelectLabel>
                {rssProviders
                  .filter((provider) => provider.type === "articles")
                  .map((provider) => (
                    <SelectItem key={provider.id} value={String(provider.id)}>
                      {provider.name}
                    </SelectItem>
                  ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        {loading && <LoadingSkeleton count={3} />}

        {error && <ErrorMessage message={error} />}

        {!loading && !error && feed && (
          <div>
            {feed.items.length === 0 ? (
              <p className="text-muted-foreground">No articles found.</p>
            ) : (
              <div>
                <div className="grid auto-rows-min gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  {feed.items.map((article, index) => (
                    <ArticleCard
                      key={article.guid || article.link || index}
                      article={article}
                    />
                  ))}
                </div>

                <div className="flex mt-4 flex-col gap-2 items-center bg-muted/50 rounded-xl p-6">
                  <h1>That's all for now...</h1>
                  <h1>Come back tomorrow</h1>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
