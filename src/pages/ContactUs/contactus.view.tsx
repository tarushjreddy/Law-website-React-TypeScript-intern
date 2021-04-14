import React from "react";
import { useTranslation } from "react-i18next";

import styles from "./contactus.module.scss";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";

import ContactUsBanner from "../../Zytcode Assets/PNG files/Contact-Us-Banner-min.png";
import OurServices from "../../Zytcode Assets/PNG files/ourservices.png";

import HeadOfficeIcon from "../../Zytcode Assets/Assets/COntact Us Page/Head office.png";
import ContactIcon from "../../Zytcode Assets/Assets/COntact Us Page/phone.png";
import BranchesIcon from "../../Zytcode Assets/Assets/COntact Us Page/Our Branches.png";
import EmailIcon from "../../Zytcode Assets/Assets/COntact Us Page/email.png";
import GoogleMap from "./components/GoogleMap";
import ContactUsCard from "./components/ContactUsCard";
import ContactForm from "./components/ContactForm";

const ContactUsView = () => {
  const { t } = useTranslation("contactus");
  const mapSrc =
    "https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0jeddah+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed";

  return (
    <div className={styles["contactUsContainer"]}>
      <div className="navbar">
        <Nav />
      </div>
      <div
        className={`${styles["clip-image-container"]} w-100 test-overlay`}
        style={{
          height: "55vh",
          backgroundImage: `url(${ContactUsBanner})`,
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
      <div className={styles["about-container"]} style={{ padding: "0 6vw" }}>
        <div className={styles["column"]}>
          <div className={styles["map"]} style={{ padding: "0 1vw" }}>
            <GoogleMap mapSrc={mapSrc} />
          </div>
          <div
            className={styles["contact-us-law"]}
            style={{ padding: "4vw 2vw" }}
          >
            <h3>CONTACT US</h3>
            <h2 style={{ fontSize: "5vh" }}>Law Office</h2>
            <div
              className={styles["about-container"]}
              style={{ justifyContent: "flex-start", marginTop: "10px" }}
            >
              <ContactUsCard
                cardIcon={HeadOfficeIcon}
                cardName={t("lawOfficeCard.headOffice")}
              />
              <ContactUsCard
                cardIcon={ContactIcon}
                cardName={t("lawOfficeCard.phone")}
              />
            </div>
            <div
              className={styles["about-container"]}
              style={{ justifyContent: "flex-start", marginTop: "4vh" }}
            >
              <ContactUsCard
                cardIcon={BranchesIcon}
                cardName={t("lawOfficeCard.ourBranches")}
              />
              <ContactUsCard
                cardIcon={EmailIcon}
                cardName={t("lawOfficeCard.email")}
              />
            </div>
          </div>
        </div>
        <div className="contact-us-form col-sm-6" style={{ padding: "0 5vw" }}>
          <ContactForm />
        </div>
      </div>
      <div style={{ padding: "0px 6vw", marginTop: "3em" }}>
        <div className="col-sm-6">
          <h1 style={{ fontSize: "2em" }}>{t("description.heading")}</h1>
          <p>{t("description.text")}</p>
        </div>
        <div className="col-sm-6" style={{ textAlign: "center" }}>
          <a href="/advice">
            <img
              className={styles["clip-image"]}
              src={OurServices}
              alt="OurServices"
              style={{ width: "80%", height: "auto" }}
            />
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactUsView;
