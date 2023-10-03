import React, { Component } from "react";
import User from "./User";
import UserClass from "./UserClass";
import "../../App.css";

class About extends Component {
  constructor(props) {
    super(props);
    //console.log("Parent Constructor Called");
  }
  componentDidMount() {
    //console.log("Parent ComponentDidMount Called");
  }
  render() {
    // console.log("Parent Component Render ");
    return (
      <div className="card-container">
        <User name={"First"} location={"Airoli"} contact={"7715006964"} />
      </div>
    );
  }
}

/*   Component Lifecyle Log
* Parent Constructor Called
* Parent Component Render
? First Child Constructor Called
? First Rendered Called
! Second Child Constructor Called
! Second Rendered Called
? First ComponentDidMount Called
! Second ComponentDidMount Called
* Parent ComponentDidMount Called 
*/

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
