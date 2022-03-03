import React, { Component } from "react";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { time: new Date().toLocaleTimeString(), clickedTime: 0 };
  }

  componentDidMount() {
    this.interval = setInterval(
      () => this.setState({ time: new Date().toLocaleTimeString() }),
      1000
    );
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  clickGame() {
    this.setState({ clickedTime: this.state.clickedTime + 1 });
    if (this.state.clickedTime % 3 === 0 && this.state.clickedTime % 5 === 0) {
      alert("Fizz-Buzz");
    } else if (this.state.clickedTime % 3 === 0) {
      alert("Fizz");
    } else if (this.state.clickedTime % 5 === 0) {
      alert("Buzz");
    }
  }

  render() {
    return (
      <div>
        <h2>
          {" "}
          Welcome to {this.props.bootcamp} It is {this.state.time}
        </h2>
        <button onClick={() => this.clickGame()}> Clicky Game</button>
      </div>
    );
  }
}
