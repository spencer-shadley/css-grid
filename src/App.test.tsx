import { it, expect } from "vitest";
import * as React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

it("renders without crashing", () => {
  const div = document.createElement("div");
  const root = createRoot(div);
  root.render(<App text={1} />);
  expect(div).toBeDefined();
});
