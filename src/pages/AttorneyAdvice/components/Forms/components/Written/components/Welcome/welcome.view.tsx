import React from "react";
import styles from "./welcome.module.scss";
import welcomeImage from "../../../../../../../../Zytcode Assets/PNG files/Welcome.png";

const Welcome = () => {
  return (
    <div className={styles["containerr"]}>
      {/* <div className={styles["containerr"]}>
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
      </div> */}

      <h1 style={{ textAlign: "center" }}>Welcome</h1>
      <h6>Plase enter your details to continue</h6>
    </div>
  );
};

export default Welcome;
