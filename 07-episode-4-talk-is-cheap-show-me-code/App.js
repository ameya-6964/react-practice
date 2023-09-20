import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
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

const RestaurantCard = () => {
  return (
    <div className="res-card">
      <img
        src="https://b.zmtcdn.com/data/pictures/chains/7/37327/83e71b55d4a73c3f0e1a5a353f90eb13_o2_featured_v2.jpg"
        alt="KFC Logo"
      />
      <div className="name-price">
        <h3>KFC</h3>
        <h4 className="rating">3.3⭐</h4>
      </div>
      <div className="food-type-price">
        <h4>Burger | Fries | Chicken </h4>
        <h4>400 INR</h4>
      </div>
    </div>
  );
};
const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
