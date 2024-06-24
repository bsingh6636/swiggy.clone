
import React from "react";

export const Restrocard = ({ restro }) => {
  const {
    info: {
      cloudinaryImageId,
      name,
      avgRating,
      cuisines,
      sla: { deliveryTime },
    },
  } = restro;
  return (
    <div className="restro-card p-4 w-[280px]  shadow-xl rounded-xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 hover:bg-slate-300">
      <img
        className="h-[220px] w-[300px] rounded-xl m-[-30px] ml-1 p-1 mt-1" alt={name}
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
      ></img>

      <div className="RestroDetails mt-8 space-y-2">
        <h3 className="font-bold text-lg ml-3  p-1  rounded-md">
          {name}
        </h3>
        <h4 className="font-bold text-sm text-gray-700">
          ⭐ {avgRating}  •  {deliveryTime} min
        </h4>
        <h5 className="font-medium text-xs text-gray-500 pl-1.5">
          {cuisines.join(", ")}
        </h5>
      </div>

    </div>
  );
};

export const PromotedRestrocard = (Restrocard) => {
  return (props) => {
    return (
      <div className="promoted relative">
        <label className="prostatus absolute text-white p-2 ml-[165px] bg-black rounded-lg z-50 mt-6">Wait longer</label>
        <Restrocard {...props} />
      </div>

    )
  }
}