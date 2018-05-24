import React, { Component } from "react";

/* STATE
    index: int; the index of the array to know which quote to display
*/

/* PROPS
    quotes: Array<String>, the list of quotes we want to display
*/

export default class QuotesGenerator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0
    };
  }

  handleClick = () => {
    // if at the end of the array, want to loop back to 0
    // otherwise increment by one
    const { index } = this.state;
    const { quotes } = this.props;

    // this is ternary operator, basically a short hand for an if-else statement
    // you'll come across it a lot looking at online code, so worth looking at!
    let newIndex = index === quotes.length - 1 ? 0 : index + 1;

    this.setState({
      index: newIndex
    });
  };

  render() {
    const { quotes } = this.props;
    const { index } = this.state;
    return <p onClick={this.handleClick}> {quotes[index]} </p>;
  }
}
