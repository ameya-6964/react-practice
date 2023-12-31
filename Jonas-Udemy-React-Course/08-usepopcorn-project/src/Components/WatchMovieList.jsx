import WatchMovie from "./WatchMovie";

const WatchMoviesList = ({ watched }) => {
  return (
    <ul className="list">
      {watched.map((movie) => (
        <WatchMovie movie={movie} key={movie.imdbID} />
      ))}
    </ul>
  );
};

export default WatchMoviesList;
