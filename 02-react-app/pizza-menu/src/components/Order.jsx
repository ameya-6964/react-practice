import React from "react";

const Order = ({ closeHour, openHour }) => {
  return (
    <div className="order">
      <p>
        We Are Currently Open From {openHour}:00 AM till {closeHour}:00 PM .
        Come Visit Us Or Order Online 🍕🍕
      </p>
      <button className="btn"> Order Now!!!</button>
    </div>
  );
};

export default Order;
