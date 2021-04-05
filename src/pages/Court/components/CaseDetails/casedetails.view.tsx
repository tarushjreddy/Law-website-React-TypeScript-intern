import React, { useState } from "react";
import { Form } from "react-bootstrap";

import CustomInputField from "../../../../components/CustomInputField";
import DeliverableCollab from "../../../../assets/images/contract/cat collab.png";
import { CaseDetailsInterface } from "../../court.model";

interface CaseDetailsProps {
  setFormDataInParent: (formType: string, formValues: any) => void;
  nextHandler: () => void;
  prevHandler: () => void;
  caseDetailsValues: CaseDetailsInterface;
}

const CaseDetails: React.FC<CaseDetailsProps> = ({
  setFormDataInParent,
  nextHandler,
  prevHandler,
  caseDetailsValues,
}) => {
  const [validated, setValidated] = useState(false);
  const [caseDetailsData, setCaseDetailsData] = useState<CaseDetailsInterface>({
    typeofCase: caseDetailsValues.typeofCase,
    fillingStatus: caseDetailsValues.fillingStatus,
    courtDetail: caseDetailsValues.courtDetail,
    defendentDetail: caseDetailsValues.defendentDetail,
  });
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    const form = event.currentTarget;
    event.preventDefault();
    event.stopPropagation();
    if (form.checkValidity() === true) {
      setFormDataInParent("caseDetails", caseDetailsData);
      nextHandler();
      console.log(caseDetailsData);
    }
    setValidated(true);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    let { name, value } = event.target;
    setCaseDetailsData({ ...caseDetailsData, [name]: value });
  };
  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <div className="row">
        <div className="col col-6">
          <h2 className="text-center">Case Details</h2>
          <CustomInputField
            label="Type of Case"
            placeholder="Type of Case"
            errMess="Enter Type of Case."
            id="typeofCase"
            name="typeofCase"
            type="text"
            value={caseDetailsData.typeofCase}
            onChange={handleChange}
          />
          <CustomInputField
            label="Filling Status"
            placeholder="Filling Status"
            errMess="Enter Filling Status."
            id="fillingStatus"
            name="fillingStatus"
            type="text"
            value={caseDetailsData.fillingStatus}
            onChange={handleChange}
          />

          <CustomInputField
            label="Court Details"
            placeholder="Court Details"
            errMess="Enter Court Details."
            id="courtDetail"
            name="courtDetail"
            type="text"
            value={caseDetailsData.courtDetail}
            onChange={handleChange}
          />

          <CustomInputField
            label="Defendent Detail"
            placeholder="Defendent Detail"
            errMess="Enter Defendent Detail."
            id="defendentDetail"
            name="defendentDetail"
            type="text"
            value={caseDetailsData.defendentDetail}
            onChange={handleChange}
          />
        </div>
        <div className="col col-6">
          <img src={DeliverableCollab} alt="Deliverable Collab" />
        </div>
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
          <button className="btn btn-custom" type="submit">
            Next
          </button>
        </div>
      </div>
    </Form>
  );
};

export default CaseDetails;
