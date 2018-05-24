import React, { Component } from "react";
import QuotesGenerator from "./QuotesGenerator.js";

class App extends Component {
  render() {
    const quoteList = [
      "I still owe money to the money to the money I owe",
      "Mitch sux at Angular",
      "Somebody once told me the world was gonna roll me"
    ];

    return (
      <div className="App">
        <QuotesGenerator quotes={quoteList} />
      </div>
    );
  }
}

export default App;
