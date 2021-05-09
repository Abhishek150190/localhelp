import React from "react";

import "./statspage.css";
import dashboardSVG from "../../assets/svg/undrawDashboard.svg";
import { CaseCard } from "../../components";
export const StatsPage = () => {
  return (
    <>
      <div className="banner-image">
        <img src={dashboardSVG} alt="HStats Banner" />
      </div>
      <div className="heading brand">Stats around you.</div>

      <div className="dashboard-container">
        <div className="card-row">
          <CaseCard cardType="total" cardHeading="Total Cases" cardTally="21" />
          <CaseCard cardType="recovered" cardHeading="Recovered" cardTally="15" />
          <CaseCard cardType="active" cardHeading="Active" cardTally="6" />
        </div>
      </div>
    </>
  );
};
