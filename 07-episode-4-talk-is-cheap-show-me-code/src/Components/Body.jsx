import React from "react";
import RestaurantCard from "./RestaurantCard";
import { resObj } from "../utils/MOCK-DATA";

const Body = () => {
  return (
    <div className="body">
      {/* <div className="search">Search</div> */}
      <div className="res-container">
        {resObj.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
