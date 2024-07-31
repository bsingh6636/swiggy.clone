import React from "react";
import "../css/Shimmer.css";

export const Shimmer = () => {
  return (
    <div className="ShimmerContainer">
      {[...Array(10)].map((_, index) => (
        <div className="ShimmerCard" key={index}>
          <div className="ShimmerImage"></div>
        </div>
      ))}
    </div>
  );
};
