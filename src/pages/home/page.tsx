export default function HomePage() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
      <div className="bg-muted/50 min-h-[91vh] flex-1 rounded-xl p-6">
        <h1 className="text-2xl font-bold mb-4">Profile pic</h1>
        <p>who am I</p>
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
