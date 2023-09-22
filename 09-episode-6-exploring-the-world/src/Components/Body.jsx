import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
//import { resObj } from "../utils/MOCK-DATA";
import SearchIcon from "../search.svg";
import Shimmer from "./Shimmer";

const Body = () => {
  //! State variable - Super Powerful Variable => For That We Use React Hooks
  const [list, setList] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  //! Search Restaurant By Name Function
  const searchRestaurant = () => {
    const filteredList = list.filter((res) =>
      res.info.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredRestaurant(filteredList);
  };

  //! Clear Search Term Function
  const clearSearch = () => {
    setSearchTerm("");
  };

  //! Fetch Live API Swiggy Data
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    const arrayOfCards = json.data.cards;
    const restaurant_list = "restaurant_grid_listing";

    for (const cardObj of arrayOfCards) {
      if (cardObj.card.card && cardObj.card.card.id === restaurant_list) {
        const resData =
          cardObj.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setList(resData);
        setFilteredRestaurant(resData);
      }
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return list.length === 0 ? (
    <Shimmer />
  ) : (
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
            let filteredList = filteredRestaurant.filter(
              (res) => res.info.avgRating >= 4.2
            );
            setFilteredRestaurant(filteredList);
          }}
        >
          Top Rated Restaurants 🔝
        </button>
        <button
          className="filter-button"
          onClick={() => {
            setFilteredRestaurant(list);
          }}
        >
          All Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurant.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
