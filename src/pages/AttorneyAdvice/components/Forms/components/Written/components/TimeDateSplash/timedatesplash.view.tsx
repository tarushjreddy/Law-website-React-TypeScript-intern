import React from "react";
import styles from "./timedatesplash.module.scss";
import timeImage from "../../../../../../../../Zytcode Assets/PNG files/Time Schedule.png";

const TimeDateSplash = () => {
  return (
    <div className={styles["container"]}>
      <div className={styles["ring"]}>
        <div className={styles["outer_circle"]}>
          <div className={styles["inner_circle"]}></div>
          <img src={timeImage} alt="welcome" />
        </div>
      </div>
      <h1 style={{ textAlign: "center", padding: "5px", fontSize: "x-large" }}>
        Please choose the time and date to continue
      </h1>
      <h4 style={{ textAlign: "center" }}>Thank you</h4>
    </div>
  );
};

export default TimeDateSplash;
