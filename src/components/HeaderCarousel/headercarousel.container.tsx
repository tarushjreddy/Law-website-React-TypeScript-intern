import React, { useEffect } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./headerc.scss";

const HeaderCarousel = () => {
  useEffect(() => {
    window.dispatchEvent(new Event("resize"));
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
              style={{ height: "100vh", width: "100%" }}
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
                      Leading Criminal Defense Lawyer Team
                    </div>
                  </div>

                  <div className="overall_text" style={{ margin: "10px" }}>
                    <h1>We Are The Voice Of Justice</h1>
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
          {/* <div className="item">
            <div className="header-carousel hc-2" style={{ height: "100vh" }}>
              <div
                style={{
                  height: "30%",
                  width: "50%",
                  position: "relative",
                  top: "220px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                }}
              >
                <div>
                  <div style={{ margin: "10px" }} />
                  <div className="hcc-subcon-text" style={{ margin: "10px" }}>
                    Professional Lawyer Team
                  </div>
                </div>

                <div className="hcc-maincon" style={{ margin: "10px" }}>
                  <h1>We Appear Why You Can't</h1>
                </div>

                <div className="my-head-btn" style={{ margin: "10px" }}>
                  <div className="my-button" style={{ margin: "10px" }}>
                    <a href="/contact">Get In Touch</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="header-carousel hc-3" style={{ height: "100vh" }}>
              <div
                style={{
                  height: "30%",
                  width: "50%",
                  position: "relative",
                  top: "220px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                }}
              >
                <div>
                  <div style={{ margin: "10px" }} />
                  <div className="hcc-subcon-text" style={{ margin: "10px" }}>
                    International Leading Lawyer Team
                  </div>
                </div>

                <div className="hcc-maincon" style={{ margin: "10px" }}>
                  <h1>We Are The Voice Of Justice</h1>
                </div>

                <div className="my-head-btn" style={{ margin: "10px" }}>
                  <div className="my-button" style={{ margin: "10px" }}>
                    <a href="/contact">Get In Touch</a>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </OwlCarousel>
      </div>

      <div>
        <div className="header-bottom-con">
          <div>
            <div>
              <div className="hbc-content-ele">
                <div className={`hbc-icon-img  ${hbcImgClass} `}>
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
