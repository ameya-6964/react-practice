import { useEffect } from "react";
import "./App.css";
import SearchIcon from "./search.svg";

//Api Key

const API_URL = `http://www.omdbapi.com?apikey=47d91d92`;

//Dummy Data
const DummyData = {
  Title: "Joker",
  Year: "2019",
  imdbID: "tt7286456",
  Type: "movie",
  Poster:
    "https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg",
};

const App = () => {
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    console.log(data.Search);
  };
  useEffect(() => {
    searchMovies("Joker");
  }, []);
  return (
    <div className="app">
      <h1>MovieLand 🎥🍿</h1>
      <div className="search">
        <input placeholder="Search For Latest Movies" onChange={() => {}} />
        <img src={SearchIcon} alt="SearchBox" onClick={() => {}} />
      </div>
      <div className="container">
        <div className="movie">
          <div>
            <p>{DummyData.Year}</p>
          </div>
          <div>
            <img
              src={
                DummyData.Poster !== "N/A"
                  ? DummyData.Poster
                  : "https://via.placeholder.com/400"
              }
              alt={DummyData.Title}
            />
          </div>
          <div>
            <span>{DummyData.Type}</span>
            <h3>{DummyData.Title}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
