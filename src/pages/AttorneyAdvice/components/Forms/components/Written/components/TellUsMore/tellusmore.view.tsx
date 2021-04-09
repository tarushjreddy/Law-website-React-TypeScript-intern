import React from "react";
import styles from "./tellusmore.module.scss";
import moreImage from "../../../../../../../../Zytcode Assets/PNG files/Tell us More Tab.png";

const TellUsMore = () => {
  return (
    <div className={styles["containerr"]}>
      {/* <div className={styles["ring"]}>
        <img src={moreImage} alt="TellUsMoreImage" />
      </div> */}
      <div className={styles["containerr_text"]}>
        <h1
          style={{
            textAlign: "center",
            padding: "2px",
            fontSize: "1.9em",
            fontWeight: 500,
          }}
        >
          What kind of consultation are you looking for?
        </h1>
      </div>
      {/* <h1
        style={{
          textAlign: "center",
          padding: "2px",
          fontSize: "0.9em",
          fontWeight: 200,
        }}
      >
        You can write us and let us know <br /> what you are looking for in
        particular
      </h1> */}
    </div>
  );
};
export default TellUsMore;
