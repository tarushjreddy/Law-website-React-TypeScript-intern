import React from "react";
import styles from "./consultationsplash.module.scss";
import consultationImage from "../../../../../../Zytcode Assets/PNG files/Mode on consultation tab.png";

const ConsultationSplash = () => {
  return (
    <div className={styles["container"]}>
      <div className={styles["ring"]}>
        <img src={consultationImage} alt="consultationMode" />
      </div>
      <h1 style={{ textAlign: "center", padding: "5px" }}>
        Which mode of consultation would you prefer ?
      </h1>
    </div>
  );
};

export default ConsultationSplash;
