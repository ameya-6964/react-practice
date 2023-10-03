import React, { useState, useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";

const Header = () => {
  const [btnName, setBtnName] = useState(false);
  const { loggedInUser } = useContext(UserContext);
  return (
    <div className="flex justify-between border items-center ">
      <div className="flex align-middle">
        <img className="w-[150]" src={LOGO_URL} alt="Food Logo" />
      </div>
      <div>
        <ul className="flex list-none  ">
          <div className="flex w-[800] justify-evenly font-bold mt-1 ">
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                />
              </svg>
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
            <p className="text-m font-mono ">
              {btnName ? "Login" : loggedInUser}
            </p>
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
