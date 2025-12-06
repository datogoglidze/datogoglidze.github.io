export function TypographyList({ items }: { items: string[] }) {
  return (
    <ul className="ml-6 list-disc [&>li]:mt-2">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}
