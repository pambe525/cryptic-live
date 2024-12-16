/**
 * @jest-environment jsdom
 */
import { render, screen, within } from "@testing-library/react";
import Header from "@/components/layout/header.js";

describe("Header", () => {
  it("has logo that links to home page", () => {
    render(<Header />);
    const links = screen.getAllByRole("link");
    const logo = within(links[0]).getByRole('img', 'logo.png');
    expect(logo).toBeInTheDocument();
    expect(links[0]).toHaveAttribute('href', '/');
  });
});