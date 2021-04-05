import React from "react";
import { useTranslation } from "react-i18next";

import ContactSidebar from "../../../../Zytcode Assets/Assets/contact-sidebar.jpg";
import SingleService from "../../../../Zytcode Assets/PNG files/Single_service_img.jpg";

const HighLightView = () => {
  const { t } = useTranslation("attorneyadvice");
  return (
    <div className="row">
      <div className="col-lg-4">
        <div className="field-section">
          <div className="field-img">
            <img src={ContactSidebar} alt="Service 1" />
          </div>
          <div className="field-content">
            <h3 style={{ fontSize: "22px", marginTop: "15px" }}>
              {t("text.25Years")}
            </h3>
            <div>
              <a href="/contact">{t("text.contactUsNow")}</a>
            </div>
          </div>
        </div>
        <div className="ot-s">
          <h4 className="mt-3">{t("otherServices")}</h4>
          <ul>
            <li>
              <a href="/toAdd">{t("services.0")}</a>
            </li>
            <li>
              <a href="/toAdd">{t("services.0")}</a>
            </li>
            <li>
              <a href="/toAdd">{t("services.0")}</a>
            </li>
            <li>
              <a href="/toAdd">{t("services.0")}</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="col-lg-8">
        <img src={SingleService} alt="Service 2" />
        <h4 className="mt-3">{t("text.legalAdvice")}</h4>
        <p>{t("text.description")}</p>
      </div>
    </div>
  );
};

export default HighLightView;
