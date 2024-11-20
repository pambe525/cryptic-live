/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, screen } from "@testing-library/react";
import Home from "../app/page.js";

describe("Home", () => {
  it("renders a heading", () => {
    render(<Home />);
    const heading = screen.getByRole("heading", {
      name: /welcome to next\.js!/i,
    });
    expect(heading).toBeInTheDocument();
  });
});
