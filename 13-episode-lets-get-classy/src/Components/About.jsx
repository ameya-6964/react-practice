import React from "react";
import User from "./User";
import UserClass from "./UserClass";
import "../../App.css";

const About = () => {
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
};

export default About;
