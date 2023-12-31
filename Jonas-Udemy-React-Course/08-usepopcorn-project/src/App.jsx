import { useEffect, useState } from "react";
import NavBar from "./Components/Navbar";
import Search from "./Components/Search";
import NumResults from "./Components/NumResults";
import Main from "./Components/Main";
import Box from "./Components/Box";
import MovieList from "./Components/MovieList";
import WatchSummary from "./Components/WatchSummary";
import WatchMoviesList from "./Components/WatchMovieList";
import Loading from "./Components/Loading";
import ErrorMessage from "./Components/ErrorMessage";

const apiKey = import.meta.env.VITE_MOVIE_KEY;
const searchString = `Titanic`;

const App = () => {
  const [movies, setMovies] = useState([]);
  const [watched, setWatched] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchMovie();
  }, []);

  const fetchMovie = async () => {
    try {
      setIsLoading(true);
      const res = await fetch(
        `https://www.omdbapi.com/?i=tt3896198&apikey=${apiKey}&s=${searchString}`
      );
      if (!res.ok) throw new Error("Something Went Wrong With Fetching Movies");
      const data = await res.json();
      if (data.Response === "False") throw new Error("Movie Not Found");
      setMovies(data.Search);
      console.log(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <NavBar>
        <Search />
        <NumResults movies={movies} />
      </NavBar>

      <Main>
        <Box>
          {/* {isLoading ? <Loading /> : <MovieList movies={movies} />} */}
          {!isLoading && !error && <MovieList movies={movies} />}
          {error && <ErrorMessage message={error} />}
          {isLoading && <Loading />}
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
