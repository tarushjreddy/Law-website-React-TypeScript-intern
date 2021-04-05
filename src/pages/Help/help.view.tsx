import React from "react";
import { useTranslation } from "react-i18next";

import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import AboutUsBanner from "../../Zytcode Assets/PNG files/colton-jones-W-25hHS6cp4-unsplash.jpg";
import YouTubeVideo from "./components/YouTubeVideo";
import ServiceListItemGold from "./components/ServiceListItemGold";
import styles from "./help.module.scss";
import { SERVICES_LIST } from "../../constants";

const HelpView: React.FC = () => {
  const { t } = useTranslation("help");
  const videoSrc = "https://www.youtube.com/embed/qP4v-GrMBzY";

  return (
    <div>
      <div className="navbar">
        <Nav />
      </div>
      <div
        className="main"
        style={{
          backgroundImage: `url(${AboutUsBanner})`,
          minHeight: "100px",
          minWidth: "100%",
          backgroundSize: "cover",
        }}
      >
        <div
          className={`container ${styles["heading"]}`}
          style={{ paddingTop: "5em" }}
        >
          <div style={{ fontSize: "40px", color: "white" }}>
            <p style={{ fontSize: "xxx-large", fontWeight: "600" as "bold" }}>
              {t("title")}
            </p>
          </div>
          <div>
            <p style={{ fontSize: "25px", color: "white", marginTop: "-10px" }}>
              {t("text")}
            </p>
          </div>
        </div>

        <div className="container">
          <h1
            style={{
              fontSize: "1em",
              color: "white",
              paddingTop: "2em",
              margin: "0.67em 0",
            }}
          >
            {t("servicesHeading")}
          </h1>
          <div
            className="row container"
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "0px",
            }}
          >
            <div
              className="col-md-6 col-sm-12"
              style={{ marginLeft: "-1em", paddingBottom: "2em" }}
            >
              <div
                className="card-shadow"
                style={{ boxShadow: "none", marginTop: "-1em" }}
              >
                {SERVICES_LIST.map(({ name }) => (
                  <ServiceListItemGold serviceName={name} />
                ))}
              </div>
            </div>

            <div className="col-md-6 col-sm-12" style={{ textAlign: "center" }}>
              <YouTubeVideo videoSrc={videoSrc} />
            </div>
          </div>
        </div>

        <div
          className="container d-flex justify-content-center"
          style={{
            marginTop: "15vh",
            backgroundColor: "white",
            width: "35%",
            borderRadius: "4px",
          }}
        >
          <div className="flex-column align-items-center">
            <h1 style={{ fontSize: "2em", margin: "0.67em 0" }}>
              {t("centerCard.heading")}
            </h1>
            <div
              className={`flex-column align-items-center ${styles["login-btn"]}`}
              style={{ marginBottom: "18px" }}
            >
              <button
                style={{
                  width: "80%",
                  marginBottom: "10px",
                  marginLeft: "1.5em",
                  color: "white",
                }}
              >
                {t("centerCard.button")}
              </button>
            </div>
          </div>
        </div>

        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default HelpView;
