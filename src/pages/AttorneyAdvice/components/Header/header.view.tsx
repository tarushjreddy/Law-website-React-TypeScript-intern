import React from "react";
import { useTranslation } from "react-i18next";

import styles from "./header.module.scss";
import BackgroundImage from "../../../../Zytcode Assets/PNG files/Attorney Advice Banner-min.png";
import { GetAllSliderDetails } from "./header.model";

const HeaderView = () => {
  const { t } = useTranslation("attorneyadvice");
  return (
    <div
      className={`${styles["clip-image-container"]} `}
      style={{ height: "100vh" }}
    >
      <img
        className={styles["clip-image"]}
        src={BackgroundImage}
        alt="Header Banner"
        style={{
          height: "100vh",
          objectFit: "cover",
        }}
      />

      <div
        className={styles["clip-image-content2"]}
        style={
          localStorage.getItem("lang") === "ar" ? { right: 0 } : { left: 0 }
        }
      >
        <div
          className="sub-heading d-flex align-items-center"
          style={{ fontSize: "40px", color: "white", marginLeft: "0px" }}
        >
          <span className={styles["line"]}></span>
          <span>
            <b>&nbsp;&nbsp;{t("title")}</b>
          </span>
        </div>
      </div>
    </div>
  );
};

export default HeaderView;
