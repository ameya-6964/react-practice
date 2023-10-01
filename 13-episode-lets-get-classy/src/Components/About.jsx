import React, { Component } from "react";
import User from "./User";
import UserClass from "./UserClass";
import "../../App.css";

class About extends Component {
  constructor(props) {
    super(props);
    console.log("Constructor Rendered From Parent");
  }
  componentDidMount() {
    console.log("ComponentDidMount Called From Parent");
  }
  render() {
    console.log("Render From Parent Component");
    return (
      <div className="card-container">
        <User
          name={"Ameya Function Based Component"}
          location={"Airoli"}
          contact={"7715006964"}
        />
        <UserClass
          name={"Ameya Class Based Component"}
          location={"Airoli"}
          contact={"7715006964"}
        />
      </div>
    );
  }
}

/* const About = () => {
  return (
    <div className="card-container">
      <User
        name={"Ameya Function Based Component"}
        location={"Airoli"}
        contact={"7715006964"}
      />
      <UserClass
        name={"Ameya Class Based Component"}
        location={"Airoli"}
        contact={"7715006964"}
      />
    </div>
  );
}; */

export default About;
