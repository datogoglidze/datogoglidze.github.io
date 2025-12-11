import { render, screen, waitFor } from "@testing-library/react";
import App from "@/App";

describe("App", () => {
  it("renders the home page by default", async () => {
    render(<App />);

    expect(
      await screen.findByText("I'm Schwifter", { exact: false })
    ).toBeInTheDocument();

    await waitFor(() => expect(document.title).toBe("Home | Schwifter"));
  });
});
