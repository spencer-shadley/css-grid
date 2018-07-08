import * as React from "react";
import { render } from "react-dom";
import Hello from "./Hello";
import Box from "./App";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

function CreateBoxes(numBoxes: any): React.Component[] {
  let boxes = [];
  for (let i = 0; i < numBoxes; ++i) {
    boxes.push(<Box text={i} />);
  }
  return boxes;
}

const App = () => <div class="game-board">{CreateBoxes(9)}</div>;

render(<App />, document.getElementById("game"));
