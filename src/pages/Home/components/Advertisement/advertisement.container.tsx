import React from "react";
import { useTranslation } from "react-i18next";

const Advertisement = () => {
  const { t, i18n } = useTranslation("home");
  return (
    <div className="advertisement-sec">
      <div className="row">
        <div className="col-sm-12 col-md-4">
          <div className="add-content">
            <div className="add-con-img float-start me-3 ms-5">
              <img
                src="media/images/skilled.png"
                alt={t("SKILLED ATTORNEYS WITH EXTENSIVE BACKGROUNDS")}
              />
            </div>
            <p className="float-start">
              {t("SKILLED ATTORNEYS WITH EXTENSIVE BACKGROUNDS")}
            </p>
          </div>
        </div>
        <div className="col-sm-12 col-md-4">
          <div className="add-content">
            <div className="add-con-img float-start me-3 ms-5">
              <img
                src="media/images/aggerasive.png"
                alt={t("AGGRESSIVE CRIMINAL DEFENCE")}
              />
            </div>
            <p className="float-start">{t("AGGRESSIVE CRIMINAL DEFENCE")}</p>
          </div>
        </div>
        <div className="col-sm-12 col-md-4">
          <div className="add-content">
            <div className="add-con-img float-start me-3 ms-5">
              <img
                src="media/images/experience.png"
                alt={t("EXPERIENCED COURTROOM PERFORMANCE")}
              />
            </div>
            <p className="float-start">
              {t("EXPERIENCED COURTROOM PERFORMANCE")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advertisement;
