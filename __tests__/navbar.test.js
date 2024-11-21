import { render, screen } from "@testing-library/react";
import NavBar from "../components/navbar.js";

describe("NavBar", () => {
  it('is rendered', () => {
    render(<NavBar />);
    const navBar = screen.getByRole('navigation');
    const links = screen.getAllByRole('link');
    expect(navBar).toBeInTheDocument();
    expect(links).toHaveLength(2);
  });
})