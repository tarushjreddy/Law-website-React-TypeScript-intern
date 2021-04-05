import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { ContractCardDetailType } from "../../contracts.model";

import ContractDetail from "../ContractDetail";
import styles from "./contractcard.module.scss";

interface ContractCardViewProps {
  contract: ContractCardDetailType;
}

const ContractCardView: React.FC<ContractCardViewProps> = ({ contract }) => {
  const [showDetail, setShowDetail] = useState(false);
  return (
    <div
      className={`row py-3 mt-4 ${styles["contractCardContainer"]}`}
      style={{
        border: "2px solid #b8a046",
        borderRadius: "10px",
        backgroundColor: "#f7f7f7",
      }}
    >
      <div className="col-6">
        <p>
          <b>Date :</b> {contract.date}
        </p>
        <p>
          <b>Contract type :</b> {contract.type}
        </p>
      </div>
      <div className="col-6 text-right">
        <p>
          {contract.type} {">"} {contract.category}
        </p>
        <p>
          <b>Type :</b> {contract.type}
        </p>
        {!!contract.fileStatus && (
          <p>
            <b>File Status :</b> {contract.fileStatus}
          </p>
        )}
      </div>
      {showDetail && (
        <div className="col-12">
          <hr />
          <ContractDetail contract={contract} />
        </div>
      )}
      <div className="col-12 row justify-content-center">
        <Button
          variant="outline-custom"
          className="col-2 btn-sm"
          onClick={() => setShowDetail(!showDetail)}
        >
          {showDetail ? "View Less" : "View More"}
        </Button>
      </div>
    </div>
  );
};

export default ContractCardView;
