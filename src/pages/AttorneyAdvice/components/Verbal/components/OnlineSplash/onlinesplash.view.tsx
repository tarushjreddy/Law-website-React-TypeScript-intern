import React from "react";
import styles from "./onlinesplash.module.scss";
import onlineImage from "../../../../../../Zytcode Assets/PNG files/Online consultation tab.png";

const OnlineSplash = () => {
  return (
    <div className={styles["container"]}>
      <div className={styles["ring"]}>
        <img src={onlineImage} alt="onlineImage" />
      </div>
      <h1 style={{ textAlign: "center", padding: "5px" }}>
        Please choose a platform of your preference for the consultation
      </h1>
    </div>
  );
};

export default OnlineSplash;
