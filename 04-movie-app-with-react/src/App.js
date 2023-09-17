import { useEffect } from "react";
import "./App.css";
import SearchIcon from "./search.svg";

//Api Key

const API_URL = `http://www.omdbapi.com?apikey=47d91d92`;

function App() {
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    console.log(data.Search);
  };
  useEffect(() => {
    searchMovies("Joker");
  }, []);
  return (
    <div>
      <h1>Hello World</h1>
    </div>
  );
}

export default App;
