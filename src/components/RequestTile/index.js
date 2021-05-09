import React from "react";
import { ButtonComp } from "../ButtonComp";
import { InputField } from "../InputField";
import "./requesttile.css";

export const RequestTile = ({ requesterDetail, requestType, requestAddress, requesterId }) => {
  return (
    <div className="request-container">
      <div className="request-details">
        <div className="requester-detail">{requesterDetail}</div>
        <div className="request-type">{requestType}</div>
        <div className="request-address">{requestAddress}</div>
      </div>
      <div className="request-fulfill">
        <div>
          <InputField inputType="text" placeholderText="Contact Number" />
        </div>
        <div>
          <ButtonComp btnType="help" label="HELP" />
        </div>
      </div>
    </div>
  );
};
