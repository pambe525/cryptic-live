/**
 * @jest-environment jsdom
 */
import SignUpForm from "@/components/forms/SignUpForm";
import { render, screen } from "@testing-library/react";

describe("SignUpForm", () => {
  it("renders form with email, password, confirm password, screen name, and sign up button", () => {
    render(<SignUpForm />);
    expect(screen.getByLabelText("Email*")).toBeInTheDocument();
    expect(screen.getByLabelText("Password*")).toBeInTheDocument();
    expect(screen.getByLabelText("Confirm Password*")).toBeInTheDocument();
    expect(screen.getByLabelText("Screen Name*")).toBeInTheDocument();
    expect(screen.getByText("Sign Up")).toBeInTheDocument();
  });
});
