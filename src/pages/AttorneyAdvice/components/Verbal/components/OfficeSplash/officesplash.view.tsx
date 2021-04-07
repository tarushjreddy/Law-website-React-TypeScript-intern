import React from "react";
import styles from "./officesplash.module.scss";
import branchImage from "../../../../../../Zytcode Assets/PNG files/Branch office tab.png";

const OfficeSplash = () => {
  return (
    <div className={styles["container"]}>
      <div className={styles["ring"]}>
        <img src={branchImage} alt="branchImage" />
      </div>
      <h1 style={{ fontSize: "1.2rem" }}>Select one of the Branch Offices</h1>
    </div>
  );
};

export default OfficeSplash;
