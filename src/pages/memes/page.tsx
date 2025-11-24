import { useState, useEffect, useRef, useCallback } from "react";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Loader2 } from "lucide-react";

const TOTAL_MEMES = 1080;
const BATCH_SIZE = 20;

export default function MemesPage() {
  const [loadedCount, setLoadedCount] = useState(BATCH_SIZE);
  const observerTarget = useRef<HTMLDivElement>(null);

  const memes = Array.from({ length: loadedCount }, (_, i) => i + 1);

  const handleObserver = useCallback((entries: IntersectionObserverEntry[]) => {
    const [target] = entries;
    if (target.isIntersecting) {
      setLoadedCount((prev) => Math.min(prev + BATCH_SIZE, TOTAL_MEMES));
    }
  }, []);

  useEffect(() => {
    const element = observerTarget.current;
    const observer = new IntersectionObserver(handleObserver, {
      threshold: 1.0,
      rootMargin: "100px",
    });

    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [handleObserver]);

  useDocumentTitle("Memes | Schwifter");

  return (
    <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
      <div className="flex-1 bg-muted/50 min-h-[calc(100vh-4rem-0.5rem)] md:min-h-min rounded-xl p-6 pt-4">
        <div className="grid auto-rows-min gap-4 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-7">
          {memes.map((num) => (
            <Dialog key={num}>
              <DialogTrigger asChild>
                <div className="flex justify-center aspect-square overflow-hidden rounded-md cursor-pointer bg-muted/50 hover:border card-bounce p-2 relative group">
                  <img
                    src={`/memes/${num}.jpg`}
                    alt={`Meme ${num}`}
                    className="h-full w-full object-cover rounded-md transition-transform group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-3xl w-full">
                <DialogHeader>
                  <DialogTitle>Meme #{num}</DialogTitle>
                </DialogHeader>
                <div className="flex items-center justify-center p-2">
                  <img
                    src={`/memes/${num}.jpg`}
                    alt={`Meme ${num}`}
                    className="max-w-full max-h-[80vh] object-contain rounded-md"
                  />
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>

        {loadedCount < TOTAL_MEMES && (
          <div
            ref={observerTarget}
            className="flex justify-center items-center p-8 w-full"
          >
            <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
          </div>
        )}
      </div>
    </div>
  );
}
