import React from "react";
import { useTranslation } from "react-i18next";

const IntroductionView = () => {
  const { t } = useTranslation("contract");

  return (
    <div className="container mt-5">
      <h2>{t("introduction.heading")}</h2>
      <p>{t("introduction.text")}</p>
    </div>
  );
};

export default IntroductionView;
