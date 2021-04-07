import React from "react";
import { Link } from "react-router-dom";

import styles from "./leftside.module.scss";

import LoginForm from "./components/LoginForm";
import Footer from "./components/Footer";

const LeftSideView = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        margin: "20px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          width: "100%",
          height: "100vh",
        }}
      >
        <div style={{ height: "20px" }}></div>

        <Link to="/">
          <img
            style={{
              display: "flex",
              width: "100%",
              height: "auto",
            }}
            src="media/images/Logo.png"
            alt="logo"
          />
        </Link>
        <LoginForm />
        <Footer />
      </div>
    </div>
  );
};

export default LeftSideView;
