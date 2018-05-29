import React, { Component } from "react";
import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;

class App extends Component {
  // this component is using state, so we have to include a constructor to set
  // the initial state
  constructor(props) {
    super(props);
    this.state = {
      googleMapsData: [],
      loadingStatus: "Loading..."
    };
  }

  // this is one of the component lifecycle methods all React components have access to.
  // you'll want to make your API/asynchronous calls here for them to be reflected in the
  // state
  componentDidMount() {
    let url =
      "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=38.0293,-78.4767&radius=500&type=restaurant&key=" +
      API_KEY;

    axios
      .get(url)
      .then(response => {
        this.setState({
          googleMapsData: response.data.results,
          loadingStatus: ""
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    // nice little way to grab this.state.googleMapsData, etc and put them in their own
    // variables
    let { googleMapsData, loadingStatus } = this.state;

    // take our googleData and map over it to create our components rendering their data
    let restaurants = googleMapsData.map(restaurant => {
      return (
        <li>
          {" "}
          {restaurant.name} has a rating of {restaurant.rating} / 5{" "}
        </li>
      );
    });

    // note in the JSX below, we use curly braces to refer to previously defined JavaScript variables
    return (
      <div className="App">
        <h1> Foodie Finder </h1>
        <p> {loadingStatus} </p>
        <ul>{restaurants}</ul>
      </div>
    );
  }
}

export default App;
