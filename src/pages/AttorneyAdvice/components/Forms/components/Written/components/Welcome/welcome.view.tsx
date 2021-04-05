import React from "react";
import styles from "./welcome.module.scss";
import welcomeImage from "../../../../../../../../Zytcode Assets/PNG files/Welcome.png";

const Welcome = () => {
  return (
    <div className={styles["container"]}>
      <div className={styles["ring"]}>
        <div className={styles["outer_circle"]}>
          <div className={styles["inner_circle"]}></div>
          <img src={welcomeImage} alt="welcome" />
        </div>
      </div>
      <h1 style={{ textAlign: "center" }}>Welcome</h1>
      <h4 style={{ textAlign: "center" }}>
        Please enter your details to continue
      </h4>
    </div>
  );
};

export default Welcome;
