import React from "react";
import { ContractCardDetailType } from "../../contracts.model";

interface ContractDetailViewProps {
  contract: ContractCardDetailType;
}

const ContractDetailView: React.FC<ContractDetailViewProps> = ({
  contract: { firstPartyDetail, secondPartyDetail },
}) => {
  return (
    <div className="row my-5">
      <div className="col-6">
        <h5>Details of the First Party</h5>
        <p>
          <b>Name :</b> {firstPartyDetail.name}
        </p>
        <p>
          <b>National ID :</b> {firstPartyDetail.nationalId}
        </p>
        <p>
          <b>Phone no. :</b> {firstPartyDetail.phoneNo}
        </p>
      </div>
      <div className="col-6  text-right">
        <h5>Details of the Second Party</h5>
        <p>
          <b>Name :</b> {secondPartyDetail.name}
        </p>
        <p>
          <b>National ID :</b> {secondPartyDetail.nationalId}
        </p>
        <p>
          <b>Phone no. :</b> {secondPartyDetail.phoneNo}
        </p>
      </div>
    </div>
  );
};

export default ContractDetailView;
