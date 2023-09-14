//Creating h1 tag Inside React
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World From React⚛️"
);
console.log(heading); //!This Will Return Object
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading); //! This Method Is Basically converting Object into HTML Element
