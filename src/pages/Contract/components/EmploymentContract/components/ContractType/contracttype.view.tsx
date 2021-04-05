import React from "react";

import NewImage from "../../../../../../assets/images/contract/new-cont.jpeg";
import ReviewImage from "../../../../../../assets/images/contract/review-cont.jpeg";

interface ContractTypeProps {
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
}

const ContractType: React.FC<ContractTypeProps> = ({ setCurrentStep }) => {
  return (
    <div className="row justify-content-center">
      <div className="card col-5 m-1">
        <img
          className="card-img mt-3"
          src={NewImage}
          style={{ height: "220px", width: "420px" }}
        />
        <div className="card-body">
          <h5 className="card-title">Create new contract</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <div className="text-center">
            <button
              className="btn btn-custom"
              onClick={() => setCurrentStep(2)}
            >
              New Contract
            </button>
          </div>
        </div>
      </div>
      <div className={`card col-5 m-1`}>
        <img
          className="card-img mt-3"
          src={ReviewImage}
          style={{ height: "220px", width: "420px" }}
        />

        <div className="card-body">
          <h5 className="card-title">Review contract by AI Muehi Experts</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <div className="text-center">
            <button
              className="btn btn-custom"
              onClick={() => setCurrentStep(11)}
            >
              Review Contract
            </button>
          </div>
        </div>
      </div>
      <div
        className="col-12 row justify-content-around align-content-center"
        style={{ height: "4em" }}
      >
        <div style={{ width: "auto" }}>
          <button className="btn btn-custom" onClick={() => setCurrentStep(1)}>
            Previous
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContractType;
