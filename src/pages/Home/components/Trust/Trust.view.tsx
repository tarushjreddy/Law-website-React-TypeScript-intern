import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// or less ideally
import { Button } from "react-bootstrap";
import image from "./1.png";
import image1 from "./2.png";
import image2 from "./3.png";
import image3 from "./4.png";
import image4 from "./5.png";
import image5 from "./6.png";

import "./Trust.scss";
import "./Row.css";
function Row() {
  // const scroll = (scrollOffset) => {
  //   ref.current.scrollLeft += scrollOffset;
  // };
  return (
    <div className="App_pro">
      {/* <p>this iis an example</p> */}
      <div
        style={{
          width: "100%",

          display: "flex",
          justifyContent: "center",
        }}
      >
        <div>
          <h3 style={{ textAlign: "center" }}>Trusted Partners</h3>
          <div
            className="buttons_tust"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Button className="this_btn">&#60;</Button>
            <Button className="this_btn">&#62;</Button>
          </div>
        </div>
      </div>

      <div className={`row__posters`}>
        <a href="https://www.moh.gov.sa/" target="_blank">
          <img src={image} alt={"alt"} className="row__poster"></img>
        </a>
        <a href="https://www.nationalgeographic.com/" target="_blank">
          <img src={image1} alt={"alt"} className="row__poster"></img>
        </a>
        <a href="https://zoom.us/" target="_blank">
          <img src={image2} alt={"alt"} className="row__poster"></img>
        </a>
        <a href="https://www.microsoft.com/en-in" target="_blank">
          <img src={image3} alt={"alt"} className="row__poster"></img>
        </a>
        <a href="https://www.google.com/" target="_blank">
          <img src={image4} alt={"alt"} className="row__poster"></img>
        </a>
        <a href="https://yahoo.com/" target="_blank">
          <img src={image5} alt={"alt"} className="row__poster"></img>
        </a>

        {/* this is the part where add on is done */}
        <a href="https://www.moh.gov.sa/" target="_blank">
          <img src={image} alt={"alt"} className="row__poster"></img>
        </a>
        <a href="https://www.nationalgeographic.com/" target="_blank">
          <img src={image1} alt={"alt"} className="row__poster"></img>
        </a>
        <a href="https://zoom.us/" target="_blank">
          <img src={image2} alt={"alt"} className="row__poster"></img>
        </a>
        <a href="https://www.microsoft.com/en-in" target="_blank">
          <img src={image3} alt={"alt"} className="row__poster"></img>
        </a>
        <a href="https://www.google.com/" target="_blank">
          <img src={image4} alt={"alt"} className="row__poster"></img>
        </a>
        <a href="https://yahoo.com/" target="_blank">
          <img src={image5} alt={"alt"} className="row__poster"></img>
        </a>
      </div>
    </div>
  );
}
export default Row;
