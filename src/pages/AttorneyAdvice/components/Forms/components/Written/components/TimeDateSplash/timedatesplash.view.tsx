import React from "react";
import styles from "./timedatesplash.module.scss";
import timeImage from "../../../../../../../../Zytcode Assets/PNG files/Time Schedule.png";

const TimeDateSplash = () => {
  return (
    <div className={styles["containerr"]}>
      {/* <div className={styles["ring"]}>
        <div className={styles["outer_circle"]}>
          <div className={styles["inner_circle"]}></div>
          <img src={timeImage} alt="welcome" />
        </div>
      </div> */}
      <h1 style={{ textAlign: "center", padding: "5px", fontSize: "1.3rem" }}>
        Please choose date and time
      </h1>
      {/* <p>Thank you</p> */}
    </div>
  );
};

export default TimeDateSplash;
