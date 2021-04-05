import React from "react";
import OwlCarousel from "react-owl-carousel";
import { Section } from "react-scroll-section";
import writter2 from "../../../../Zytcode Assets/media/images/writter-2.jpg";
//import writter1 from '../../../../Zytcode Assets/media/images/writter-1.jfif';
import writter3 from "../../../../Zytcode Assets/media/images/writter-3.jpg";

const Portfolio = () => {
  let lineStyle = {};
  let alignment = "ltr";
  let hbcImgClass = "";

  if (localStorage.getItem("lang") === "ar") {
    lineStyle = {
      marginLeft: "630px",
      height: "3px",
    };
    alignment = "rtl";
    hbcImgClass = "mx-auto";
  }
  return (
    <Section id="portfolio" className="my-portfolio">
      <div
        className="spacer-120"
        style={{ backgroundColor: "white", height: "90px" }}
      />
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <div className="my-portfolio-con" dir="ltr">
              <div className="psh-line" style={lineStyle} />
              {/*ml-500px*/}
              <OwlCarousel
                loop
                items={1}
                autoplay
                animateOut="fadeOut"
                margin={10}
              >
                <div dir={alignment}>
                  <div className="portfolio-slider">
                    <div className="portfolio-slider-head">
                      <h1>What People Say</h1>
                    </div>
                    <i className="fa fa-quote-left" />
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Tellus tellus risus augue ipsum tortor vitae velit justo.
                      Leo lacinia.
                    </p>
                    <div className="port-writter">
                      <img
                        className="float-start"
                        src={writter2}
                        alt="Tarik Hasan, UI/UX Designer"
                      />{" "}
                      <span className="pw-name float-start ps-3">
                        Tarik Hasan, UI/UX Designer
                      </span>
                    </div>
                  </div>
                </div>
                <div dir={alignment}>
                  <div className="portfolio-slider">
                    <div className="portfolio-slider-head">
                      <h1>Think This site</h1>
                    </div>
                    <i className="fa fa-quote-left" />
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Tellus tellus risus augue ipsum tortor vitae velit justo.
                      Leo lacinia.
                    </p>
                    <div className="port-writter">
                      <img
                        className="float-start"
                        src="../../../../Zytcode Assets/media/images/writter-1.jfif"
                        alt="Julia Samway, UI/UX Designer"
                      />{" "}
                      <span className="pw-name float-start ps-3">
                        Julia Samway, UI/UX Designer
                      </span>
                    </div>
                  </div>
                </div>
                <div dir={alignment}>
                  <div className="portfolio-slider">
                    <div className="portfolio-slider-head">
                      <h1>Best Law Firm</h1>
                    </div>
                    <i className="fa fa-quote-left" />
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Tellus tellus risus augue ipsum tortor vitae velit justo.
                      Leo lacinia.
                    </p>
                    <div className="port-writter">
                      <img
                        className="float-start"
                        src={writter3}
                        alt="Jon Deo, Department Head"
                      />{" "}
                      <span className="pw-name float-start ps-3">
                        Jon Deo, Department Head
                      </span>
                    </div>
                  </div>
                </div>
              </OwlCarousel>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Portfolio;
