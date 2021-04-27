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
      console.log("this is the15", data.data);
      setposts(data.data);
    }
    window.dispatchEvent(new Event("resize"));

    getData();
  }, []);
  console.log("22", posts);
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
      {posts.length > 0 && (
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
            {posts.map((data, i) => (
              <div className="item" style={{ height: "100vh" }}>
                <div
                  className={`header-carousel `}
                  style={{
                    height: "100vh",
                    width: "100%",

                    backgroundImage: `url(${data.image})`,
                  }}
                >
                  <div className="formatter">
                    <div className="top_view_text">
                      <div>
                        <div />
                        <div className="overall_text">
                          {data.heading}
                          <p></p>
                        </div>
                      </div>

                      <div className="overall_text">
                        <h1>{data.subheading}</h1>
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
            ))}
          </OwlCarousel>
        </div>
      )}

      <div>
        <div className="header-bottom-con">
          <div>
            <div className="col-sm-4 col-xs-12 hbc-col hbc-col-l">
              <div className="hbc-content">
                <div className="hbc-content-ele">
                  <div
                    className="hbc-icon-img hbc-ico-1"
                    style={{ marginBottom: "10px" }}
                  >
                    <img src="media/images/img2.png" alt="Header 2" />
                  </div>
                  <div className="chbc-icon-text">
                    <h4>Get</h4>
                    <h2>Free Consultation</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div>
              <div>
                <div className="col-sm-4 col-xs-12 hbc-col hbc-col-l">
                  <div className="hbc-content">
                    <div className="hbc-content-ele">
                      <div className="hbc-icon-img hbc-ico-1">
                        <img src="media/images/img1.png" alt="Header 1" />
                      </div>
                      <div className="chbc-icon-text">
                        <h4>Get</h4>
                        <h2>Legal Advice</h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div>
              <div
                className="col-sm-4 col-xs-12 hbc-col hbc-col-l"
                style={{ border: "none" }}
              >
                <div className="hbc-content">
                  <div className="hbc-content-ele">
                    <div className="hbc-icon-img hbc-ico-1">
                      <img src="media/images/img3.png" alt="Header 3" />{" "}
                    </div>
                    <div className="chbc-icon-text">
                      <h4>Instant</h4>
                      <h2>Contracts By Al</h2>
                    </div>
                  </div>
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
