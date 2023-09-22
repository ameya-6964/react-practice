import React, { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { resObj } from "../utils/MOCK-DATA";
import SearchIcon from "../search.svg";

const Body = () => {
  //! State variable - Super Powerful Variable => For That We Use React Hooks
  const [list, setList] = useState(resObj);
  const [searchTerm, setSearchTerm] = useState("");

  //! Search Restaurant By Name Function
  const searchRestaurant = () => {
    const filteredList = resObj.filter((res) =>
      res.data.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setList(filteredList);
  };

  //! Clear Search Term Function
  const clearSearch = () => {
    setSearchTerm("");
  };

  return (
    <div className="body">
      <div className="search">
        <input
          placeholder="Search For Restaurant"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img
          src={SearchIcon}
          alt="SearchBox"
          onClick={() => {
            searchRestaurant();
            clearSearch();
          }}
        />
      </div>
      <div className="filter">
        <button
          className="filter-button"
          onClick={() => {
            //?Filter Logic
            let filteredList = resObj.filter((res) => res.data.avgRating >= 4);
            setList(filteredList);
          }}
        >
          Top Rated Restaurants 🔝
        </button>
        <button
          className="filter-button"
          onClick={() => {
            setList(resObj);
          }}
        >
          All Restaurants
        </button>
      </div>
      <div className="res-container">
        {list.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
