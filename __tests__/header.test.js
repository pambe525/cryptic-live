import { render, screen } from "@testing-library/react";
import Header from "../components/header.js";

describe("Header", () => {
  it('has logo', () => {
    render(<Header />);
    const logo = screen.getByRole('img', 'logo.png');
    expect(logo).toBeInTheDocument();
  });
});