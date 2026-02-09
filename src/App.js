import React, { Component } from "react";

export default class App extends Component {
  state = { name: "skillhub" };
  render() {
    return (
      <div>
        <center>
          <h1>{this.state.name}</h1>
          <button onClick={() => this.setState({ name: "telugu skillhub" })}>
            Change
          </button>
        </center>
      </div>
    );
  }
}
