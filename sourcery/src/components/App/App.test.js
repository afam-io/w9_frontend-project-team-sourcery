import { cleanup, render, screen } from "@testing-library/react";
import { test, expect } from "@jest/globals";
import App from "./App";
import { server } from "../../mocks/server";
beforeAll(() => server.listen());
afterEach(() => {
  server.resetHandlers();
  cleanup();
});
afterAll(() => server.close());

describe("tests components correctly render in app", () => {
  test("renders Input component as part of App", () => {
    render(<App />);
    const inputDescriptionBox = screen.getByPlaceholderText(/Description/i);
    const inputUrlBox = screen.getByPlaceholderText(/URL/i);
    const inputNameBox = screen.getByPlaceholderText(/Name/i);

    expect(inputDescriptionBox).toBeInTheDocument();
    expect(inputUrlBox).toBeInTheDocument();
    expect(inputNameBox).toBeInTheDocument();
  });

  test("renders resources component as part of App", async () => {
    render(<App />);
    expect(await screen.findByText(/rest/i)).toBeInTheDocument();
  });
});
