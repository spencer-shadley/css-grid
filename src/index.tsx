import * as React from "react";
import { render } from "react-dom";
import Box from "./App";

function CreateBoxes(numBoxes: any): React.Component[] {
  let boxes = [];
  for (let i = 0; i < numBoxes; ++i) {
    boxes.push(<Box text={i} />);
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

render(<App />, document.getElementById("game"));
