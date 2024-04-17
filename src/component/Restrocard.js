
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
    <div className="restro-card w-[280px]">
      <img
        className="restroimage"
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
      ></img>

      <div className="RestroDetails">
        <h3
          className="RestroName"
          style={{
            color: "black",
            marginTop: "2px",
            fontSize: "larger",
            fontFamily: "system-ui",
          }}
        >
          {name}
        </h3>
        <h4 style={{ marginTop: "-5px" }}>
          {avgRating} ⭐ ETA{deliveryTime} min
        </h4>
        <h5 style={{ color: "green", fontSize: "small" }}>
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