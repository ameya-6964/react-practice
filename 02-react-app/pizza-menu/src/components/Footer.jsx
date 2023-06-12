import React from "react";
import "../index.css";
const Footer = () => {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  return (
    <footer className="footer">
      {isOpen && (
        <div className="order">
          <p>
            We Are Currently Open until {closeHour}:00 . Come Visit Us Or Order
            Online
          </p>
          <button className="btn"> Order Now!!!</button>
        </div>
      )}
    </footer>
  );
};
export default Footer;
