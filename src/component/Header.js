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
    <div className="header">
      <img
        id="logo"
        src="https://i.postimg.cc/65fgCPgN/Screenshot-152.png"
        alt="disappeared"
      ></img>
      <ul>
        <li className="decoration-indigo-600"><Link to="/">Home</Link></li>
        <li>
          <Link to="/aboutus">About Us</Link>
        </li>

        <li><Link to="/contact">Contact Us</Link></li>
        <li> <Link to="/cart"> <img className="h-9 w-9" src="https://www.freeiconspng.com/uploads/shopping-cart-icon-19.png"></img> <h4 className="absolute">{cartIems.length === 0 ? "empty" : (cartIems.length)}</h4></Link></li>
        <li>Online Status{useOnlineStatuses ? "✅" : "🥵"}</li>
        <button
          className="loginbtn"
          onClick={() => {
            btnname == "login" ? setbtnname(userloggedin) : setbtnname("login");
          }}
        >
          {btnname}
        </button>
      </ul>
    </div>
  );
};
