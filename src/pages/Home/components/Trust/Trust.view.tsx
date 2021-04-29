import React, { useState } from "react";
import Carousel from "react-multi-carousel";

// or less ideally
import { Button } from "react-bootstrap";
import image from "./1.png";
import image1 from "./2.png";
import image2 from "./3.png";
import image3 from "./4.png";
import image4 from "./5.png";
import image5 from "./6.png";
import { makeStyles } from "@material-ui/core/styles";
import { yellow } from "@material-ui/core/colors";
import "./Trust.scss";
import "./Row.css";
function Row() {
  const [scrollval, setscrollval] = useState(0);

  const useStyles = makeStyles({
    switchBase: {
      color: yellow[300],
      "&$checked": {
        color: yellow[500],
      },
      "&$checked + $track": {
        backgroundColor: yellow[500],
      },
    },
    checked: {},
    track: {},
  });

  // let test = document.getElementById("row__posters") as HTMLInputElement;
  // const [state, setstate] = useState(initialState)
  // (document.getElementById(
  //   "left-button"
  // ) as HTMLInputElement).onclick = function () {
  //   scrollLeft(-300, 1000);
  // };

  // (document.getElementById(
  //   "right-button"
  // ) as HTMLInputElement).onclick = function () {
  //   scrollLeft(300, 1000);
  // };

  // function scrollLeft(change: number, duration: number) {
  //   var start = test.scrollLeft,
  //     currentTime = 0,
  //     increment = 20;

  //   console.log(start);

  //   var animateScroll = function () {
  //     currentTime += increment;
  //     var val = easeInOutQuad(currentTime, start, change, duration);
  //     test.scrollLeft = val;
  //     if (currentTime < duration) {
  //       setTimeout(animateScroll, increment);
  //     }
  //   };
  //   animateScroll();
  // }

  // t = current time
  // b = start value
  // c = change in value
  // d = duration
  // var easeInOutQuad = function (t: number, b: number, c: number, d: number) {
  //   t /= d / 2;
  //   if (t < 1) return (c / 2) * t * t + b;
  //   t--;
  //   return (-c / 2) * (t * (t - 2) - 1) + b;
  // };
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
            <Button
              className="this_btn"
              id="left-button"
              onClick={() => {
                setscrollval(-50);
              }}
            >
              &#60;
            </Button>
            <Button
              className="this_btn"
              id="right-button"
              onClick={() => {
                setscrollval(50);
              }}
            >
              &#62;
            </Button>
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
