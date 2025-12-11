import { render, screen, waitFor } from "@testing-library/react";
import TechArticlesPage from "@/pages/articles/subjects/tech";
import { RSS_PROVIDERS } from "@/data/rssProvider";

describe("TechArticlesPage", () => {
  it("renders provider selector with tech providers", async () => {
    render(<TechArticlesPage />);

    expect(screen.getByRole("heading", { name: /provider/i })).toBeVisible();
    expect(screen.getByRole("combobox")).toBeInTheDocument();

    const techProviders = RSS_PROVIDERS.filter((p) => p.subject === "tech");
    expect(techProviders.length).toBeGreaterThan(0);

    await waitFor(() => expect(document.title).toBe("Articles | Schwifter"));
  });
});
