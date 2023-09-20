import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
    </div>
  );
};

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://i.pinimg.com/originals/72/c1/b2/72c1b24f3e90d7766b0e5ad03b5d8145.jpg"
          alt="Food Logo"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
