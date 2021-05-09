import React from "react";
import "./casecard.css";

export const CaseCard = ({ cardType, cardHeading, cardTally }) => {
  return (
    <div className={`card-container ` + cardType}>
      <div className="heading">{cardHeading}</div>
      <div className="tally">{cardTally}</div>
    </div>
  );
};
