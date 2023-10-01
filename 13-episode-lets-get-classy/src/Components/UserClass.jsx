// Class Based Component For User.jsx

import React from "react";

import "../../App.css";
class UserClass extends React.Component {
  //!  To Recive props We Have To Use Super and Constructor

  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      count2: 10,
    };
    console.log("Constructor Called From Child");
  }

  //! Use For API Calls Similar as useEffect
  componentDidMount() {
    console.log("ComponentDidMount Called From Child");
  }

  componentDidUpdate() {
    console.log("componentDidUpdate Called From Child");
  }

  //!  Only Diffrence Between Class Based And Fumctional Component
  render() {
    console.log("Rendered Called From Child");
    const { name, location, contact } = this.props;
    const { count, count2 } = this.state;

    return (
      <div className="user-container">
        <h1> Name: {name}</h1>
        <h2> Location: {location}</h2>
        <h3> Contact: {contact}</h3>
        <h3> Count1 : {count}</h3>
        <h3> Count2 : {count2}</h3>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count2 - 1,
            });
          }}
        >
          -
        </button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button
          onClick={() => {
            this.setState({
              count2: this.state.count2 + 5,
            });
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            this.setState({
              count2: this.state.count2 - 5,
            });
          }}
        >
          -
        </button>
      </div>
    );
  }
}

export default UserClass;
