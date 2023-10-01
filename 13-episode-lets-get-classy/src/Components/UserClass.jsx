// Class Based Component For User.jsx

import React from "react";

import "../../App.css";
class UserClass extends React.Component {
  //!  To Recive props We Have To Use Super and Constructor

  constructor(props) {
    super(props);
  }

  //!  Only Diffrence Between Class Based And Fumctional Component
  render() {
    const { name, location, contact } = this.props;
    return (
      <div className="user-container">
        <h2> Name: {name}</h2>
        <h3> Location: {location}</h3>
        <h4> Contact: {contact}</h4>
      </div>
    );
  }
}

export default UserClass;
