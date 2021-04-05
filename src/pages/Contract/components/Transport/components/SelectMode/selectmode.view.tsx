import React from "react";

import AI from "../../../../../../assets/images/contract/ai.jpeg";
import Expert from "../../../../../../assets/images/contract/expert.jpeg";

interface SelectModeViewProps {
  currentStep: number;
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
}

const SelectModeView: React.FC<SelectModeViewProps> = ({
  currentStep,
  setCurrentStep,
}) => {
  return (
    <div className="row justify-content-center">
      <div className="card col-5 m-1">
        <img
          className="card-img mt-3"
          src={AI}
          style={{ height: "220px", width: "420px" }}
        />
        <div className="card-body">
          <h5 className="card-title">Create contract using AI Engine</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <div className="text-center">
            <button
              className="btn btn-custom"
              onClick={() => setCurrentStep(currentStep + 1)}
            >
              By AI
            </button>
          </div>
        </div>
      </div>
      <div className={`card col-5 m-1`}>
        <img
          className="card-img mt-3"
          src={Expert}
          style={{ height: "220px", width: "420px" }}
        />

        <div className="card-body">
          <h5 className="card-title">Create contract by AI Muehi Experts</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <div className="text-center">
            <button
              className="btn btn-custom"
              onClick={() => setCurrentStep(13)}
            >
              By AI Muehi
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
            Previous
          </button>
        </div>
      </div>
    </div>
  );
};

export default SelectModeView;
