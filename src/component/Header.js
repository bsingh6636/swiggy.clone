import { useState } from "react";
import { Link } from "react-router-dom";
import React  from "react";
import { useOnlineStatus } from "../Const/useOnlineStatus";
import {useContext} from "react";
import { UserContext } from "../Const/UserContext";
import { useSelector } from "react-redux";
import "../style.css"

export const Header = () => {
  const {userloggedin} = useContext(UserContext);
  const cartIems = useSelector((store)=>store.Cart.items);
  // console.log(cartIems);
 
  let [btnname, setbtnname] = useState("login");
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
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => {
              setbtnname((prev) => (prev === "login" ? userloggedin : "login"));
            }}
          >
            {btnname}
          </button>
        </li>
      </ul>
    </div>
  );
};
