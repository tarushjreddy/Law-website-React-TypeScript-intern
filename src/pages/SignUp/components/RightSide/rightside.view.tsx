import React from "react";
import { Link } from "react-router-dom";

import Footer from "./components/Footer";
import SignUpForm from "./components/SignUpForm";

const RightSideView = () => {
  return (
    <div>
      <div>
        <div />
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
        <SignUpForm />
        <Footer />
      </div>
    </div>
  );
};

export default RightSideView;
