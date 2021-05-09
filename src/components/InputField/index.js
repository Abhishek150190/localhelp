import React from "react";
import "./inputfield.css";

export const InputField = ({ inputType, placeholderText }) => {
  return <input className="default-input" type={inputType} placeholder={placeholderText} />;
};
