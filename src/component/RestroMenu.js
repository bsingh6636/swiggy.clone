import React, { useEffect, useState } from "react";
import { Shimmer } from "../smallComponents/Shimmer.js";
import { useParams } from "react-router-dom";
import { useRestroMenuApi } from "../Const/useRestroMenuApi.js";
import MenuCard from "./MenuCard";
import { fetchproxy } from "../Const/fetchproxy.js";
import { MenuApi } from "../Const/Const.js";

export const RestroMenu = () => {
  const [restroMenu, setRestroMenu] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const { resId } = useParams();
  const [apiData, setApiData] = useState(null);

  // Function to fetch data
  const getData = async () => {
    try {
      const targetUrl = `${MenuApi}${resId}`;
      const response = await fetchproxy(targetUrl);
      setApiData(response);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getData();
  }, [resId]);
  useEffect(() => {
    if (apiData) {
      const menuCards = apiData?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards || apiData?.data?.cards?.[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards
      if (menuCards && menuCards.length > 1)setRestroMenu(menuCards.slice(1));
    }
  }, [apiData]);
  if (!restroMenu) {
    return <Shimmer />;
  }
  return (
    <div>
      {/* Restaurant's text title */}
      <span className="font-extrabold flex justify-center my-2 py-3">
        {apiData?.data?.cards?.[0]?.card?.card?.text}
      </span>

      {/* Map through menu items and render MenuCard */}
      {restroMenu.map((menuItem, index) => (
        <MenuCard
          key={menuItem?.id || index} // Use a unique identifier if available
          menu={menuItem}
          showitem={index === selectedIndex}
          setindexset={() => setSelectedIndex(index)}
        />
      ))}
    </div>
  );
};
