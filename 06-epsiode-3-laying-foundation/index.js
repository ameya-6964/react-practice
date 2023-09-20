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

const jsxHeading = <h1 className="heading">Hello World From JSX 🚀</h1>; //Single Line JSX

//MultiLine JSX Wrap Around () Paranthesis
const multiLineJsxHeading = (
  <div>
    <h1 className="heading">Hello World From JSX MultiLineJSX 🚀</h1>
  </div>
);

//! JSX is Transpiled Before It Reaches The JS - BABEL
//! JSX => React.createElement => JS Object => HTML Element

/* const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(multiLineJsxHeading); */

//? React Components
//! 1) Class Based Components - (Old Way Of Writing Code)
//! 2) Function Based Components - (New Way Of Writing React Code)

// * React Functional Component => It Is Judt Normal JavaScript Function

const HeadingComponent = () => {
  return (
    <>
      <h1> Hello World</h1>
      <p> Hello World I Am From Functional Component</p>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
