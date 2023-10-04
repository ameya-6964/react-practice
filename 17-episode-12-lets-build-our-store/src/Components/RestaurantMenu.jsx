import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useParams } from "react-router-dom";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";
import ShimmerItem from "./ShimmerItem.jsx";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState(0);
  const setIndex = (index) => {
    if (showIndex === index) {
      setShowIndex(null);
    } else {
      setShowIndex(index);
    }
  };
  if (resInfo === null) return <ShimmerItem />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;
  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  return (
    <>
      <div className="bg-gradient-to-r from-gray-700 to-black">
        <div className="text-center ">
          <h1 className="font-bold text-white text-2xl">{name}</h1>
          <p className="font-bold text-white text-lg">
            {cuisines.join(", ")} - Price : {costForTwoMessage}
          </p>
          {/* Categories Accordian */}
          {categories.map((category, index) => (
            <RestaurantCategory
              className="bg-gradient-to-r from-gray-700 to-black"
              key={category?.card?.card?.title}
              data={category?.card?.card}
              showItems={index === showIndex ? true : false}
              svg={index === showIndex ? true : false}
              onClick={() => setIndex(index)}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default RestaurantMenu;
