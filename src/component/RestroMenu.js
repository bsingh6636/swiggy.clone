import React, { useEffect, useState } from "react";
import { Shimmer } from "../smallComponents/Shimmer.js";
import { useParams } from "react-router-dom";
import { useRestroMenuApi } from "../Const/useRestroMenuApi.js";
import MenuCard from "./MenuCard";

export const RestroMenu = () => {
  let [restromenu, setrestromenu] = useState([]);
  const [indexset, setindexset] = useState();
  const { resId } = useParams();
  let apidata = useRestroMenuApi(resId);
  // console.log(apidata);
  useEffect(() => {
    if (
      apidata?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards

    ) {
      setrestromenu(
        apidata.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards.slice(1)
      );
    }
  }, [apidata]);
  //  console.log(restromenu)
  return restromenu.length === 0 ? (
    <Shimmer />
  ) : (
    <div>
      <span className="font-extrabold flex justify-center   my-2 py-3">
        {apidata?.data?.cards[0]?.card?.card?.text}
      </span>
     
      {restromenu.map((res, index, showitem) => {
        return (
          <MenuCard
            key={index}
            menu={res}
            showitem={index === indexset ? true : false}
            setindexset={() => {
              setindexset(index);
            }}
          />
        );
      })}
    </div>
  );
};
