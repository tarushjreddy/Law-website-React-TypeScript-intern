import React from "react";
import { Link } from "react-router-dom";

import Footer from "./components/Footer";
import SignUpForm from "./components/SignUpForm";

const RightSideView = () => {
  return (
    <div className="col-sm-12 col-md-6">
      <div className="container text-center">
        <div style={{ height: "20px" }} />
        <Link to="/">
          <img
            style={{ margin: "20px 0" }}
            src="media/images/Logo.png"
            alt="logo"
          />
        </Link>
        <SignUpForm />
        <Footer />
      </div>
    </div>
  );
};

export default RightSideView;
