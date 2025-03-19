/**
 * @jest-environment jsdom
 */
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import SubmitButton from "@/components/forms/SubmitButton.js";
import { act } from "react";

describe("SubmitButton", () => {

  const action = jest.fn();

  it("renders the button with the correct text", () => {
    render(<form action={action}><SubmitButton text="Submit" /></form>);
    const buttonElement = screen.getByText(/submit/i);
    expect(buttonElement).not.toBeDisabled();
    expect(buttonElement).toBeInTheDocument();
  });

  it("is disabled and displays working status when form status is pending", () => {
    render(<form action={action}><SubmitButton text="Submit" /></form>);
    const buttonElement = screen.getByText(/submit/i);
    act(() => buttonElement.click());
    waitFor(() => {
      expect(buttonElement).toBeDisabled();
      expect(buttonElement).toHaveTextContent(/working/i);
    });
  });

})
