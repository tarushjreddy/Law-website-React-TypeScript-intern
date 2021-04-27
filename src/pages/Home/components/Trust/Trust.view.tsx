import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import image from "./1.png";
import image1 from "./2.png";
import image2 from "./3.png";
import image3 from "./4.png";
import image4 from "./5.png";
import image5 from "./6.png";

import "./Trust.scss";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
};
function Trust() {
  let abc = 9;
  return (
    <div
      style={{
        display: "flex",
      }}
    >
      <div className="trustpartcontainer">
        <div style={{ marginLeft: "60px", width: "100%" }}>
          <h6
            // style={{
            //   width: "100%",
            //   display: "flex",
            //   alignItems: "baseline",
            //   fontSize: "30px",
            //   marginLeft: "40px",
            // }}
            className="trustpartcontainer_text"
          >
            Trusted Partners
          </h6>
          <div>
            <div>
              <div>
                <div>
                  {abc > 0 && (
                    <Carousel
                      swipeable={true}
                      draggable={true}
                      showDots={false}
                      arrows={false}
                      responsive={responsive}
                      ssr={true} // means to render carousel on server-side.
                      autoPlaySpeed={10}
                      keyBoardControl={true}
                      customTransition="all .05"
                      transitionDuration={50000}
                      containerClass="carousel-container"
                      removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
                      dotListClass="custom-dot-list-style"
                      itemClass="carousel-item-padding-40-px"
                    >
                      <div
                        className="image_holder"
                        // style={{ backgroundImage: `url(${image})` }}
                      >
                        <a href="https://www.moh.gov.sa/" target="_blank">
                          <img
                            src={image}
                            alt=""
                            style={{ height: "100px", width: "155px" }}
                          />
                        </a>
                      </div>

                      <div
                        className="image_holder"
                        style={{ backgroundImage: `url(${image1})` }}
                      >
                        <a
                          href="https://www.nationalgeographic.com/"
                          target="_blank"
                        >
                          <img
                            src={image1}
                            alt=""
                            style={{ height: "100px", width: "155px" }}
                          />
                        </a>
                      </div>

                      <div
                        className="image_holder"
                        style={{ backgroundImage: `url(${image2})` }}
                      >
                        <a href="https://zoom.us/" target="_blank">
                          <img
                            src={image2}
                            alt=""
                            style={{ height: "100px", width: "155px" }}
                          />
                        </a>
                      </div>

                      <div
                        className="image_holder"
                        style={{ backgroundImage: `url(${image3})` }}
                      >
                        <a
                          href="https://www.microsoft.com/en-in"
                          target="_blank"
                        >
                          <img
                            src={image3}
                            alt=""
                            style={{ height: "100px", width: "155px" }}
                          />
                        </a>
                      </div>

                      <div
                        className="image_holder"
                        style={{ backgroundImage: `url(${image4})` }}
                      >
                        <a href="https://www.google.com/" target="_blank">
                          <img
                            src={image4}
                            alt=""
                            style={{ height: "100px", width: "155px" }}
                          />
                        </a>
                      </div>

                      <div
                        className="image_holder"
                        style={{ backgroundImage: `url(${image5})` }}
                      >
                        <a href="https://yahoo.com/" target="_blank">
                          <img
                            src={image5}
                            alt=""
                            style={{ height: "100px", width: "155px" }}
                          />
                        </a>
                      </div>
                    </Carousel>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Trust;
