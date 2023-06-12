import React from "react";

const Footer = () => {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;

  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);

  /*  if (hour >= openHour && hour <= closeHour) {
    alert("We Are Currently Open 😇");
  } else {
    alert("We Are Currently Close 🥲");
  } */

  return (
    <footer>
      {new Date().toLocaleTimeString()}
      <span> &nbsp; We Are Currently Open </span>
    </footer>
  );
};

export default Footer;
