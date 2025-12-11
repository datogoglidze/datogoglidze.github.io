import { render, screen, waitFor } from "@testing-library/react";
import GamingArticlesPage from "@/pages/articles/subjects/gaming";
import { RSS_PROVIDERS } from "@/data/rssProvider";

describe("GamingArticlesPage", () => {
  it("renders provider selector with gaming providers", async () => {
    render(<GamingArticlesPage />);

    expect(screen.getByRole("heading", { name: /provider/i })).toBeVisible();
    expect(screen.getByRole("combobox")).toBeInTheDocument();

    const gamingProviders = RSS_PROVIDERS.filter((p) => p.subject === "gaming");
    expect(gamingProviders.length).toBeGreaterThan(0);

    await waitFor(() => expect(document.title).toBe("Articles | Schwifter"));
  });
});
