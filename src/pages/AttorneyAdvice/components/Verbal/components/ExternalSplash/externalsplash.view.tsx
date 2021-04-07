import React from "react";
import classes from "./externalsplash.module.scss";
import consultationImage from "../../../../../../Zytcode Assets/PNG files/External location tab.png";

const MeetSplash = () => {
  return (
    <div className={classes.containerr}>
      {/* <div className={classes.ring}>
        <img src={consultationImage} alt="consultationMode" />
      </div> */}
      <h1 style={{ textAlign: "center", padding: "5px", fontSize: "1.5rem" }}>
        Please enter the address of the location
      </h1>
    </div>
  );
};

export default MeetSplash;
