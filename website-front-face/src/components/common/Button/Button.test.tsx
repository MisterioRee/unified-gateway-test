import * as React from "react";
import { render, screen } from "@testing-library/react";
import { LOGIN } from "constants/index";
import Button from "./Button";

let button: any;
beforeEach(() => {
  render(<Button htmlType="button">{LOGIN}</Button>);
  button = screen.getByRole("button", { name: LOGIN });
});

describe("Button Component", () => {
  it("checks button render", () => {
    expect(button).toBeInTheDocument();
  });

  it("checks text inside button", () => {
    expect(button).toHaveTextContent(LOGIN);
  });
});
