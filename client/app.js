import React from "react";
import axios from "axios";
import NewChart from "./chart.js";
import DateSelector from "./dateSelector";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: [],
      price: []
    };
    this.storeValues = this.storeValues.bind(this);
  }

  componentDidMount() {
    this.getInitialData();
  }

  storeValues(a, b) {
    this.setState({
      date: a,
      price: b
    });
    console.log("this worked");
  }

  getInitialData() {
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
        <DateSelector storeValue={this.storeValues} />
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
