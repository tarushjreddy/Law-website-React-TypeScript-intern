import React from "react";
import { useTranslation } from "react-i18next";

const SubIntroductionView = () => {
  const { t } = useTranslation("contract");

  return (
    <div>
      <h2>{t("subIntroduction.heading")}</h2>
      <p>{t("subIntroduction.text")}</p>
    </div>
  );
};

export default SubIntroductionView;
