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
        console.log(response.data.bpi);
        this.setState({
          data: response.data.bpi
        });
      })
      .catch(err => {
        return err;
      });
  }

  render() {
    return (
      <div>
        <button type="button" onClick={this.getPrice}>
          {" "}
          Get Current Prices{" "}
        </button>
        <NewChart />
      </div>
    );
  }
}
export default App;

/*
start = year, month, day
end = year, month, day

*/
