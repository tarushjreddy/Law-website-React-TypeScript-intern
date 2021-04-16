import React, { useEffect, useState } from "react";
import styles from "./Modified.module.scss";
import imgpro from "./pexels-eberhard-grossgasteiger-691668.jpg";
//  className={`${styles["si\]UpContainer"]}`}
import { createUseStyles } from "react-jss";
import { TravelInsurance } from "../../../../services/apis";
interface CustomInputFieldProps {
  styling: String;
}

const Modified: React.FC<CustomInputFieldProps> = ({ styling }) => {
  useEffect(() => {
    async function getData() {
      const data = await TravelInsurance();
      console.log("Tarush is the best boy");

      console.log(data.data[0]);
      console.log("harish is the best boy");
    }
    window.dispatchEvent(new Event("resize"));

    getData();
  }, []);

  console.log(styling);
  const useStyles = createUseStyles({
    App: {
      flexDirection: `${styling}`,
      color: "red",
      height: "100%",
      marginTop: "40px",

      display: "flex",
      flexWrap: "inherit",

      justifyContent: "space-between",
    },
  });

  const classes = useStyles();
  return (
    <div className={classes.App} id={`${styles["Maincontainer"]}`}>
      <div className={`${styles["leftContainer"]}`}>
        <h1 className={`${styles["header"]}`}>Travel Insurance</h1>
        <p className={`${styles["paragraph"]}`}>
          this is the place where we get the paragraph content this is the place
          where we get the paragraph content this is the place where we get the
          paragraph content this is the place where we get the paragraph content
          this is the place where we get the paragraph content this is the place
          where we get the paragraph content this is the place where we get the
          paragraph content this is the place where we get the paragraph content
        </p>
        <p className={`${styles["divider_text"]}`}>Main benefits:</p>
        <hr className={`${styles["divider"]}`} />
        <div className={`${styles["logo_option"]}`}>
          <div className={`${styles["logo_parts"]}`}>
            <div className={`${styles["info"]}`}>
              <div className={`${styles["logo_rounded"]}`}>logo</div>
              <div className={`${styles["logo_rounded_info"]}`}>
                Emergency Medical Eexpenses
              </div>
            </div>
            <div className={`${styles["info"]}`}>
              <div className={`${styles["logo_rounded"]}`}>logo</div>
              <div>Travel Delay</div>
            </div>
            <div className={`${styles["info"]}`}>
              <div className={`${styles["logo_rounded"]}`}>logo</div>
              <div>Personal Liability</div>
            </div>
          </div>
          <hr style={{ width: "20px" }} />
          <div className={`${styles["logo_parts"]}`}>
            <div className={`${styles["info"]}`}>
              <div className={`${styles["logo_rounded"]}`}>logo</div>
              <div>Delayed Baggage</div>
            </div>
            <div className={`${styles["info"]}`}>
              <div className={`${styles["logo_rounded"]}`}>logo</div>
              <div>Cancelling Your Trip</div>
            </div>
            <div className={`${styles["info"]}`}>
              <div className={`${styles["logo_rounded"]}`}>logo</div>
              <div>Legal Expenses</div>
            </div>
          </div>
        </div>
        <hr className={`${styles["divider"]}`} />
        <button className={`${styles["Button_part"]}`}>Lets do it</button>
      </div>
      <div className={`${styles["rightConatiner"]}`}>
        <img src={imgpro} alt="" />
      </div>
    </div>
  );
};

export default Modified;
