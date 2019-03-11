import React from "react";
import axios from "axios";
import NewChart from "./chart.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  getPrice() {
    axios
      .get("https://api.coindesk.com/v1/bpi/historical/close.json")
      .then(response => {
        let prices = response.data.bpi;
        console.log(response.data.bpi);
        this.setState({
          data: prices
        });
      })
      .catch(err => {
        return err;
      });
  }

  render() {
    return (
      <div>
        <button type="button" onClick={this.getPrice.bind(this)}>
          {" "}
          Get Current Prices{" "}
        </button>
        <NewChart price={this.state.data} />
      </div>
    );
  }
}
export default App;

/*
start = year, month, day
end = year, month, day

*/
