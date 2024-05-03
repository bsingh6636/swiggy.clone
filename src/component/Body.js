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
  let [reslists, setreslists] = useState([]);
  // const {setusername , userloggedin} = useContext(UserContext)
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
    // console.log(jsone);
   
      const Restrolist =
      jsone.data.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants ||
        jsone.data.cards[2]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants ||
        jsone.data.cards[3].card.card.gridElements.infoWithStyle.restaurants
        setrestrolist(Restrolist)
    setreslists(Restrolist);
  } catch(error) {
    console.log('Error fetching from api using api with proxy now', error)
    const proxyData = await fetch(`${proxyRestroApi}`);
    const proxyJson = await proxyData.json();
    // console.log(proxyJson);
    const proxyRestrolist = proxyJson.data.cards[1]?.card?.card?.gridElements?.infoWithStyle
  ?.restaurants ||
  proxyJson.data.cards[2]?.card?.card?.gridElements?.infoWithStyle
    ?.restaurants ||
  proxyJson.data.cards[3].card.card.gridElements.infoWithStyle.restaurants;

setrestrolist(proxyRestrolist);
setreslists(proxyRestrolist);
  }
 }
  const searchrestro = () => {
    // console.log(reslists)
    let searchedrestro = reslists.filter(
      
      (res) =>
        res.info.name &&
        res.info.name.toLowerCase().includes(searchvalue.toLowerCase())
    );
    if (searchedrestro.length === 0) {
      // setrestrolist(reslists);
      console.log('no restro found')
    } else {
      setrestrolist(searchedrestro);
    }
  };

  return restrolist.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body bg-slate-200 pr-6 pl-6">
      <div className="flex flex-wrap items-center ">
        <input
          type="text"
          className="m-2 p-2 border-2 border-black"
          value={searchvalue}
          onChange={(e) => {
            setsearchvalue(e.target.value);
            searchrestro();
          }}
          placeholder="Search Restro"
        ></input>
        <button type="button" className="m-2 p-2 bg-slate-500 rounded-lg" onClick={searchrestro}>
          Search
        </button>
        <button type="button" className="text-fuchsia-50 m-2 p-2 bg-slate-600 rounded-lg" onClick={filterestro}>
          Good restro
        </button>
        {/* <label className="m-2 p-2">Input Name</label>
        <input className="m-2 p-2" value={userloggedin} onChange={(e)=>{setusername(e.target.value)}}></input> */}
      </div>
      <div >
     
        
      <WhatsOnMind/>
      </div>
      <p className="p-2 font-bold text-2xl">Top restaurant chains in Bangalore</p>
      <div className="appbody ">
        {restrolist.map((restroo) => (
          <Link key={restroo.info.id} to={"/restromenu/" + restroo.info.id}>
            {/* {console.log(restroo)} */}
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
