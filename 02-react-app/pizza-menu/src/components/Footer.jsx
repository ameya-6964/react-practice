import React from "react";
import "../index.css";
import Order from "./Order";
const Footer = () => {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHour={closeHour} openHour={openHour} />
      ) : (
        <p>
          We Are Happy To Welcome You Between {openHour}:00 AM And {closeHour}
          :00 PM 😇
        </p>
      )}
    </footer>
  );
};
export default Footer;
