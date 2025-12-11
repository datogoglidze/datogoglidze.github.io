import { render, screen, waitFor } from "@testing-library/react";
import MyGearPage from "@/pages/my-gear/page";
import { HARDWARE } from "@/data/hardware";
import { SOFTWARE } from "@/data/software";

describe("MyGearPage", () => {
  it("shows hardware and software sections with data", async () => {
    const { container } = render(<MyGearPage />);

    expect(screen.getByRole("heading", { name: /hardware/i })).toBeVisible();
    expect(screen.getByRole("heading", { name: /software/i })).toBeVisible();

    const hardwareTable = container.querySelector("table");
    expect(hardwareTable).toBeInTheDocument();
    expect(hardwareTable!.querySelectorAll("tbody tr").length).toBe(
      HARDWARE.length
    );

    const accordionItems = container.querySelectorAll(
      "[data-radix-collection-item]"
    );
    expect(accordionItems.length).toBe(SOFTWARE.length);

    await waitFor(() => expect(document.title).toBe("My Gear | Schwifter"));
  });
});
