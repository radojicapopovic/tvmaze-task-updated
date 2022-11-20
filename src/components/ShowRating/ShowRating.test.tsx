import React from "react";
import { render, screen } from "@testing-library/react";
import { ShowRating } from "./ShowRating";

describe("ShowRating", () => {
  test("should render component", () => {
    render(<ShowRating rating={{ average: 9.8 }} />);
    const showRating = screen.getByTestId("show-rating");
    expect(showRating).toBeInTheDocument();
  });
});
