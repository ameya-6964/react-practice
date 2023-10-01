// Class Based Component For User.jsx

import React from "react";

import "../../App.css";
class UserClass extends React.Component {
  //!  To Recive props We Have To Use Super and Constructor

  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
    console.log(this.props.name + " Child Constructor Called");
  }

  //! Use For API Calls Similar as useEffect
  componentDidMount() {
    console.log(this.props.name + " ComponentDidMount Called");
  }

  componentDidUpdate() {
    console.log(this.props.name + " componentDidUpdate Called ");
  }

  //!  Only Diffrence Between Class Based And Fumctional Component
  render() {
    const { name, location, contact } = this.props;
    const { count } = this.state;
    console.log(name + " Rendered Called");

    return (
      <div className="user-container">
        <h1> Name: {name}</h1>
        <h2> Location: {location}</h2>
        <h3> Contact: {contact}</h3>
        <h3> Count : {count}</h3>
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
              count: this.state.count - 1,
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
