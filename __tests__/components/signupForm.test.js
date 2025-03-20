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

  it("renders email note, password hint, and screen name hint", () => {
    render(<SignUpForm />);
    expect(screen.getByText("An email will be sent for verification to this address.")).toBeInTheDocument();
    expect(screen.getByText("Minimum 8 characters")).toBeInTheDocument();
    expect(screen.getByText("Name upto 16 alphanumeric chars")).toBeInTheDocument();
  });
});
