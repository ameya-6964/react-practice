import React from "react";
import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, avgRating, cuisines, costForTwo } =
    resData?.info;
  return (
    <div className="res-card">
      <img src={CDN_URL + cloudinaryImageId} alt="KFC Logo" />
      <div className="name-price">
        <h3>{name}</h3>
        <h4 className="rating">{avgRating}⭐</h4>
      </div>
      <div className="food-type-price">
        <h4>{cuisines.join(", ")}</h4>
        <h4>{costForTwo / 100} INR</h4>
      </div>
    </div>
  );
};
export default RestaurantCard;
