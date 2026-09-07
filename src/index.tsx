import React from "react";
import { createRoot } from "react-dom/client";
import Box from "./App";
import "./App.css";

function CreateBoxes(numBoxes: number): React.ReactElement[] {
  const boxes = [];
  for (let i = 0; i < numBoxes; ++i) {
    boxes.push(<Box key={i} text={i} />);
  }
  return boxes;
}

const App = () => (
  <div className="game-board">
    {CreateBoxes(9)}
    <div className="container">
      <header />
      <nav />
      <main />
      <aside />
      <footer />
    </div>
  </div>
);

const container = document.getElementById("game");
if (container) {
  const root = createRoot(container);
  root.render(<App />);
}
