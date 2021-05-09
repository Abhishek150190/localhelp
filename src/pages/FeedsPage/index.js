import React from "react";
import helpSVG from "../../assets/svg/undrawHelpful.svg";
import { RequestTile } from "../../components";

export const FeedsPage = () => {
  return (
    <>
      <div className="banner-image">
        <img src={helpSVG} alt="Feeds Page" />
      </div>
      <div className="heading brand">Help Someone near you. </div>

      <div className="display-tiles">
        <RequestTile
          requesterDetail="Ram, 9810768745"
          requestType="Food for 2(VEG)"
          requestAddress="290, DDA Apartments, Sector 62, Noida"
        />
      </div>
    </>
  );
};
