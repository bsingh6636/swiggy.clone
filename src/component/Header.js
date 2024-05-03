// import { useState } from "react";
import { Link } from "react-router-dom";
import React from "react";
import { useOnlineStatus } from "../Const/useOnlineStatus";
// import { useContext } from "react";
// import { UserContext } from "../Const/UserContext";
import { useSelector } from "react-redux";
import "../style.css"

export const Header = () => {
  // const { userloggedin } = useContext(UserContext);
  const cartIems = useSelector((store) => store.Cart.items);
  // console.log(cartIems);
  const phoneNumber = useSelector(store=>store.User.user)
  console.log(phoneNumber)

  let useOnlineStatuses = useOnlineStatus();
  return (
    <div className="bg-white flex flex-wrap items-center justify-between  py-2 h-32 px-10">
      <img
        className=""
        id="logo"
        src="https://i.postimg.cc/65fgCPgN/Screenshot-152.png"
        alt="disappeared"
      />
      <ul className="flex items-center space-x-4">
        <li className="decoration-indigo-600">
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/aboutus">About Us</Link>
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
        </li>
        <li>
          <Link to="/cart" className="relative">
            <img
              className="h-9 w-9"
              src="https://www.freeiconspng.com/uploads/shopping-cart-icon-19.png"
              alt="cart"
            />
            <h4 className="absolute top-0 right-0 transform translate-x-2 -translate-y-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center">
              {cartIems.length === 0 ? "0" : cartIems.length}
            </h4>
          </Link>
        </li>
        <li>Online Status: {useOnlineStatuses ? "✅" : "🥵"}</li>
        <li>
      
        <button className="bg-green-600 m-1 p-2 rounded-lg">    {phoneNumber !==null ? phoneNumber : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="text-green h-7 w-7">
    <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
  </svg>}
  
</button>

        </li>
      </ul>
    </div>
  );
};
