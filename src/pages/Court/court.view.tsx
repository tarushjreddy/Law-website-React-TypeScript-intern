import React, { useState } from "react";
import { useTranslation } from "react-i18next";

import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import HeaderWithImage from "../../components/HeaderWithImage";
import CustomCarousel from "../../components/CustomCarousel";
import PleadingArgument from "./components/PleadingArgument";
import CaseAssigning from "./components/CaseAssigning";
import CaseStudy from "./components/CaseStudy";
import Mediation from "./components/Mediation";
import Other from "./components/Other";
import Memorandum from "./components/Memorandum";
import OurServicesImage from "../../assets/images/global/Our-Services-banner.png";

import { CourtCategoriesType } from "./court.model";

const CourtView = () => {
  const { t } = useTranslation("court");

  const CourtCategories: CourtCategoriesType[] = [
    "Pleading / Argument",
    "Memorandum",
    "Assigning a case",
    "Case Study",
    "Mediation",
    "Others",
  ];
  const [selectedCategory, setSelectedCategory] = useState<CourtCategoriesType>(
    ""
  );

  return (
    <div>
      <div className="navbar">
        <Nav />
      </div>
      <HeaderWithImage title={t("title")} image={OurServicesImage} />
      <div className="container d-flex flex-column">
        <div className="col-12">
          <CustomCarousel
            categories={CourtCategories}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        </div>
        <div className="col-12">
          {selectedCategory === "Pleading / Argument" && <PleadingArgument />}
          {selectedCategory === "Memorandum" && <Memorandum />}
          {selectedCategory === "Assigning a case" && <CaseAssigning />}
          {selectedCategory === "Case Study" && <CaseStudy />}
          {selectedCategory === "Mediation" && <Mediation />}
          {selectedCategory === "Others" && <Other />}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CourtView;
