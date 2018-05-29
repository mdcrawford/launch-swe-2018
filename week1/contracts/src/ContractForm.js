import React, { Component } from "react";
import { TextField, Button } from "@material-ui/core";

/* PROPS
    name: string
    company: string
    details: string
    updateParent: function(field, value)
    addContract: function()
*/

export default class ContractForm extends Component {
  render() {
    const { name, company, details, updateParent, addContract } = this.props;

    // i'm inserting empty divs to quickly make sure they're vertically stacked
    // in reality you'd want to handle that with CSS
    return (
      <div>
        <TextField
          label="Name"
          onChange={e => updateParent("curName", e.target.value)}
          value={name}
        />

        <div />

        <TextField
          label="Company"
          onChange={e => updateParent("curCompany", e.target.value)}
          value={company}
        />

        <div />

        <TextField
          label="Contract Details"
          onChange={e => updateParent("curDetails", e.target.value)}
          value={details}
        />

        <div />

        <Button onClick={addContract}> Add Contract </Button>
      </div>
    );
  }
}
