import { render, screen, waitFor } from "@testing-library/react";
import FinanceArticlesPage from "@/pages/articles/subjects/finance";
import { RSS_PROVIDERS } from "@/data/rssProvider";

describe("FinanceArticlesPage", () => {
  it("renders provider selector with finance providers", async () => {
    render(<FinanceArticlesPage />);

    expect(screen.getByRole("heading", { name: /provider/i })).toBeVisible();
    expect(screen.getByRole("combobox")).toBeInTheDocument();

    const financeProviders = RSS_PROVIDERS.filter(
      (p) => p.subject === "finance"
    );
    expect(financeProviders.length).toBeGreaterThan(0);

    await waitFor(() => expect(document.title).toBe("Articles | Schwifter"));
  });
});
