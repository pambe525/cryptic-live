import { render, screen, within } from "@testing-library/react";
import Home from "../app/page.js";

// import { getPage } from "next-page-tester";

describe("Home Page", () => {
  beforeEach(() => {
    render(<Home />);
  });

  it("to have headings", () => {
    const headings = screen.getAllByRole("heading");
    expect(headings).toHaveLength(2);
    expect(headings[0]).toHaveTextContent(/word puzzles for cruciverbalists/i);
    expect(headings[1]).toHaveTextContent(/join the community/i);
  });
});
