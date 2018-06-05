import React, { Component } from "react";

/* PROPS
    updateParent: function
    count: int
*/

export default class Button extends Component {
  handleClick = () => {
    // makes use of this.props.updateParent
    // assume it does other something
    this.props.updateParent(this.props.count + 1);
  };

  render() {
    const { count } = this.props;
    return (
      <button onClick={this.handleClick}>
        {" "}
        I've been clicked {count} times!{" "}
      </button>
    );
  }
}
