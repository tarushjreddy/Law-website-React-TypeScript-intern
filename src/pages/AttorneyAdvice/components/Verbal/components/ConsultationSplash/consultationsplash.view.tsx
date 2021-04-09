import React from "react";
import styles from "./consultationsplash.module.scss";
import consultationImage from "../../../../../../Zytcode Assets/PNG files/Mode on consultation tab.png";

const ConsultationSplash = () => {
  return (
    <div className={styles["containerr"]}>
      {/* <div className={styles["ring"]}>
        <img src={consultationImage} alt="consultationMode" />
      </div> */}
      <h1 style={{ textAlign: "center", padding: "5px", fontSize: "1.2rem" }}>
        What kind of consultation are you looking for
      </h1>
    </div>
  );
};

export default ConsultationSplash;
