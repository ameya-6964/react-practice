import RestaurantCard, { withVegLabel } from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import searchIcon from "../utils/search.svg";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  // Local State Variable - Super powerful variable
  const [listOfRestaurants, setListOfRestraunt] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  const RestaurantisVeg = withVegLabel(RestaurantCard);
  // Whenever state variables update, react triggers a reconciliation cycle(re-renders the component)

  useEffect(() => {
    fetchData();
  }, []);

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
        setListOfRestraunt(resData);
        setFilteredRestaurant(resData);
      }
    }
  };

  //! Function To Display All The Restaurants Again
  const resetRestarants = () => {
    setFilteredRestaurant(listOfRestaurants);
  };
  //! Function To Display All The Restaurants Again
  const searchByName = () => {
    const filteredList = listOfRestaurants.filter(
      (res) => res.info.avgRating > 4.2
    );
    //console.log(filteredList);
    setFilteredRestaurant(filteredList);
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) {
    return (
      <h1> Looks Like You Are Offline Please Check Your Internet Connection</h1>
    );
  }

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex justify-evenly mt-[0.5rem] flex-wrap">
        {/* //! Filtering Restaurant Based On Name */}
        <div className="p-[10px] flex flex-wrap">
          <input
            type="text"
            className="border-[1px] border-solid border-black w-[400px]"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button className="ml-4">
            <img
              src={searchIcon}
              alt="SearchBox"
              onClick={() => {
                const filteredRestaurant = listOfRestaurants.filter(
                  (res) =>
                    res.info.name
                      .toLowerCase()
                      .includes(searchText.toLowerCase()),
                  setSearchText("")
                );
                setFilteredRestaurant(filteredRestaurant);
              }}
            />
          </button>
        </div>
        {/* //! Filter Restaurant On Basis Of Rating */}
        <button
          className=" bg-green-500 hover:bg-green-600 text-white font-bold py-1 px-2 rounded"
          onClick={() => {
            searchByName();
          }}
        >
          Top Rated Restaurants
        </button>
        <button
          className=" bg-green-500 hover:bg-green-600 text-white font-bold py-1 px-2 rounded"
          onClick={() => {
            resetRestarants();
          }}
        >
          All Restaurants
        </button>
      </div>
      <div className="flex flex-wrap justify-center ">
        {filteredRestaurant.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            {restaurant.info.veg ? (
              <RestaurantisVeg resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
