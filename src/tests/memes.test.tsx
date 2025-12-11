import { render, screen, waitFor } from "@testing-library/react";
import MemesPage from "@/pages/memes/page";

describe("MemesPage", () => {
  it("renders the initial meme batch and updates the document title", async () => {
    render(<MemesPage />);

    const memes = await screen.findAllByAltText(/meme \d+/i);
    expect(memes).toHaveLength(20);
    expect(memes[0]).toHaveAttribute("src", "/memes/1.jpg");
    expect(memes[memes.length - 1]).toHaveAttribute("src", "/memes/20.jpg");

    await waitFor(() => expect(document.title).toBe("Memes | Schwifter"));
  });
});
