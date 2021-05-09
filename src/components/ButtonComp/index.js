import React from "react";
import "./buttoncomp.css";
export const ButtonComp = ({ btnType, label }) => {
  return <button className={btnType}>{label}</button>;
};
