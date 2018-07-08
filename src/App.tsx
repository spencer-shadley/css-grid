import * as React from "react";
import "./App.css";

class Box extends React.Component {
  constructor(props: any) {
    super(props);
  }
  render() {
    return <div class="box">{this.props.text}</div>;
  }
}

export default Box;
