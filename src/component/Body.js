import { Restrocard, PromotedRestrocard } from "./Restrocard";
import React, { useEffect, useState } from "react";
import { Shimmer } from "./Shimmer";
import { Link } from "react-router-dom";
import { useOnlineStatus } from "../Const/useOnlineStatus";
import { RestroApi, proxyRestroApi } from "./Const";
import { WhatsOnMind } from "./WhatsOnMind";

export const Body = () => {
  const ProRestrocard = PromotedRestrocard(Restrocard);
  const [restrolist, setrestrolist] = useState([]);
  const [searchvalue, setsearchvalue] = useState("");
  const [temp, settemp] = useState()
  let [reslists, setreslists] = useState([]);
  const filterestro = () => {
    let filteredlist = restrolist.filter((resti) => resti.info.avgRating > 4);
    setrestrolist(filteredlist);
  };
  const filterDeserts = () => {
    let filteredList = restrolist.filter((rest) =>
      rest.info.cuisines.map(cuisine => cuisine.toLowerCase()).includes("desserts".toLowerCase())
    );
    setrestrolist(filteredList)
  };



  useEffect(() => {
    fetchdata();
  }, []);

  useOnlineStatus();

  const fetchdata = async () => {
    try {
      const data = await fetch(`${RestroApi}`);
      const jsone = await data.json();

      const Restrolist =
        jsone.data.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants ||
        jsone.data.cards[2]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants ||
        jsone.data.cards[3].card.card.gridElements.infoWithStyle.restaurants;
      setrestrolist(Restrolist);
      setreslists(Restrolist);
    } catch (error) {
      console.log('Error fetching from api using api with proxy now', error)
      const proxyData = await fetch(`${proxyRestroApi}`);
      const proxyJson = await proxyData.json();

      const proxyRestrolist = proxyJson.data.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants ||
        proxyJson.data.cards[2]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants ||
        proxyJson.data.cards[3].card.card.gridElements.infoWithStyle.restaurants;

      setrestrolist(proxyRestrolist);
      setreslists(proxyRestrolist);
    }
  };

  const searchrestro = () => {
    let searchedrestro = reslists.filter(
      (res) =>
        res.info.name &&
        res.info.name.toLowerCase().includes(searchvalue.toLowerCase())
    );
    if (searchedrestro.length === 0) {
      console.log('no restro found')
    } else {
      setrestrolist(searchedrestro);
    }
  };

  return restrolist.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body bg-gray-200 pr-6 pl-6">
      <WhatsOnMind />
      <div className="flex flex-wrap items-center">
        <input
          type="text"
          className="m-2 p-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition duration-200"
          value={searchvalue}
          onChange={(e) => {
            setsearchvalue(e.target.value);
            searchrestro();
          }}
          placeholder="Search Restro"
        />

        <button
          type="button"
          className="m-2 p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out"
          onClick={searchrestro}
        >
          Search
        </button>

        <button
          type="button"
          className="text-white m-2 p-2 bg-green-500 rounded-lg hover:bg-green-700 transition duration-300 ease-in-out"
          onClick={filterestro}
        >
          Ratings 4.0
        </button>

        <button
          type="button"
          className="text-white m-2 p-2 bg-purple-500 rounded-lg hover:bg-purple-700 transition duration-300 ease-in-out"
          onClick={filterDeserts}
        >
          Filter Deserts
        </button>

        <button
          type="button"
          className="text-white m-2 p-2 bg-red-500 rounded-lg hover:bg-red-700 transition duration-300 ease-in-out"
          onClick={() => setrestrolist(reslists)}
        >
          Remove Filter
        </button>



      </div>
      <p className="p-2 font-bold text-2xl">Top restaurant chains in Bangalore</p>
      <div className="appbody flex flex-wrap">
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

export default Body;
