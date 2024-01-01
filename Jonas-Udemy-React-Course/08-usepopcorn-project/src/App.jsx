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
import MovieDetails from "./Components/MovieDetails";

const apiKey = import.meta.env.VITE_MOVIE_KEY;

const App = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("Avengers");
  const [watched, setWatched] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [selectedId, setSelectedId] = useState(null);

  const handleSelectMovie = (id) => {
    setSelectedId((selectedId) => (id === selectedId ? null : id));
  };

  const handleCloseMovie = () => {
    setSelectedId(null);
  };

  const handleAddWatched = (movie) => {
    setWatched((watched) => [...watched, movie]);
  };

  const fetchMovie = async () => {
    try {
      setIsLoading(true);
      setError("");
      const res = await fetch(
        `https://www.omdbapi.com/?i=tt3896198&apikey=${apiKey}&s=${query}`
      );
      if (!res.ok) throw new Error("Something Went Wrong With Fetching Movies");
      const data = await res.json();
      if (data.Response === "False") throw new Error("Movie Not Found");
      setMovies(data.Search);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (!query.length && query.length < 3) {
      setMovies([]);
      setError("");
      return;
    }
    fetchMovie();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  return (
    <>
      <NavBar>
        <Search query={query} setQuery={setQuery} />
        <NumResults movies={movies} />
      </NavBar>

      <Main>
        <Box>
          {/* {isLoading ? <Loading /> : <MovieList movies={movies} />} */}
          {!isLoading && !error && (
            <MovieList movies={movies} onSelectMovie={handleSelectMovie} />
          )}
          {error && <ErrorMessage message={error} />}
          {isLoading && <Loading />}
        </Box>

        <Box>
          {selectedId ? (
            <MovieDetails
              selectedId={selectedId}
              onCloseMovie={handleCloseMovie}
              onAddWatched={handleAddWatched}
            />
          ) : (
            <>
              <WatchSummary watched={watched} />
              <WatchMoviesList watched={watched} />
            </>
          )}
        </Box>
      </Main>
    </>
  );
};

export default App;
