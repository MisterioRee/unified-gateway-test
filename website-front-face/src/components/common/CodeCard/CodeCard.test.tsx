import * as React from "react";
import { render, screen } from "@testing-library/react";
import CodeCard from "./CodeCard";
import { TEST_FILE_CONTENT, TEST_FILE_NAME } from "constants/index";

let card: any;

beforeEach(() => {
  render(
    <CodeCard data-testid="card" title={TEST_FILE_NAME}>
      {TEST_FILE_CONTENT}
    </CodeCard>
  );
  card = screen.getByTestId("card");
});

describe("Card Component", () => {
  it("checks card render", () => {
    expect(card).toBeInTheDocument();
  });

  it("checks text inside card", () => {
    expect(card).toHaveTextContent(TEST_FILE_CONTENT);
  });
});
