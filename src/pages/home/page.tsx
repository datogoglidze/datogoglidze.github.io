export default function HomePage() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
      <div className="flex flex-col items-center justify-center bg-muted/50 min-h-[calc(100vh-4rem-0.5rem)] rounded-xl p-6">
        <img
          className="h-64 w-64 rounded-full"
          src="/alien-300-300.jpg"
          alt="Alien Avatar"
        />
        <p className="font-medium mt-4">I'm Schwifter</p>
        <p className="font-medium mt-4">Software Engineer</p>
      </div>
      <div className="grid auto-rows-min gap-4 md:grid-cols-3">
        <div className="bg-muted/50 aspect-video rounded-xl" />
        <div className="bg-muted/50 aspect-video rounded-xl" />
        <div className="bg-muted/50 aspect-video rounded-xl" />
      </div>
      <div className="bg-muted/50 flex-1 rounded-xl p-6"></div>
    </div>
  );
}
