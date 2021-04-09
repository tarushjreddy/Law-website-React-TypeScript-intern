import React, { useState } from "react";
import styles from "./News.module.scss";
import Carousel from "react-bootstrap/Carousel";
import imgh from "./download.jpeg";
import ShareIcon from "@material-ui/icons/Share";
function AddonView() {
  return (
    <div className={styles["News_portal"]}>
      <div className={styles["header"]}>Recent News</div>
      <hr style={{ color: "#b8a046" }} className={styles["divider"]} />
      <h6 className={styles["secod_header"]}>
        We offer our clients fresh prespective and breakthrough business
        insights.
      </h6>
      <div className={styles["news_body"]}>
        <div
          className={styles["news_body1"]}
          style={{
            width: "550px",
            height: "600px",
          }}
        >
          <div className={styles["address"]}>
            <div
              style={{
                backgroundColor: "white",
                height: "50px",
                width: "50px",
                color: "black",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0.5rem",
                borderRadius: "50px",
              }}
            >
              img
            </div>
            <h6>Name</h6>
          </div>
          <div
            className={styles["fotter_part"]}
            style={{
              height: "200px",
              width: "100%",

              bottom: "0",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              padding: "10px",
            }}
          >
            <div>
              <h1 style={{ textAlign: "left" }}>
                Are they going to have a new Bussness Realtionship?
              </h1>
              <hr style={{ margin: "0px" }} />
            </div>
            <div className={styles["address_pro"]}>
              <p>Busniess | 05/09/2020</p>
              <ShareIcon />
            </div>
          </div>
        </div>
        <div
          className={styles["news_body1"]}
          style={{
            width: "550px",
            height: "600px",
          }}
        >
          <div className={styles["address"]}>
            <div
              style={{
                backgroundColor: "white",
                height: "50px",
                width: "50px",
                color: "black",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0.5rem",
                borderRadius: "50px",
              }}
            >
              img
            </div>
            <h6>Name</h6>
          </div>
          <div
            className={styles["fotter_part"]}
            style={{
              height: "200px",
              width: "100%",

              bottom: "0",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              padding: "10px",
            }}
          >
            <div>
              <h1 style={{ textAlign: "left" }}>
                Are they going to have a new Busniess Realtionship?
              </h1>
              <hr style={{ margin: "0px" }} />
            </div>
            <div className={styles["address_pro"]}>
              <p>Busniess | 05/09/2020</p>
              <ShareIcon />
            </div>
          </div>
        </div>
        <div
          className={styles["news_body1"]}
          style={{
            width: "550px",
            height: "600px",
          }}
        >
          <div className={styles["address"]}>
            <div
              style={{
                backgroundColor: "white",
                height: "50px",
                width: "50px",
                color: "black",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0.5rem",
                borderRadius: "50px",
              }}
            >
              img
            </div>
            <h6>Name</h6>
          </div>
          <div
            className={styles["fotter_part"]}
            style={{
              height: "200px",
              width: "100%",

              bottom: "0",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              padding: "10px",
            }}
          >
            <div>
              <h1 style={{ textAlign: "left" }}>
                Are they going to have a new Busniess Realtionship?
              </h1>
              <hr style={{ margin: "0px" }} />
            </div>
            <div className={styles["address_pro"]}>
              <p>Busniess | 05/09/2020</p>
              <ShareIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddonView;
