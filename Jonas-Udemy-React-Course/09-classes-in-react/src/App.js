import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 5,
    };
    this.handleDecrement = this.handleDecrement.bind(this);
    this.handleIncrement = this.handleIncrement.bind(this);
  }

  handleDecrement() {
    this.setState((currCounter) => {
      return { count: currCounter.count - 1 };
    });
  }
  handleIncrement() {
    this.setState((currCounter) => {
      return { count: currCounter.count + 1 };
    });
  }

  render() {
    return (
      <div className="app-demo">
        <button onClick={this.handleDecrement}>-</button>
        <h1>{this.state.count}</h1>
        <button onClick={this.handleIncrement}>+</button>
      </div>
    );
  }
}

export default Counter;
