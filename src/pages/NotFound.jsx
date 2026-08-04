import React from "react";
import { useTranslation } from "react-i18next";
import "../css/notFound.css";

function NotFound() {
  const { t } = useTranslation();
  
  return (
    <div className="not-found container d-flex flex-column align-items-center justify-content-center mt-5">
      <h1>404</h1>
      <h2>{t("empty")}</h2>
      <p>{t("loading")}</p>
    </div>
  );
}

export default NotFound;