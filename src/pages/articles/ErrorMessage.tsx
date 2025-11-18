export default function ErrorMessage({ message }: { message: string }) {
  return (
    <div className="text-destructive p-4 rounded-lg bg-destructive/10">
      <p className="font-semibold">Error loading feed</p>
      <p className="text-sm">{message}</p>
    </div>
  );
}
