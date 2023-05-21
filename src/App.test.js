import React from "react";
import '@testing-library/jest-dom'
import { createRoot } from "react-dom/client";
import { render, screen } from '@testing-library/react';
import App from "./App";
import { act } from "react-dom/test-utils";



it("renders without crashing", () => {
  const div = document.createElement("div");
  const root = createRoot(div);
  act(() => {
    root.render(<App />);
  });
});

it("The search button should still render on the page", () => {
  render(<App />);
  expect(screen.getByText("Search")).toBeInTheDocument();
});

it("The header should be displayed with a logo on the page", () => {
  render(<App />);
  expect(screen.getByAltText("Hotel Logo").src).toContain("castle");
});

it("shows 3 info cards", () => {
  render(<App />);
  expect(screen.getAllByText("More Information")[0]).toHaveAttribute("href", "https://peoplemakeglasgow.com");
  expect(screen.getAllByText("More Information")[1]).toHaveAttribute("href", "https://visitmanchester.com");
  expect(screen.getAllByText("More Information")[2]).toHaveAttribute("href", "https://visitlondon.com");
});
