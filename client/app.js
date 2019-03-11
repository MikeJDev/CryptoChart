import React from "react";
import axios from "axios";
import NewChart from "./chart.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: [],
      price: []
    };
  }

  componentDidMount() {
    axios
      .get("https://api.coindesk.com/v1/bpi/historical/close.json")
      .then(response => {
        let btcInfo = response.data.bpi;
        let dates = Object.keys(btcInfo);
        let prices = Object.values(btcInfo);
        console.log(response.data.bpi);
        console.log("prices:", prices);
        console.log("dates", dates);

        this.setState({
          date: dates,
          price: prices
        });
      })
      .catch(err => {
        return err;
      });
  }

  render() {
    return (
      <div>
        <button type="button"> Get Current Prices </button>
        <NewChart date={this.state.date} price={this.state.price} />
      </div>
    );
  }
}
export default App;

/*
start = year, month, day
end = year, month, day

*/
