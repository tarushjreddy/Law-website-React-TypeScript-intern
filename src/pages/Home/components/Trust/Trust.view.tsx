import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import download from "./download.jpeg";
import "./Trust.scss";
function Trust() {
  return (
    <div
      style={{
        backgroundColor: "#C9C9C9",
        display: "flex",
        marginTop: "30px",
        width: "100vw",
        height: "280px",
      }}
    >
      <div
        style={{
          display: "flex",

          flexDirection: "column",
        }}
      >
        <div style={{ width: "100vw", height: "100%" }}>
          <h6
            style={{
              fontSize: "30px",
              color: "#242f40",
              margin: "10px",
              marginTop: "30px",
            }}
          >
            Trusted Partners
          </h6>

          <Carousel style={{ margin: "0px", color: "red" }}>
            <Carousel.Item interval={1000}>
              <div
                style={{
                  height: "150px",
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                  justifyContent: "space-around",
                  width: "100vw",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    width: "100vw",
                    flexDirection: "row",
                    justifyContent: "space-evenly",
                  }}
                >
                  <div
                    className="image_holder"
                    style={{
                      backgroundImage: `url(${download})`,
                    }}
                  ></div>
                  <div
                    className="image_holder"
                    style={{
                      backgroundImage: `url(${download})`,
                    }}
                  ></div>
                  <div
                    className="image_holder"
                    style={{
                      backgroundImage: `url(${download})`,
                    }}
                  ></div>
                  <div
                    className="image_holder"
                    style={{
                      backgroundImage: `url(${download})`,
                    }}
                  ></div>
                  <div
                    className="image_holder"
                    style={{
                      backgroundImage: `url(${download})`,
                    }}
                  ></div>
                  <div
                    className="image_holder"
                    style={{
                      backgroundImage: `url(${download})`,
                    }}
                  ></div>
                </div>
              </div>
            </Carousel.Item>

            {/* <Carousel.Item
              interval={500}
              style={{ backgroundColor: "gray", height: "250px" }}
            >
              two
            </Carousel.Item>
            <Carousel.Item style={{ backgroundColor: "gray", height: "250px" }}>
              three
            </Carousel.Item> */}
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default Trust;
