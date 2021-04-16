import React, { useEffect, useState } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./headerc.scss";
import { useGetDailyPrices } from "./hooks/use-queries";
import { getAllSliderDetails } from "../../services/apis";

const HeaderCarousel = () => {
  const [Image, setImage] = useState("");
  const [Image1, setImage1] = useState("");
  const [Image2, setImage2] = useState("");
  const [Image3, setImage3] = useState("");
  const [post, setPost] = useState([]);

  const [Headding, setHeadding] = useState("");
  const [subHeadding, setsubHeadding] = useState("");
  const [Headding1, setHeadding1] = useState("");
  const [subHeadding1, setsubHeadding1] = useState("");
  const [Headding2, setHeadding2] = useState("");

  const [subHeadding2, setsubHeadding2] = useState("");

  useEffect(() => {
    async function getData() {
      const data = await getAllSliderDetails();
      console.log(data.data[2]);

      console.log(data.data[0].heading);
      console.log(data.data[0].image);

      console.log(data.data[0].subheading);
      let abc = data.data[0].subheading;
      setsubHeadding(`${abc}`);
      let abc1 = data.data[0].heading;
      setHeadding(`${abc1}`);

      let abci = data.data[0].image;
      setImage3(`${abci}`);
      let abcii = data.data[1].image;
      setImage2(`${abcii}`);
      let abciii = data.data[2].image;
      setImage(`${abciii}`);

      console.log(data.data[1].heading);
      console.log(data.data[1].subheading);
      let abc2 = data.data[1].subheading;
      setsubHeadding1(`${abc2}`);
      let abc3 = data.data[1].heading;
      setHeadding1(`${abc3}`);
      console.log(data.data[2].heading);
      let harish = data.data[2].heading;
      setHeadding2(`${harish}`);
      console.log(Headding2);
      console.log(data.data[2].subheading);
      let abc4 = data.data[2].subheading;
      setsubHeadding2(`${abc4}`);
      let abc5 = data.data[0].image;

      console.log("harish");
      console.log(data.data[0].subheading);
      let abcc = data.data[0].subheading;
      setImage1(`${abcc}`);
      //  let abc = response.data[0].image;
      //  setImage(`${abc}`);
      //   let abc = response.data[0].image;
      //   setImage(`${abc}`);
    }
    window.dispatchEvent(new Event("resize"));

    getData();
  }, []);

  let lineStyle = {};
  let alignment = "ltr";
  let hbcImgClass = "";

  if (localStorage.getItem("lang") === "ar") {
    lineStyle = {};
    alignment = "rtl";
    hbcImgClass = "mx-auto";
  }

  return (
    <div className="my-header-section" dir="ltr" style={{ height: "100vh" }}>
      <div className="my-header-content">
        <OwlCarousel
          style={{ height: "100vh" }}
          className="owl-theme"
          loop
          items={1}
          dots={false}
          autoplay
          animateOut="fadeOut"
          margin={10}
        >
          <div className="item" style={{ height: "100vh" }}>
            <div
              className="header-carousel hc-1"
              style={{
                background: `url(${Image1})`,
                height: "100vh",
                width: "100%",
              }}
            >
              <div
                style={{
                  height: "30%",
                  width: "100%",
                  position: "relative",
                  top: "220px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                }}
              >
                <div className="top_view_text">
                  <div>
                    <div style={{ margin: "10px" }} />
                    <div style={{ margin: "10px" }} className="overall_text">
                      {Headding}
                      <p></p>
                    </div>
                  </div>

                  <div className="overall_text" style={{ margin: "10px" }}>
                    <h1>{subHeadding}</h1>
                  </div>

                  <div className="my-head-btn">
                    <div className="my-button">
                      <a href="/contact">Get In Touch</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="item" style={{ height: "100vh" }}>
            <div
              className="header-carousel hc-2"
              style={{
                height: "100vh",
                width: "100%",
                background: `url(${Image2})`,
              }}
            >
              <div
                style={{
                  height: "30%",
                  width: "100%",
                  position: "relative",
                  top: "220px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                }}
              >
                <div className="top_view_text">
                  <div>
                    <div style={{ margin: "10px" }} />
                    <div style={{ margin: "10px" }} className="overall_text">
                      {Headding1}
                      <p></p>
                    </div>
                  </div>

                  <div className="overall_text" style={{ margin: "10px" }}>
                    <h1>{subHeadding1}</h1>
                  </div>

                  <div className="my-head-btn">
                    <div className="my-button">
                      <a href="/contact">Get In Touch</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="item" style={{ height: "100vh" }}>
            <div
              className="header-carousel hc-3"
              style={{
                height: "100vh",
                width: "100%",
                background: `url(${Image1})`,
              }}
            >
              <div
                style={{
                  height: "30%",
                  width: "100%",
                  position: "relative",
                  top: "220px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                }}
              >
                <div className="top_view_text">
                  <div>
                    <div style={{ margin: "10px" }} />

                    <div style={{ margin: "10px" }} className="overall_text">
                      {Headding2}
                      <p></p>
                    </div>
                  </div>

                  <div className="overall_text" style={{ margin: "10px" }}>
                    <h1>{subHeadding2}</h1>
                  </div>

                  <div className="my-head-btn">
                    <div className="my-button">
                      <a href="/contact">Get In Touch</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </OwlCarousel>
      </div>

      <div>
        <div className="header-bottom-con">
          <div>
            <div>
              <div className="hbc-content-ele">
                <div className={`hbc-icon-img  ${Image} `}>
                  <img src="media/images/img1.png" alt="Header 1" />
                </div>
                <div className="chbc-icon-text ">
                  <h4>Get</h4>
                  <h2>Legal Advice</h2>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div>
              <div className="hbc-content-ele">
                <div className={`hbc-icon-img ${hbcImgClass}`}>
                  <img src="media/images/img2.png" alt="Header 2" />
                </div>
                <div className="chbc-icon-text float-start">
                  <h4>Get 30 Minutes</h4>
                  <h2>Free Consultation</h2>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div>
              <div className="hbc-content-ele">
                <div
                  className={`hbc-icon-img ${hbcImgClass} me-3 ms-5 float-start`}
                >
                  <img src="media/images/img3.png" alt="Header 3" />
                </div>
                <div className="chbc-icon-text float-start">
                  <h4>Instant</h4>
                  <h2>Contracts By Al</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderCarousel;
