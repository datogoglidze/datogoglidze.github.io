import { useDocumentTitle } from "@/hooks/useDocumentTitle";
import { PLAYLISTS } from "@/data/spotifyPlaylists.ts";
import { useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";

export default function MusicPage() {
  useDocumentTitle("Music | Schwifter");

  const [loadedIframes, setLoadedIframes] = useState<Set<number>>(new Set());

  const handleIframeLoad = (playlistId: number) => {
    setLoadedIframes((prev) => new Set(prev).add(playlistId));
  };

  return (
    <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
      <div className="bg-muted/50 rounded-xl p-6 pt-4">
        <div className="grid auto-rows-min gap-10 xl:grid-cols-2">
          {PLAYLISTS.map((playlist) => (
            <div key={playlist.id} className="relative">
              {!loadedIframes.has(playlist.id) && (
                <Skeleton className="absolute h-[450px] w-full rounded-lg" />
              )}
              <iframe
                className="border hover:border rounded-lg card-bounce relative z-10"
                src={`https://open.spotify.com/embed/playlist/${playlist.externalId}?utm_source=generator`}
                width="100%"
                height="450"
                allow="clipboard-write; encrypted-media; picture-in-picture"
                loading="lazy"
                onLoad={() => handleIframeLoad(playlist.id)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
