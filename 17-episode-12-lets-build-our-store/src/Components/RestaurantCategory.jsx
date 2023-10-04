import React, { useState } from "react";
import MenuList from "./MenuList";

const RestaurantCategory = ({ data, showItems, svg, onClick }) => {
  const setShowIndex = (index) => {
    setShowIndex((prev) => (prev === index ? null : index));
  };
  return (
    <div>
      <div
        className="w-6/12 mx-auto my-5  shadow-lg p-4 cursor-pointer bg-gradient-to-r from-gray-700 to-black text-white"
        onClick={onClick}
      >
        <div className="flex justify-between">
          <span className="font-bold text-lg">
            {data.title} ({data?.itemCards?.length})
          </span>
          <span>
            {svg ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 "
              >
                <path
                  fillRule="evenodd"
                  d="M11.47 7.72a.75.75 0 011.06 0l7.5 7.5a.75.75 0 11-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 01-1.06-1.06l7.5-7.5z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </span>
        </div>
        <div
          className={`opacity-0 transition-opacity duration-1000 ease-in-out ${
            showItems && "opacity-100"
          }`}
        >
          {showItems && <MenuList items={data.itemCards} />}
        </div>
      </div>
    </div>
  );
};

export default RestaurantCategory;
