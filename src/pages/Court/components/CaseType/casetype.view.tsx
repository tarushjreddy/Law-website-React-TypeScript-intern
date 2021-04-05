import React, { useState } from "react";

import { Form } from "react-bootstrap";
import FirstPartyImage from "../../../../assets/images/contract/cat 1.png";
import { CaseTypeInterface } from "../../court.model";

interface CaseTypeProps {
  setFormDataInParent: (formType: string, formValues: any) => void;
  nextHandler: () => void;
  caseType: CaseTypeInterface;
}

const CaseType: React.FC<CaseTypeProps> = ({
  setFormDataInParent,
  nextHandler,
  caseType,
}) => {
  const [validated, setValidated] = useState(false);
  const [caseTypeData, setCaseTypeData] = useState<CaseTypeInterface>({
    caseTypeName: caseType.caseTypeName,
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    const form = event.currentTarget;
    event.preventDefault();
    event.stopPropagation();
    if (form.checkValidity() === true) {
      setFormDataInParent("caseType", caseTypeData);
      nextHandler();
      console.log(caseTypeData);
    }
    setValidated(true);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    let { name, value } = event.target;
    setCaseTypeData({ ...caseTypeData, [name]: value });
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <div className="row">
        <div className="col col-6">
          <h2 className="text-center">Case Type</h2>

          <Form.Group controlId="method">
            <Form.Label style={{ fontSize: "15px" }}>Type of Case</Form.Label>
            <Form.Control
              className="form-select"
              as="select"
              custom
              value={caseTypeData.caseTypeName}
              name="caseTypeName"
              onChange={handleChange}
            >
              <option>Criminal</option>
              <option>Civil</option>
              <option>Family</option>
              <option>Administrative</option>
              <option>Others</option>
            </Form.Control>
          </Form.Group>
        </div>
        <div className="col col-6 my-auto">
          <img src={FirstPartyImage} alt="First Party" className="mt-5" />
        </div>
      </div>
      <div
        className="col-12 row justify-content-around align-content-center"
        style={{ height: "4em" }}
      >
        <div style={{ width: "auto" }}>
          <button className="btn btn-custom" type="submit">
            Next
          </button>
        </div>
      </div>
    </Form>
  );
};

export default CaseType;
