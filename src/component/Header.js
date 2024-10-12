import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useOnlineStatus } from "../Const/useOnlineStatus";
import { useSelector } from "react-redux";

export const Header = () => {
  const cartItems = useSelector((store) => store.Cart.items);
  const phoneNumber = useSelector((store) => store.User.user);

  const useOnlineStatuses = useOnlineStatus();

  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-600 flex flex-wrap justify-between items-center py-2 h-24 md:h-32 px-4 md:px-10 shadow-lg border-b border-gray-300 mb-1">
      <img className="h-12 w-auto md:h-24" id="logo" src="https://i.postimg.cc/65fgCPgN/Screenshot-152.png" alt="Logo" />

      <ul className="flex items-center space-x-2 md:space-x-4">
        <li>
          <Link to="/" className="text-sm md:text-lg font-semibold text-white hover:text-indigo-200 transition duration-200">Home</Link>
        </li>
        <li>
          <Link to="/aboutus" className="text-sm md:text-lg font-semibold text-white hover:text-indigo-200 transition duration-200">About Me</Link>
        </li>
        <li>
          <Link to="/contact" className="text-sm md:text-lg font-semibold text-white hover:text-indigo-200 transition duration-200">Contact Us</Link>
        </li>
        <li className="relative">
          <Link to="/cart" className="relative block">
            <img className="h-7 w-7 md:h-9 md:w-9" src="https://www.freeiconspng.com/uploads/shopping-cart-icon-19.png" alt="Cart" />
            {cartItems.length > 0 && (
              <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-red-500 text-white rounded-full w-4 h-4 md:w-5 md:h-5 flex items-center justify-center animate-pulse">
                {cartItems.length}
              </span>
            )}
          </Link>
        </li>
        <li className="flex items-center text-xs md:text-sm">
          Online Status: <span className={`ml-1 ${useOnlineStatuses ? 'text-green-600' : 'text-red-600'}`}>{useOnlineStatuses ? "Online ✅" : "Offline 🥵"}</span>
        </li>
        <li>
          <button className="bg-green-600 m-1 p-2 rounded-lg hover:bg-green-700 transition duration-200 text-xs md:text-base">
            {phoneNumber !== null ? (
              <span className="text-white">{phoneNumber}</span>
            ) : (
              <svg className="text-white h-5 w-5 md:h-7 md:w-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
              </svg>
            )}
          </button>
        </li>
      </ul>
    </div>
  );
};
