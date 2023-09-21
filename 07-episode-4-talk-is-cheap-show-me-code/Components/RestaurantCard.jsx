import React from "react";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, avgRating, cuisines, costForTwo } =
    resData?.data;
  return (
    <div className="res-card">
      <img
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
        alt="KFC Logo"
      />
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
