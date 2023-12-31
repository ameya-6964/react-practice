import { useEffect, useState } from "react";
import NavBar from "./Components/Navbar";
import Search from "./Components/Search";
import NumResults from "./Components/NumResults";
import Main from "./Components/Main";
import Box from "./Components/Box";
import MovieList from "./Components/MovieList";
import WatchSummary from "./Components/WatchSummary";
import WatchMoviesList from "./Components/WatchMovieList";

const apiKey = import.meta.env.VITE_MOVIE_KEY;
const searchString = `avengers`;

const App = () => {
  const [movies, setMovies] = useState([]);
  const [watched, setWatched] = useState([]);

  useEffect(() => {
    fetchMovie();
  }, []);

  const fetchMovie = async () => {
    const res = await fetch(
      `https://www.omdbapi.com/?i=tt3896198&apikey=${apiKey}&s=${searchString}`
    );
    const data = await res.json();
    setMovies(data.Search);
  };

  return (
    <>
      <NavBar>
        <Search />
        <NumResults movies={movies} />
      </NavBar>

      <Main>
        <Box>
          <MovieList movies={movies} />
        </Box>

        <Box>
          <WatchSummary watched={watched} />
          <WatchMoviesList watched={watched} />
        </Box>
      </Main>
    </>
  );
};

export default App;
