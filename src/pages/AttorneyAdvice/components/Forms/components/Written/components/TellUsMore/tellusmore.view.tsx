import React from "react";
import styles from "./tellusmore.module.scss";
import moreImage from "../../../../../../../../Zytcode Assets/PNG files/Tell us More Tab.png";

const TellUsMore = () => {
  return (
    <div className={styles["container"]}>
      <div className={styles["ring"]}>
        <img src={moreImage} alt="TellUsMoreImage" />
      </div>
      <h1 style={{ fontSize: "1.7em" }}>Tell us more</h1>
      <h1
        style={{
          textAlign: "center",
          padding: "2px",
          fontSize: "1.4em",
          fontWeight: 500,
        }}
      >
        What kind of consultation are you looking for?
      </h1>
      <h1
        style={{
          textAlign: "center",
          padding: "2px",
          fontSize: "1.2em",
          fontWeight: 500,
        }}
      >
        You can write us and let us know what you are looking <br /> for in
        particular
      </h1>
    </div>
  );
};
export default TellUsMore;
