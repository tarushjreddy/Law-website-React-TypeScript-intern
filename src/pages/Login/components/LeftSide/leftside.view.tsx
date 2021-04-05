import React from "react";
import { Link } from "react-router-dom";

import styles from "./leftside.module.scss";

import LoginForm from "./components/LoginForm";
import Footer from "./components/Footer";

const LeftSideView = () => {
  return (
    <div className="col-sm-12 col-md-6">
      <div className={`text-center ${styles["my-login-content"]}`}>
        <div style={{ height: "20px" }}></div>

        <Link to="/">
          <img
            style={{ margin: "20px 0" }}
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
