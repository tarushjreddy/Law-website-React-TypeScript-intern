import React, { useEffect, useState } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./headerc.scss";
import { useGetDailyPrices } from "./hooks/use-queries";
import { getAllSliderDetails } from "../../services/apis";

const HeaderCarousel = () => {
  const [posts, setposts] = useState<any[]>([]);

  useEffect(() => {
    async function getData() {
      const data = await getAllSliderDetails();
      console.log(data.data);
      setposts(data.data);
    }
    window.dispatchEvent(new Event("resize"));

    getData();
  }, []);
  console.log(posts);
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
          {/* <div className="item" style={{ height: "100vh" }}>
            <div
              className="header-carousel hc-1"
              style={{
                background: `red`,
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
                  margin: "6.66rem",
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

                  <div className="my-head-btn" style={{ margin: "10px" }}>
                    <div className="my-button">
                      <a href="/contact">Get In Touch</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          {posts.map((data, i) => (
            <div className="item" style={{ height: "100vh" }}>
              <div
                className={`header-carousel hc-${i + 1}`}
                style={{
                  height: "100vh",
                  width: "100%",
                  backgroundColor: "red",

                  // backgroundImage: `url(${data.image})`,
                }}
              >
                <div
                  style={{
                    height: "30%",
                    width: "100%",
                    position: "relative",
                    top: "220px",
                    margin: "6.66rem",
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
                        {data.heading}
                        <p></p>
                      </div>
                    </div>

                    <div className="overall_text" style={{ margin: "10px" }}>
                      <h1>{data.subheading}</h1>
                    </div>

                    <div className="my-head-btn" style={{ margin: "10px" }}>
                      <div className="my-button">
                        <a href="/contact">Get In Touch</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          {/* <div className="item" style={{ height: "100vh" }}>
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
                background: `url(${Image3})`,
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
          </div> */}
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
