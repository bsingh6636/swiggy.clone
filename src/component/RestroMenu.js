import React, { useEffect, useState } from "react";
import { Shimmer } from "./Shimmer";
import { useParams } from "react-router-dom";
import { useRestroMenuApi } from "../Const/useRestroMenuApi.js";
import  MenuCard  from "./MenuCard";


export const RestroMenu = () => {
  let [restromenu, setrestromenu] = useState([]);
  // let [menuarray, setmenuarray] = useState([]);
  // const [showitem , setshowitem] = useState(false)
   const [indexset , setindexset] = useState()
   const { resId } = useParams();
  let apidata = useRestroMenuApi(resId);
  // console.log(apidata);
  useEffect(() => {
    if (apidata && apidata.data && apidata.data.cards[5] && apidata.data.cards[5].groupedCard && apidata.data.cards[5].groupedCard.cardGroupMap && apidata.data.cards[5].groupedCard.cardGroupMap.REGULAR && apidata.data.cards[5].groupedCard.cardGroupMap.REGULAR.cards) {
       setrestromenu(
         apidata.data.cards[5].groupedCard.cardGroupMap.REGULAR.cards.slice(1)
       );
    }
   }, [apidata]);
   
   return restromenu.length === 0 ? (<Shimmer /> ):
 
     (
      <div>
        <span className="font-extrabold flex justify-center  bg-slate-400 my-2 py-3">
          {apidata?.data?.cards[0]?.card?.card?.text}
        </span>
        {restromenu.map((res,index,showitem) => {
          return(
          <MenuCard  key={index} menu={res}  showitem={index === indexset ? true : false}
          setindexset={()=>{setindexset(index)}}
          />)
        })}
      </div>
    );
};
