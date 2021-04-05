import React from "react";
import styles from "./audiosplash.module.scss";
import consultationImage from "../../../../../../Zytcode Assets/PNG files/Record Audio tab.png";

const AudioSplash = () => {
  return (
    <div className={styles["container"]}>
      <div className={styles["ring"]}>
        <img src={consultationImage} alt="consultationMode" />
      </div>
      <h1 style={{ textAlign: "center", padding: "5px" }}>
        Record an audio describing the scenario
      </h1>
    </div>
  );
};

export default AudioSplash;
