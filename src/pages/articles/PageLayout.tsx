import { useState } from "react";
import { useRSSFeed } from "./useRSSFeed.ts";
import { useDocumentTitle } from "@/hooks/useDocumentTitle.ts";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select.tsx";
import { RSS_PROVIDERS, type RSSFeedProvider } from "@/data/rssProvider.ts";
import LoadingSkeleton from "@/pages/articles/LoadingSkeleton.tsx";
import ArticleCard from "@/pages/articles/ArticleCard.tsx";
import ErrorMessage from "@/pages/articles/ErrorMessage.tsx";
import { Button } from "@/components/ui/button.tsx";
import { RefreshCw } from "lucide-react";
import { clearFeedCache } from "@/pages/articles/rssFeedCache.ts";
import { sendEventToGoogle } from "@/lib/utils.ts";

interface SubjectArticlesPageProps {
  subject: "gaming" | "tech" | "finance";
}

export default function PageLayout({ subject }: SubjectArticlesPageProps) {
  const [selectedProvider, setSelectedProvider] = useState<RSSFeedProvider>(
    () => {
      const stored = localStorage.getItem(`${subject}ArticlesSelectedProvider`);
      if (stored) {
        const provider = RSS_PROVIDERS.find((p) => p.id === Number(stored));
        if (provider) return provider;
      }
      return RSS_PROVIDERS.find((p) => p.subject === subject)!;
    }
  );
  const [refreshTrigger, setRefreshTrigger] = useState(0);

  const { feed, loading, error } = useRSSFeed(
    selectedProvider.url.address,
    refreshTrigger
  );

  const handleProviderChange = (id: string) => {
    const provider = RSS_PROVIDERS.find((p) => p.id === Number(id))!;
    setSelectedProvider(provider);
    sendEventToGoogle("article_provider_click", {
      provider_name: provider.name,
      provider_subject: provider.subject,
    });
    localStorage.setItem(`${subject}ArticlesSelectedProvider`, id);
  };

  const handleRefresh = () => {
    clearFeedCache(selectedProvider.url.address);
    setRefreshTrigger((prev) => prev + 1);
  };

  useDocumentTitle("Articles | Schwifter");

  return (
    <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
      <div className="flex-1 bg-muted/50 min-h-[calc(100vh-4rem-0.5rem)] md:min-h-min rounded-xl p-6 pt-4">
        <div className="flex gap-3 items-center mb-4">
          <h1 className="text-md font-bold">Provider</h1>
          <Select
            value={String(selectedProvider.id)}
            onValueChange={handleProviderChange}
          >
            <SelectTrigger className="max-w-[140px] sm:max-w-[200px]">
              <SelectValue placeholder="Select provider" />
            </SelectTrigger>

            <SelectContent>
              <SelectGroup>
                {RSS_PROVIDERS.filter(
                  (provider) => provider.subject === subject
                ).map((provider) => (
                  <SelectItem key={provider.id} value={String(provider.id)}>
                    {provider.name}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>

          <Button
            variant="outline"
            size="icon"
            onClick={handleRefresh}
            disabled={loading}
            title="Refresh provider"
            className="bg-transparent"
          >
            <RefreshCw
              className={`h-[1.2rem] w-[1.2rem] scale-100 ${loading ? "animate-spin" : ""}`}
            />
          </Button>
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
