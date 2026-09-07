import * as React from "react";
import "./App.css";

interface BoxProps {
  text?: number | string;
}

class Box extends React.Component<BoxProps> {
  render() {
    return <div className="box">{this.props.text}</div>;
  }
}

export default Box;
