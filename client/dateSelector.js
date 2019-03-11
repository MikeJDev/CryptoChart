import React from "react";
import axios from "axios";

class DateSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: 0,
      endDate: 0
    };
    this.handleChangeStart = this.handleChangeStart.bind(this);
    this.handleChangeEnd = this.handleChangeEnd.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    axios
      .get(
        `https://api.coindesk.com/v1/bpi/historical/close.json?start=${
          this.state.startDate
        }&end=${this.state.endDate}`
      )
      .then(response => {
        let userInputBtc = response.data.bpi;
        let dates = Object.keys(userInputBtc);
        console.log("dates:", dates);
        let prices = Object.values(userInputBtc);
        console.log("prices:", prices);
        this.props.storeValue(dates, prices);
      })
      .catch(err => {
        console.log("err:", err);
      });
  }

  handleChangeStart(event) {
    this.setState({
      startDate: event.target.value
    });
  }
  handleChangeEnd(event) {
    this.setState({
      endDate: event.target.value
    });
  }

  render() {
    return (
      <div>
        <span id="input boxes" style={styleLeft}>
          <form id="btc">
            <label for="start">Start date:</label>
            <input
              onChange={this.handleChangeStart}
              type="date"
              id="start"
              name="trip-start"
              min="2010-01-01"
              max="2019-12-31"
            />
            <br />
            <label for="start">End date:</label>
            <input
              onChange={this.handleChangeEnd}
              type="date"
              id="end"
              name="trip-start"
              min="2010-01-01"
              max="2019-12-31"
            />
          </form>
          <button onClick={this.handleSubmit}>Submit</button>
        </span>
        <span input="button" style={styleRight}>
          <h1>Bitcoin Price Tracker</h1>
        </span>
      </div>
    );
  }
}
const styleLeft = {
  float: "left"
};
const styleRight = {
  float: "right"
};

export default DateSelector;
