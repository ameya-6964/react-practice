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

//! After JSX  (JSX Is Not HTML => Its HTML and XML Like Syntax)

//* For Attributes Always Use Camel Case

const jsxHeadind = <h1 className="heading">Hello World From JSX 🚀</h1>;

//! JSX is Transpiled Before It Reaches The JS - BABEL
//! JSX => React.createElement => JS Object => HTML Element

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeadind);
