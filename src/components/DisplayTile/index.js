import React from "react";
import "./displaytile.css";

export const DisplayTile = ({ order = "", image, heading, description }) => {
  return (
    <div className={`tile-container ` + order}>
      <div className="tile-graphic">
        <img src={image} alt="" />
      </div>
      <div className="tile-content">
        <div className="content-heading">{heading}</div>
        <div className="content-description">{description}</div>
      </div>
    </div>
  );
};
