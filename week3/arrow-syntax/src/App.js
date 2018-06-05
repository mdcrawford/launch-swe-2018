import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Button from "./Button";

/* STATE
    count: int
*/

class App extends Component {
  state = {
    count: 0
  };

  updateState = (field, newVal) => {
    // code that uses this.something
    this.setState({
      [field]: newVal
    });
  };

  updateCount = newVal => {
    this.updateState("count", newVal);
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Button count={this.state.count} updateParent={this.updateCount} />
      </div>
    );
  }
}

export default App;
