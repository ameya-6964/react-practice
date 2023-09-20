import React from "react";
import ReactDOM from "react-dom/client";

//! Before JSX
/* const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "children" },
    React.createElement("h1", {}, "Hello World From React.createElement")
  )
); */

//! After JSX
const jsxHeadind = <h1>Hello World From JSX 🚀</h1>;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeadind); //! This Method Is Basically converting Object into HTML Element Which Browser Understand
