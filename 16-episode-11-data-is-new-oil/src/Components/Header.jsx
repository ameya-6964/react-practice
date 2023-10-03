import React, { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
//import useOnlineStatus from "../utils/useOnlineStatus";
/* .header {
  display: flex;
  justify-content: space-between;
  border: 1px solid black;
} */
const Header = () => {
  const [btnName, setBtnName] = useState(false);
  // const onlineStatus = useOnlineStatus();
  return (
    <div className="flex justify-between border items-center ">
      <div className="flex align-middle">
        <img className="w-[150]" src={LOGO_URL} alt="Food Logo" />
      </div>
      <div>
        <ul className="flex list-none  ">
          <div className="flex w-[800] justify-evenly font-bold mt-1 ">
            {/*  <li className=" cursor-not-allowed ">
              Online Status: {onlineStatus ? "🟢" : "🔴"}
            </li> */}
            <li className=" hover:text-gray-600 transition-all">
              <Link to="/">Home </Link>
            </li>
            <li className=" hover:text-gray-600 transition-all">
              <Link to="/about">About Us</Link>
            </li>
            <li className=" hover:text-gray-600 transition-all">
              <Link to="/contact">Contact Us</Link>
            </li>
            <li className=" hover:text-gray-600 transition-all cursor-pointer">
              Cart
            </li>
          </div>
          <button
            className="bg-transparent hover:bg-blue-500 
            text-blue-700 font-semibold hover:text-white py-1 px-4
            border border-blue-500 hover:border-transparent rounded mr-4"
            onClick={() => {
              setBtnName(!btnName);
            }}
          >
            <p className="login-btn">{btnName ? "Logout" : "Login"}</p>
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
