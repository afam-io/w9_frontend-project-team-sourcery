import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { test, expect, describe } from "@jest/globals";
import Input from "./index";
import { server } from "../../mocks/server";

beforeAll(() => server.listen());
afterEach(() => {
  server.resetHandlers();
  cleanup();
});
afterAll(() => server.close());

describe("Input component correctly renders and post requests", () => {
  test("Input fields render successfully", () => {
    render(<Input />);
    const inputDescriptionBox = screen.getByPlaceholderText(/Description/i);
    const inputUrlBox = screen.getByPlaceholderText(/URL/i);
    const inputNameBox = screen.getByPlaceholderText(/Name/i);

    expect(inputDescriptionBox).toBeInTheDocument();
    expect(inputUrlBox).toBeInTheDocument();
    expect(inputNameBox).toBeInTheDocument();
  });
  /*  test("input fields show text when user types", ()=>{
    render(<Input />);
    const descriptionBox = screen.getByPlaceholderText(/Description/i);
    const urlBox = screen.getByPlaceholderText(/URL/i);
    const nameBox = screen.getByPlaceholderText(/Name/i);
    const submitButton = screen.getByRole('button', {name: /submit/i})

    fireEvent(descriptionBox,
        
        
        
        )

  }) */
});
