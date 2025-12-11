import { render, waitFor } from "@testing-library/react";
import MusicPage from "@/pages/music/page.tsx";

describe("MusicPage", () => {
  it("renders Spotify playlist iframes and updates the document title", async () => {
    const { container } = render(<MusicPage />);

    const iframes = container.querySelectorAll("iframe");
    expect(iframes.length).toBe(5);

    iframes.forEach((iframe) => {
      expect(iframe.getAttribute("src")).toContain(
        "https://open.spotify.com/embed/playlist/"
      );
    });

    await waitFor(() => expect(document.title).toBe("Music | Schwifter"));
  });
});
