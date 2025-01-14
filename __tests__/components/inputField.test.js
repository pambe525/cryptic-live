/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import InputField from "@/components/forms/inputField.js";

describe("InputField", () => {

  it("throws error if id is not specified", () => {
    // mocking is required to suppress console errors for unhandled exceptions
    const err = console.error;
    console.error = jest.fn();
    let actualError = null;
    try {
      render(<InputField />);
    } catch (e) {
      actualError = e.message;
    }
    expect(actualError).toEqual("InputField: id parameter is required.");
    console.error = err;
  })

  it("has input field and specified label", () => {
    const labelText = "some label";
    const id = "myInput";
    render(<InputField id={id} labelText={labelText} />);
    const inputField = screen.getByLabelText(labelText);
    const labelElement = document.querySelector(`label[for="${id}"]`);
    expect(labelElement).toBeInTheDocument();
    expect(labelElement.textContent).toEqual(labelText);
  });

  it("name attribute defaults to id", () => {
    const labelText = "some label";
    const id = "myInput";
    render(<InputField id={id} labelText={labelText} />);
    const inputField = screen.getByLabelText(labelText);
    expect(inputField.name).toEqual(id);
  })

  it("hint is used to display note", () => {
    const labelText = "some label";
    const id = "myInput";
    const hint = "this is a note";
    render(<InputField id={id} labelText={labelText} hint={hint} />);
    const spanFieldField = screen.getByText(hint);
    expect(spanFieldField).toBeInTheDocument();
  })

  it('required field adds * to end of label', () => {
    const labelText = "some label";
    const id = "myInput";
    render(<InputField id={id} labelText={labelText} required />);
    const labelElement = document.querySelector(`label[for="${id}"]`);
    expect(labelElement.textContent).toContain("*");
  });

})