/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import InputField from "@/components/forms/inputField.js";
import { act } from "react";

describe("InputField", () => {

  const renderInputField = ({ id = "myInput", labelText = "some label", hint, type, required } = {}) => {
    render(<InputField id={id} labelText={labelText} hint={hint} type={type} required={required} />);
    const re = new RegExp(labelText, "i");  // required to match when labelText has * added to it
    return {
      inputField: screen.getByLabelText(re),
      labelElement: document.querySelector(`label[for="${id}"]`),
      hintElement: hint ? screen.getByText(hint) : null,
      eyeIconLink: document.querySelector('a[role="link"]'),
      eyeIcon: document.querySelector('svg'),
    };
  };

  it("throws error if id is not specified", () => {
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
  });

  it("has input field and specified label", () => {
    const { labelElement } = renderInputField();
    expect(labelElement).toBeInTheDocument();
    expect(labelElement.textContent).toEqual("some label");
  });

  it("renders input with correct type", () => {
    const { inputField } = renderInputField({ type: "email" });
    expect(inputField.type).toEqual("email");
  });

  it("name attribute defaults to id", () => {
    const { inputField } = renderInputField();
    expect(inputField.name).toEqual("myInput");
  });

  it("hint is used to display note", () => {
    const { hintElement } = renderInputField({ hint: "this is a note" });
    expect(hintElement).toBeInTheDocument();
  });

  it("required field adds * to end of label", () => {
    const { labelElement } = renderInputField({ required: true });
    expect(labelElement.textContent).toContain("*");
  });

  it("text field type does not have an eye icon", () => {
    const { eyeIconLink } = renderInputField({ type: "text" });
    expect(eyeIconLink).not.toBeInTheDocument();
  });

  it("password field type has an eye icon", () => {
    const { eyeIconLink, inputField } = renderInputField({ type: "password" });
    expect(eyeIconLink).toBeInTheDocument();
    expect(eyeIconLink.title).toEqual("Show");
    expect(inputField.type).toEqual("password");
    const eyeIcon = screen.getByTestId("fa-eye");
    expect(eyeIcon).toBeInTheDocument();
  });

  it("clicking on eye icon changes the icon, title and input type", async () => {
    let { eyeIconLink } = renderInputField({ type: "password" });
    let eyeSlashIcon = screen.queryByTestId("fa-eye-slash");
    expect(eyeSlashIcon).not.toBeInTheDocument();
    await act(() => eyeIconLink.click());
    const eyeIcon = screen.queryByTestId("fa-eye");
    expect(eyeIcon).not.toBeInTheDocument();
    eyeSlashIcon = screen.getByTestId("fa-eye-slash");
    expect(eyeSlashIcon).toBeInTheDocument();
    eyeIconLink = document.querySelector('a[role="link"]');
    expect(eyeIconLink.title).toEqual("Hide");
    const inputField = screen.getByLabelText("some label");
    expect(inputField.type).toEqual("text");
  });

});