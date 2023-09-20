import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "children" },
    React.createElement("h1", {}, "Hello World From React.createElement")
  )
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent); //! This Method Is Basically converting Object into HTML Element Which Browser Understand
