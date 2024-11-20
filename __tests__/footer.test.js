import { render, screen } from "@testing-library/react";
import Footer from "../components/footer.js";

describe(Footer, () => {
  test('has copyright', () => {
    render(<Footer />);
    const copyright = screen.getByText(/copyright ©/i)
    expect(copyright).toBeInTheDocument();
  });
});