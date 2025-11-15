export function formatDate(articleDate?: string): string {
  if (!articleDate) return "";

  try {
    const date = new Date(articleDate);

    if (isNaN(date.getTime())) {
      console.warn(`Invalid date format: ${articleDate}`);
      return articleDate;
    }

    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  } catch (error) {
    console.error(`Error formatting date: ${articleDate}`, error);
    return articleDate;
  }
}
