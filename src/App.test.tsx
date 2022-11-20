import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  test("renders HomePage title", () => {
    render(<App />);
    const title = screen.getByText(/TV Bland/i);
    expect(title).toBeInTheDocument();
  });
});
