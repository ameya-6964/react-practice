//Creating h1 tag Inside React
/* const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World From React⚛️"
);
console.log(heading); //!This Will Return Object Which React Element
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading); //! This Method Is Basically converting Object into HTML Element Which Browser Understand
 */
/*
Create This Type Of Structure In React (Nested Elements)
 <div id="parent">
          <div id="child">
                    <h1>
                         Hello World
                   </h1>
          </div>
 </div>
*/

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "children" },
    React.createElement("h1", {}, "Hello World")
  )
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent); //! This Method Is Basically converting Object into HTML Element Which Browser Understand
