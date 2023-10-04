import React from "react";
import { CDN_URL, PLACEHOLDER_IMAGE } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../utils/cartSlice";

const MenuList = ({ items }) => {
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };
  const handleRemoveItem = (item) => {
    dispatch(removeItem(item));
  };
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-gray-200 border-b-2 text-left flex flex-col"
        >
          <div className="py-2">
            <span>{item.card.info.name}</span>
            <span>
              &nbsp; -&nbsp; ₹
              {item.card.info.price
                ? item.card.info.price / 100
                : item.card.info.defaultPrice / 100}
            </span>
          </div>
          <div className="w-[70%]">
            <p className="text-xs">{item.card.info.description}</p>
          </div>
          <div className="flex justify-end">
            <img
              className="w-[165px] h-[105px] relative bottom-[45px] rounded-lg "
              src={
                item.card.info.imageId
                  ? CDN_URL + item.card.info.imageId
                  : PLACEHOLDER_IMAGE
              }
            />
          </div>
          <div>
            <button
              className="bg-transparent bg-green-500 text-green-400 
          hover:bg-green-600 hover:text-white font-bold py-1 px-2 border 
          border-green-400 border-1 hover:border-transparent rounded w-[70px] relative left-[535px] bottom-[30px]"
              onClick={() => handleAddItem(item)}
            >
              Add
            </button>
            <button
              className="bg-transparent bg-white text-red-600 
          hover:bg-red-600 hover:text-white font-bold py-1 px-2 border 
          border-red-700 border-1 hover:border-transparent rounded w-[80px] relative left-[550px] bottom-[30px]"
              onClick={() => handleRemoveItem(item)}
            >
              Remove
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MenuList;
