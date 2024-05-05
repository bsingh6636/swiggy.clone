
import React  from "react";

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
    <div className="restro-card p-4 w-[280px] overflow-hidden">
      <img
        className="h-[220px] w-[300px] rounded-xl m-[-30px] "  alt={name}
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}` }
      ></img>

      <div className="RestroDetails mt-8 ">
        <h3
          className="font-bold text-pretty p-1"
         
        >
          {name}
        </h3>
        <h4  className=" font-bold">
          ⭐ {avgRating}  •  {deliveryTime} min
        </h4>
        <h5 className="font-medium pl-1.5" style={{  fontSize: "small" }}>
          {cuisines.join(", ")}
        </h5>
      </div>
    </div>
  );
};

export const PromotedRestrocard = (Restrocard) =>{
  return (props) =>{
    return(
      <div className="promoted " >
       <label className="prostatus absolute text-white p-2 ml-[120px] bg-black  rounded-lg" >Wait longer</label>
      <Restrocard {...props}/>
      </div>
    )
  }
}