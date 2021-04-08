import React, { useState } from "react";
import styles from "./News.module.scss";
import Carousel from "react-bootstrap/Carousel";

function AddonView() {
  return (
    <div className={styles["News_portal"]}>
      <div className={styles["header"]}>Recent News</div>
      <hr style={{ color: "#b8a046" }} className={styles["divider"]} />
      <h6 className={styles["secod_header"]}>
        We offfer our clients fresh prespective and breakthrough business
        insights.
      </h6>
      <div className={styles["news_body"]}>
        <Carousel>
          <Carousel.Item interval={2000}>
            <div
              style={{
                height: "500px",
                backgroundColor: "red",
                width: "100vw",
              }}
            >
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </div>
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <div
              style={{
                height: "500px",
                backgroundColor: "red",
                width: "100vw",
              }}
            >
              hello
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div
              style={{
                height: "500px",
                backgroundColor: "red",
                width: "100vw",
              }}
            >
              hello
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

export default AddonView;
