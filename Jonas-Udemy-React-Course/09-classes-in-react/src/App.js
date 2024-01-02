import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 5,
    };
  }

  render() {
    return (
      <div className="app-demo">
        <button>+</button>
        <h1>{this.state.count}</h1>
        <button>-</button>
      </div>
    );
  }
}

export default Counter;
