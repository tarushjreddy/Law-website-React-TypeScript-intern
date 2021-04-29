import React from "react";
import { Section } from "react-scroll-section";
import { useTranslation } from "react-i18next";

import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import OurServices from "../../Zytcode Assets/PNG files/Our-Services-banner-min.png";
import styles from "./ourservices.module.scss";
import CardSelector from "./components/CardSelector";

const OurServicesView: React.FC = () => {
  const { t } = useTranslation("ourservices");
  return (
    <div>
      <Nav />

      <Section id="services">
        <div
          className={`${styles["clip-image-container"]} w-100`}
          style={{
            height: "55vh",
            backgroundImage: `url(${OurServices})`,
            backgroundSize: "cover",
          }}
        >
          <div
            className={styles["clip-image-content2"]}
            style={
              localStorage.getItem("lang") === "ar" ? { right: 0 } : { left: 0 }
            }
          >
            <div
              className="sub-heading d-flex align-items-center"
              style={{ fontSize: "40px", color: "white", marginLeft: "0px" }}
            >
              <span className={styles["line"]}></span>
              <span>
                <b>&nbsp;&nbsp;{t("title")}</b>
              </span>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <CardSelector />
        </div>
      </Section>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default OurServicesView;
