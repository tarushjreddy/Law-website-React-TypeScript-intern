import React, { useState } from "react";

import { Form } from "react-bootstrap";

import CardView from "../CardView";
import FirstPartyImage from "../../../../assets/images/contract/cat 1.png";
import OnlineImage from "../../../../assets/images/global/online.jpg";
import OfflineImage from "../../../../assets/images/global/offline.jpg";
import { ConsultionTypeInterface } from "../../court.model";

interface ConsultionTypeProps {
  setFormDataInParent: (formType: string, formValues: any) => void;
  nextHandler: () => void;
  prevHandler: () => void;
  consultionTypeValues: ConsultionTypeInterface;
}

const ConsultionType: React.FC<ConsultionTypeProps> = ({
  setFormDataInParent,
  nextHandler,
  prevHandler,
  consultionTypeValues,
}) => {
  const [consultionTypeData, setConsultionTypeData] = useState<
    ConsultionTypeInterface
  >({
    type: consultionTypeValues.type,
  });

  const handleSubmit = () => {
    if (consultionTypeData.type !== "") {
      setFormDataInParent("consultionType", consultionTypeData);
      nextHandler();
      console.log(consultionTypeData);
    }
  };

  const handleChange = (id: number): void => {
    if (id === 1) {
      setConsultionTypeData({ type: "Online" });
    } else if (id === 2) {
      setConsultionTypeData({ type: "Offline" });
    }
  };

  return (
    <div className="container">
      <h2 className="text-center">Consultation Type</h2>

      <div className="col-12 row justify-content-around align-content-center text-center">
        <CardView
          title="Online"
          id={1}
          isSelected={consultionTypeData.type === "Online"}
          setSelected={handleChange}
          imgLink={OnlineImage}
        />
        <CardView
          title="Offline"
          id={2}
          isSelected={consultionTypeData.type === "Offline"}
          setSelected={handleChange}
          imgLink={OfflineImage}
        />
      </div>
      <div
        className="col-12 row justify-content-around align-content-center"
        style={{ height: "4em" }}
      >
        <div style={{ width: "auto" }}>
          <button className="btn btn-custom" onClick={prevHandler}>
            Previous
          </button>
        </div>
        <div style={{ width: "auto" }}>
          <button className="btn btn-custom" onClick={handleSubmit}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConsultionType;
