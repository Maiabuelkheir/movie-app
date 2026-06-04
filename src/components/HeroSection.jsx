import React from "react";
import { t } from 'i18next';
import {Link} from "react-router-dom";


const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <h4>{t("welcome")}</h4>
        <h1 style={{ color: "#d10000" }}>{t("appName")}</h1>
        <p>
        {t("description")}
        </p>
        <div className="hero-buttons">
         <Link to={"/search"}>
          <button className="btn btn-outline-danger source-btn">
          {t("startJourney")}
          </button>
         </Link>
         <Link to={"/watchlist"}>
          <button className="btn btn-outline-danger read-more-btn">
          {t("watchList")}
          </button>
         </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
