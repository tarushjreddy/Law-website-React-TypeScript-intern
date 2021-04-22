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
    items: 6,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};
function Trust() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div className="trustpartcontainer">
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
                <Carousel
                  swipeable={false}
                  draggable={false}
                  showDots={false}
                  responsive={responsive}
                  ssr={true} // means to render carousel on server-side.
                  infinite={true}
                  autoPlaySpeed={1000}
                  keyBoardControl={true}
                  customTransition="all .05"
                  transitionDuration={50000}
                  containerClass="carousel-container"
                  removeArrowOnDeviceType={["tablet", "mobile"]}
                  dotListClass="custom-dot-list-style"
                  itemClass="carousel-item-padding-40-px"
                >
                  <div
                    className="image_holder"
                    style={{ backgroundImage: `url(${image})` }}
                  ></div>
                  <div
                    className="image_holder"
                    style={{ backgroundImage: `url(${image1})` }}
                  ></div>
                  <div
                    className="image_holder"
                    style={{ backgroundImage: `url(${image2})` }}
                  ></div>
                  <div
                    className="image_holder"
                    style={{ backgroundImage: `url(${image3})` }}
                  ></div>
                  <div
                    className="image_holder"
                    style={{ backgroundImage: `url(${image4})` }}
                  ></div>
                  <div
                    className="image_holder"
                    style={{ backgroundImage: `url(${image5})` }}
                  ></div>
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Trust;
