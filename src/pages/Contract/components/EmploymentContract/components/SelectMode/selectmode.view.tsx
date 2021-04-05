import React from "react";
import { useTranslation } from "react-i18next";

import AI_IMAGE from "../../../../../../assets/images/contract/ai.jpeg";
import EXPERT_IMAGE from "../../../../../../assets/images/contract/expert.jpeg";

interface SelectModeViewProps {
  currentStep: number;
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
}

const SelectModeView: React.FC<SelectModeViewProps> = ({
  currentStep,
  setCurrentStep,
}) => {
  const { t } = useTranslation("contract");

  return (
    <div className="row justify-content-center">
      <div className="card col-5 m-1">
        <img
          className="card-img mt-3"
          src={AI_IMAGE}
          style={{ height: "220px", width: "420px" }}
        />
        <div className="card-body">
          <h5 className="card-title">
            {t("categoryForm.selectMode.aiEngine.heading")}
          </h5>
          <p className="card-text">
            {t("categoryForm.selectMode.aiEngine.text")}
          </p>
          <div className="text-center">
            <button
              className="btn btn-custom"
              onClick={() => setCurrentStep(currentStep + 1)}
            >
              {t("categoryForm.selectMode.aiEngine.button")}
            </button>
          </div>
        </div>
      </div>
      <div className="card col-5 m-1">
        <img
          className="card-img mt-3"
          src={EXPERT_IMAGE}
          style={{ height: "220px", width: "420px" }}
        />

        <div className="card-body">
          <h5 className="card-title">
            {t("categoryForm.selectMode.muehiExpert.heading")}
          </h5>
          <p className="card-text">
            {t("categoryForm.selectMode.muehiExpert.text")}
          </p>
          <div className="text-center">
            <button
              className="btn btn-custom"
              onClick={() => setCurrentStep(12)}
            >
              {t("categoryForm.selectMode.muehiExpert.button")}
            </button>
          </div>
        </div>
      </div>
      <div
        className="col-12 row justify-content-around align-content-center"
        style={{ height: "4em" }}
      >
        <div style={{ width: "auto" }}>
          <button
            className="btn btn-custom"
            onClick={() => setCurrentStep(currentStep - 1)}
          >
            {t("categoryForm.text.previous")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SelectModeView;
