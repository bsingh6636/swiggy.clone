import { Restrocard, PromotedRestrocard } from "./Restrocard";
import React, { useEffect, useState } from "react";
import { Shimmer } from "../smallComponents/Shimmer";
import { Link } from "react-router-dom";
import { useOnlineStatus } from "../Const/useOnlineStatus";
import { WhatsOnMind } from "../smallComponents/WhatsOnMind";
import { fetchdata } from "../Const/restroApi";

export const Body = () => {
  const ProRestrocard = PromotedRestrocard(Restrocard);
  const [restrolist, setrestrolist] = useState([]);
  const [searchvalue, setsearchvalue] = useState("");
  let [restrolistCopy, setrestrolistCopy] = useState([]);

  const filterestro = () => {
    let filteredlist = restrolistCopy.filter((resti) => resti.info.avgRating > 4);
    setrestrolist(filteredlist);
  };

  const filterDeserts = () => {
    let filteredList = restrolistCopy.filter((rest) =>
      rest.info.cuisines.map(cuisine => cuisine.toLowerCase()).includes("desserts".toLowerCase())
    );
    setrestrolist(filteredList)
  };



  useEffect(() => {
    const fetchRestroData = async () => {
      const data = await fetchdata();
      setrestrolist(data);
      setrestrolistCopy(data);
    }
    fetchRestroData()
  }, []);

  useOnlineStatus();

  const searchrestro = () => {
    let searchedrestro = restrolistCopy.filter(
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

  return !restrolist?.length  ? (
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
          onClick={() => setrestrolist(restrolistCopy)}
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
