import React, { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { resObj } from "../utils/MOCK-DATA";

const Body = () => {
  //! State variable - Super Powerful Variable => For That We Use React Hooks
  const [list, setList] = useState(resObj);

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-button"
          onClick={() => {
            setList(resObj);
          }}
        >
          All Restaurants
        </button>
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
