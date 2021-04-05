import React from "react";

import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import Forms from "./components/Forms";
import Header from "./components/Header";
import HighLight from "./components/HighLight";

const AttorneyAdviceView = () => {
  return (
    <div>
      <div className="navbar">
        <Nav />
      </div>
      <Header />
      <div className="container mt-4">
        <HighLight />
        <Forms />
      </div>
      <Footer />
    </div>
  );
};

export default AttorneyAdviceView;
