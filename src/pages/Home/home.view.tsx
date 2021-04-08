import React from "react";

import Header from "../../components/Header";
import AboutUs from "./components/AboutUs";
import Quality from "./components/Quality";
import Trust from "./components/Trust";
import Advertisement from "./components/Advertisement";
import Services from "./components/Services";
import Counter from "./components/Counter";
import CallUs from "./components/CallUs";
import Portfolio from "./components/Portfolio";
import ContactUs from "./components/ContactUs";
import Footer from "../../components/Footer";

const HomeView = () => {
  return (
    <div>
      <Header />
      <div id="AboutUs">
        <AboutUs />
      </div>
      <div className="quality-spacer" />
      <Quality />
      <Services />

      <Counter />

      <Advertisement />
      <CallUs />
      <Portfolio />
      <Trust />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default HomeView;
