import { render, screen, within } from "@testing-library/react";
import Header from "../components/header.js";

describe("Header", () => {
  it("has logo that links to home page", () => {
    render(<Header />);
    const link = screen.getByRole("link");
    const logo = within(link).getByRole('img', 'logo.png');
    expect(logo).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/');
  });
});