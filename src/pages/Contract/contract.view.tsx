import React from "react";
import { useTranslation } from "react-i18next";

import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import CustomCarousel from "../../components/CustomCarousel";

import EmploymentContract from "./components/EmploymentContract";
import Transport from "./components/Transport";
import LawyerFees from "./components/LawyerFees";
import Introduction from "./components/Introduction";
import SubIntroduction from "./components/SubIntroduction";

import { CategoriesType } from "./contract.model";
import HeaderWithImage from "../../components/HeaderWithImage";

import OurServices from "../../Zytcode Assets/PNG files/Our-Services-banner-min.png";

interface ContractViewProps {
  categories: CategoriesType[];
  selectedCategory: CategoriesType;
  setSelectedCategory: React.Dispatch<React.SetStateAction<CategoriesType>>;
}

const ContractView: React.FC<ContractViewProps> = ({
  categories,
  selectedCategory,
  setSelectedCategory,
}) => {
  const { t } = useTranslation("contract");
  return (
    <div>
      <div className="navbar">
        <Nav />
      </div>
      <HeaderWithImage image={OurServices} title={t("title")} />
      <div className="container d-flex flex-column">
        <div className="col-12">
          <Introduction />
        </div>
        <div className="col-12">
          <CustomCarousel
            categories={categories}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        </div>
        <hr className="col-12" />
        <div className="col-12">
          {selectedCategory === "" && <SubIntroduction />}
          {selectedCategory === "Employment Contract" && <EmploymentContract />}
          {selectedCategory === "Legal Agreement" && <LawyerFees />}
          {selectedCategory === "Transport Contract" && <Transport />}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContractView;
