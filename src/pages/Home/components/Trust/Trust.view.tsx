import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import download from "./download.jpeg";
import "./Trust.scss";
function Trust() {
  return (
    <div
      style={{
        flexDirection: "column",
        alignItems: "center",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div className="trust_main_container">
        <h6
          style={{
            width: "100%",
            display: "flex",
            alignItems: "baseline",
            fontSize: "30px",
            marginLeft: "40px",
          }}
        >
          Trusted Partners
        </h6>
        <div
          style={{
            display: "flex",

            flexDirection: "column",
          }}
        >
          <div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Carousel
                style={{ marginLeft: "20px", color: "red", width: "100%" }}
                className="carousel_css"
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
    </div>
  );
}

export default Trust;
