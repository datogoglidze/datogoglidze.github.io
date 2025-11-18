import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function MemesPage() {
  const totalMemes = 1080;
  const memes = Array.from({ length: totalMemes }, (_, i) => i + 1);

  return (
    <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
      <div className="flex-1 bg-muted/50 min-h-[calc(100vh-4rem-0.5rem)] md:min-h-min rounded-xl p-6 pt-4">
        <div className="grid auto-rows-min gap-4 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-7">
          {memes.map((num) => (
            <Dialog key={num}>
              <DialogTrigger asChild>
                <div className="aspect-square overflow-hidden rounded-md bg-muted cursor-pointer hover:opacity-90 transition-opacity p-2">
                  <img
                    src={`/memes/${num}.jpg`}
                    alt={`Meme ${num}`}
                    className="w-full h-full object-contain rounded-md"
                    loading="lazy"
                  />
                </div>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Meme N{num}</DialogTitle>
                </DialogHeader>
                <div className="flex items-center justify-center">
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
      </div>
    </div>
  );
}
