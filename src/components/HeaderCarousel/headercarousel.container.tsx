import React, { useEffect } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const HeaderCarousel = () => {
  useEffect(() => {
    window.dispatchEvent(new Event("resize"));
  }, []);

  let lineStyle = {};
  let alignment = "ltr";
  let hbcImgClass = "";

  if (localStorage.getItem("lang") === "ar") {
    lineStyle = {
      right: 0,
      marginRight: "-308px",
    };
    alignment = "rtl";
    hbcImgClass = "mx-auto";
  }

  return (
    <div className="my-header-section" dir="ltr">
      <div className="my-header-content">
        <OwlCarousel
          className="owl-theme"
          loop
          items={1}
          dots={false}
          autoplay
          animateOut="fadeOut"
          margin={10}
        >
          <div className="item">
            <div className="header-carousel hc-1">
              <div className="haader-car-content container" dir={alignment}>
                <div className="hcc-subcon">
                  <div className="hcc-subcon-line" style={lineStyle} />
                  <div className="hcc-subcon-text">
                    Leading Criminal Defense Lawyer Team
                  </div>
                </div>

                <div className="hcc-maincon">
                  <h1>
                    We Are The Voice <br /> Of Justice
                  </h1>
                </div>

                <div className="my-head-btn">
                  <div className="my-button">
                    <a href="/contact">Get In Touch</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="header-carousel hc-2">
              <div className="haader-car-content container" dir={alignment}>
                <div className="hcc-subcon">
                  <div className="hcc-subcon-line" style={lineStyle} />
                  <div className="hcc-subcon-text">
                    Professional Lawyer Team
                  </div>
                </div>

                <div className="hcc-maincon">
                  <h1>
                    We Appear <br /> Why You Can't
                  </h1>
                </div>

                <div className="my-head-btn">
                  <div className="my-button">
                    <a href="/contact">Get In Touch</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="header-carousel hc-3">
              <div className="haader-car-content container" dir={alignment}>
                <div className="hcc-subcon">
                  <div className="hcc-subcon-line" style={lineStyle} />
                  <div className="hcc-subcon-text">
                    International Leading Lawyer Team
                  </div>
                </div>

                <div className="hcc-maincon">
                  <h1>
                    You Deserve <br /> Free Trail
                  </h1>
                </div>

                <div className="my-head-btn">
                  <div className="my-button">
                    <a href="/contact">Get In Touch</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </OwlCarousel>
      </div>

      <div className="header-bottom-con" dir={alignment}>
        <div className="row">
          <div className="col-sm-4 col-xs-12 hbc-col hbc-col-l">
            <div className="hbc-content">
              <div className="hbc-content-ele">
                <div
                  className={`hbc-icon-img hbc-ico-1 ${hbcImgClass} me-3 ms-5 float-start`}
                >
                  <img src="media/images/img1.png" alt="Header 1" />
                </div>
                <div className="chbc-icon-text float-start">
                  <h4>Get</h4>
                  <h2>Legal Advice</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-4 col-xs-12 hbc-col">
            <div className="hbc-content">
              <div className="hbc-content-ele">
                <div
                  className={`hbc-icon-img ${hbcImgClass} me-3 ms-5 float-start`}
                >
                  <img src="media/images/img2.png" alt="Header 2" />
                </div>
                <div className="chbc-icon-text float-start">
                  <h4>Get 30 Minutes</h4>
                  <h2>Free Consultation</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-4 col-xs-12 hbc-col hbc-col-r">
            <div className="hbc-content">
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
