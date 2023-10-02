import React from "react";
import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, avgRating, cuisines, costForTwo } =
    resData?.info;
  /*  .rating {
      color: white;
      background-color: #267e3e;
      border-radius: 20px;
      text-align: center;
      width: 50px;
      margin-top: 0.5rem;
      margin-left: 20px;
    } */
  return (
    <div className="w-[300px] h-auto m-[1rem] p-[1rem] bg-slate-100 rounded-2xl hover:bg-slate-200">
      <img
        className="h-[210px] w-[260px] object-cover mt-1 cursor-pointer "
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
export default RestaurantCard;
