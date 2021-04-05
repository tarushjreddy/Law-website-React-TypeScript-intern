import React from "react";

import New from "../../../../../../assets/images/contract/new-cont.jpeg";
import Review from "../../../../../../assets/images/contract/review-cont.jpeg";

interface ContractTypeProps {
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
  prevStep: number;
}

const ContractType: React.FC<ContractTypeProps> = ({
  setCurrentStep,
  prevStep,
}) => {
  return (
    <>
      <div className="row justify-content-center">
        <div className="card col-5 m-1">
          <img
            className="card-img mt-3"
            src={New}
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
                onClick={() => setCurrentStep(4)}
              >
                New Contract
              </button>
            </div>
          </div>
        </div>
        <div className={`card col-5 m-1`}>
          <img
            className="card-img mt-3"
            src={Review}
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
                onClick={() => setCurrentStep(12)}
              >
                Review Contract
              </button>
            </div>
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
            onClick={() => setCurrentStep(prevStep)}
          >
            Previous
          </button>
        </div>
      </div>
    </>
  );
};

export default ContractType;
