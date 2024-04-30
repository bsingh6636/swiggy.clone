
import React  from "react";
import "../css/restromenu.css"
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
    <div className="restro-card p-4 w-[280px]">
      <img
        className="h-[180px] w-[370px] rounded-xl"  alt={name}
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}` }
      ></img>

      <div className="RestroDetails">
        <h3
          className="font-bold text-pretty p-1 pl-2"
         
        >
          {name}
        </h3>
        <h4  className="pl-1 font-bold">
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
      <div className="promoted" >
       <label className="prostatus" >Delay delivery</label>
      <Restrocard {...props}/>
      </div>
    )
  }
}