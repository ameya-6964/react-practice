import React from "react";

const Button = ({ textColor, bgColor, handleClick, children }) => {
  return (
    <button
      style={{ backgroundColor: bgColor, color: textColor }}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default Button;
