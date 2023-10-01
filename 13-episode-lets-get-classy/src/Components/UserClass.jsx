// Class Based Component For User.jsx

import React from "react";

import "../../App.css";
class UserClass extends React.Component {
  //!  To Recive props We Have To Use Super and Constructor

  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Default",
        contact: "xxxxxx",
      },
    };
    console.log(this.props.name + " Child Constructor Called");
  }

  //! Use For API Calls Similar as useEffect
  async componentDidMount() {
    console.log(this.props.name + " ComponentDidMount Called");
    const data = await fetch("https://api.github.com/users/ameya-6964");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
  }
  componentDidUpdate() {
    console.log("componentDidUpdate Called ");
  }
  componentWillUnmount() {
    console.log("Unmounted");
  }
  //!  Only Diffrence Between Class Based And Fumctional Component
  render() {
    const { name, location, html_url, avatar_url } = this.state.userInfo;
    console.log(name + " Rendered Called");

    return (
      <div className="user-container">
        <img width={400} height={400} src={avatar_url} />
        <h1> Name: {this.state.userInfo.name}</h1>
        <h2> Location: {this.state.userInfo.location}</h2>
        <h2> Contact :{html_url} </h2>
      </div>
    );
  }
}

export default UserClass;
