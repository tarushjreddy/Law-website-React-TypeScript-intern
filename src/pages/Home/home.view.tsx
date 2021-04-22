import React from "react";

import Header from "../../components/Header";
import AboutUs from "./components/AboutUs";
import Quality from "./components/Quality";
import Trust from "./components/Trust";
import AddonView from "./components/Additional";
import Modified from "./components/Modified";
import Retrival from "./components/Modified/DataRetreval";
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
      <div style={{ height: "100vh" }}>
        <Header />
      </div>
      <AboutUs />

      <div id="AboutUs"></div>
      <div className="quality-spacer" />
      <Quality />

      {/* loop array of json */}
      {/* if condition id if %2 == 0 */}

      <Retrival />

      {/* <Counter /> */}
      <Advertisement />
      <CallUs />

      <Portfolio />

      <AddonView />
      <Trust />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default HomeView;
