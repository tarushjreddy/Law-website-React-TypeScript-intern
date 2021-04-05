import React from "react";
import styles from "./offlinesplash.module.scss";
import offlineImage from "../../../../../../Zytcode Assets/PNG files/Offline consultation tab.png";

const OfflineSplash = () => {
  return (
    <div className={styles["container"]}>
      <div className={styles["ring"]}>
        <img src={offlineImage} alt="offlineImage" />
      </div>
      <h1>Where would you like to meet us?</h1>
    </div>
  );
};

export default OfflineSplash;
