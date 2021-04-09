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
        margin: "30px",

        height: "250px",
      }}
    >
      <div
        style={{
          display: "flex",

          flexDirection: "column",
        }}
      >
        <div style={{ height: "100%" }}>
          <h6
            style={{
              fontSize: "30px",
              color: "#242f40",
              marginTop: "30px",
              marginLeft: "20px",
            }}
          >
            Trusted Partners
          </h6>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100vw",
            }}
          >
            <Carousel
              style={{ marginLeft: "20px", color: "red", width: "100vw" }}
            >
              <Carousel.Item interval={40000}>
                <div
                  style={{
                    height: "150px",
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                    justifyContent: "space-evenly",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      width: "100%",
                      flexDirection: "row",

                      justifyContent: "space-evenly",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",

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
                    </div>
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item interval={40000}>
                <div
                  style={{
                    height: "150px",

                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                    justifyContent: "space-evenly",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      width: "100%",
                      flexDirection: "row",

                      justifyContent: "center",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",

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
                    </div>
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
    </div>
  );
}

export default Trust;
