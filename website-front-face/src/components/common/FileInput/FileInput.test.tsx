import { fireEvent, render, screen } from "@testing-library/react";
import {
  ENTER_FILE_CONTENT,
  ENTER_FILE_NAME,
  REMOVE,
  TEST_FILE_CONTENT,
  TEST_FILE_NAME,
} from "constants/index";
import React from "react";
import { useForm } from "react-hook-form";
import { eventObject } from "utilities/utilityFunctions";
import FileInput from "./FileInput";

let fileNameInput: any, fileContent: any, removeFileButton: any;

const mockRemove = jest.fn((i: number, id: string) => i + id);

const MockFileInput: React.FC = () => {
  const { control } = useForm({});
  return (
    <FileInput control={control} index={1} id="1" removeFile={mockRemove} />
  );
};

beforeEach(() => {
  render(<MockFileInput />);

  fileNameInput = screen.getByPlaceholderText(ENTER_FILE_NAME);

  fileContent = screen.getByPlaceholderText(ENTER_FILE_CONTENT);

  removeFileButton = screen.getByRole("button", { name: REMOVE });
});

describe("File Input Component", () => {
  it("checks rendered control elements in FileInput Component", () => {
    expect(removeFileButton).toBeInTheDocument();
    expect(fileContent).toBeInTheDocument();
    expect(fileNameInput).toBeInTheDocument();
  });
  it("checks events of controls inside FileInput Component", () => {
    fireEvent.change(fileNameInput, eventObject(TEST_FILE_NAME));
    fireEvent.change(fileContent, eventObject(TEST_FILE_CONTENT));
    fireEvent.click(removeFileButton);

    // Expect
    expect(fileNameInput).toHaveValue(TEST_FILE_NAME);
    expect(fileContent).toHaveValue(TEST_FILE_CONTENT);
    expect(mockRemove.mock.lastCall[0]).toBe(1);
    expect(mockRemove.mock.lastCall[1]).toBe("1");
  });
});
