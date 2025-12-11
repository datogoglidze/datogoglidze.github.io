import { render, screen, waitFor } from "@testing-library/react";
import LearningPage from "@/pages/learning/page";
import { COURSES } from "@/data/course";
import { READINGS } from "@/data/reading";
import { PRACTICES } from "@/data/practice";

describe("LearningPage", () => {
  it("shows courses, reading, and practice sections with data", async () => {
    const { container } = render(<LearningPage />);

    expect(screen.getByRole("heading", { name: /courses/i })).toBeVisible();
    expect(screen.getByRole("heading", { name: /reading/i })).toBeVisible();
    expect(screen.getByRole("heading", { name: /practice/i })).toBeVisible();

    const tables = container.querySelectorAll("table");
    expect(tables.length).toBe(3);

    expect(tables[0].querySelectorAll("tbody tr").length).toBe(COURSES.length);
    expect(tables[1].querySelectorAll("tbody tr").length).toBe(READINGS.length);
    expect(tables[2].querySelectorAll("tbody tr").length).toBe(
      PRACTICES.length
    );

    await waitFor(() => expect(document.title).toBe("Learning | Schwifter"));
  });
});
