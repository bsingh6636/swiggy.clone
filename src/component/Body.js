import { Restrocard, PromotedRestrocard } from "./Restrocard";
import React, { useContext, useEffect, useState } from "react";
import { Shimmer } from "./Shimmer";
import { Link } from "react-router-dom";
import { useOnlineStatus } from "../Const/useOnlineStatus";
import { RestroApi, proxyRestroApi } from "./Const";
import { UserContext  } from "../Const/UserContext";

export const Body = () => {
  const ProRestrocard = PromotedRestrocard(Restrocard);
  const [restrolist, setrestrolist] = useState([]);
  const [searchvalue, setsearchvalue] = useState("");
  let [reslists, setreslists] = useState([]);
  const {setusername , userloggedin} = useContext(UserContext)
  const filterestro = () => {
    let filteredlist = restrolist.filter((resti) => resti.info.avgRating > 4);
    setrestrolist(filteredlist);
  };
  useEffect(() => {
    fetchdata();
  }, []);
  useOnlineStatus();
  const fetchdata = async () => {
    try {
    const data = await fetch(`${RestroApi}`);
    const jsone = await data.json();
    console.log(jsone);
    setrestrolist(
      jsone.data.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants ||
        jsone.data.cards[2]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants ||
        jsone.data.cards[3].card.card.gridElements.infoWithStyle.restaurants
    );
    setreslists(restrolist);
  } catch(error) {
    console.log('Error fetching from api using api with proxy now', error)
    const proxyData = await fetch(`${proxyRestroApi}`);
    const proxyJson = await proxyData.json();
    console.log(proxyJson);
    setrestrolist(
      proxyJson.data.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants ||
        proxyJson.data.cards[2]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants ||
        proxyJson.data.cards[3].card.card.gridElements.infoWithStyle.restaurants
    );
    setreslists(restrolist);
  }
 }
  const searchrestro = () => {
    let searchedrestro = reslists.filter(
      (res) =>
        res.info.name &&
        res.info.name.toLowerCase().includes(searchvalue.toLowerCase())
    );
    if (searchedrestro.length === 0) {
      setrestrolist(reslists);
    } else {
      setrestrolist(searchedrestro);
    }
  };

  return restrolist.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filterclass">
        <input
          type="text"
          className="searchtext"
          value={searchvalue}
          onChange={(e) => {
            setsearchvalue(e.target.value);
            searchrestro();
          }}
          placeholder="Enter text"
        ></input>
        <button type="button" className="searchbutton" onClick={searchrestro}>
          Search
        </button>
        <button type="button" className="filterbutton" onClick={filterestro}>
          Filter restro
        </button>
        <label>Input Name</label>
        <input value={userloggedin} onChange={(e)=>{setusername(e.target.value)}}></input>
      </div>
      <div className="appbody">
        {restrolist.map((restroo) => (
          <Link key={restroo.info.id} to={"/restromenu/" + restroo.info.id}>
            {restroo.info.sla.deliveryTime < 35 ? (
              <ProRestrocard restro={restroo} />
            ) : (
              <Restrocard restro={restroo} />
            )}
            
          </Link>
        ))}
      </div>
    </div>
  );
};
