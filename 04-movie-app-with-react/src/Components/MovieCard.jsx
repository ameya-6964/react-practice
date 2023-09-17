import React from "react";

const MovieCard = ({ DummyData }) => {
  return (
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
  );
};

export default MovieCard;
