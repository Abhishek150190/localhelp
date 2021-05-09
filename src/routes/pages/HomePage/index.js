import React from "react";
import "./homepage.css";
import bannerSVG from "../../../assets/svg/undrawNotify.svg";
import foodSVG from "../../../assets/svg/undrawBreakfast.svg";
import { DisplayTile } from "../../../components";
const sampText =
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima repudiandae, labore fugit excepturi assumenda, ipsam earum saepe sunt repellat a, dolores aliquam. Consequatur odio ullam voluptas tempore rerum necessitatibus numquam!";
export const HomePage = () => {
  return (
    <>
      <div className="banner-image">
        <img src={bannerSVG} alt="Homepage Banner" />
      </div>
      <div className="heading brand">We are here to help</div>

      <div className="display-tiles">
        <DisplayTile image={foodSVG} heading="Food" description={sampText} />
      </div>
      
    </>
  );
};
