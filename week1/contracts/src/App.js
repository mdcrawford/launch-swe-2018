import React, { Component } from "react";
import ContractForm from "./ContractForm.js";
import ContractDisplay from "./ContractDisplay.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contracts: [],
      curName: "",
      curCompany: "",
      curDetails: ""
    };
  }

  updateFields = (field, newValue) => {
    this.setState({
      // the bracket syntax says to take the field variable, look inside, and that
      // string will be the field we use
      [field]: newValue
    });
  };

  addContract = () => {
    const { curName, curCompany, curDetails } = this.state;
    let newContract = {
      name: curName,
      company: curCompany,
      details: curDetails
    };

    let newContractArray = this.state.contracts.slice(); // using slice to make a (shallow) copy
    newContractArray.push(newContract);

    this.setState({
      contracts: newContractArray,
      // clear the inputs
      curName: "",
      curCompany: "",
      curDetails: ""
    });
  };

  render() {
    console.log(this.state);
    const { curName, curCompany, curDetails, contracts } = this.state;
    // map over the contracts, for each one return a ContractDisplay
    const contractDisplays = contracts.map(contract => {
      return <ContractDisplay contract={contract} />;
    });

    return (
      <div className="App">
        <ContractForm
          name={curName}
          company={curCompany}
          details={curDetails}
          updateParent={this.updateFields}
          addContract={this.addContract}
        />

        {contractDisplays}
      </div>
    );
  }
}

export default App;
