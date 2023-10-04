import React from "react";
import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, avgRating, cuisines, costForTwo } =
    resData?.info;

  return (
    <div
      className="w-[350px] h-[auto]  m-[1rem] mt-[1.5rem] p-[1rem] bg-radial bg-gradient-to-b from-gray-800 to-gray-700
        text-white rounded-3xl "
    >
      <img
        className="h-[210px] w-[300px] object-cover mt-1 cursor-pointer mr-auto ml-auto rounded-lg "
        src={CDN_URL + cloudinaryImageId}
        alt="KFC Logo"
      />
      <div className="flex justify-between mt-3">
        <h3 className="font-bold">{name}</h3>
        <h4 className="text-white bg-green-600 rounded-lg w-[50px] text-center">
          {avgRating}⭐
        </h4>
      </div>
      <div className="font-bold mt-2">
        <h4>{cuisines.join(", ")}</h4>
        <h4 className="text-lg font-semibold mt-3">&nbsp;&nbsp;{costForTwo}</h4>
      </div>
    </div>
  );
};

export const withVegLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-green-700 text-white px-3 mt-2  ml-8 h-[30px] text-center rounded-xl">
          Veg 🟢
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};
export default RestaurantCard;
