import React, { useState } from "react";
import { Form } from "react-bootstrap";

import CustomInputField from "../../../../components/CustomInputField";
import DeliverableCollab from "../../../../assets/images/contract/cat collab.png";
import { InformationInterface } from "../../court.model";

interface InformationProps {
  setFormDataInParent: (formType: string, formValues: any) => void;
  nextHandler: () => void;
  prevHandler: () => void;
  informationValues: InformationInterface;
}

const Information: React.FC<InformationProps> = ({
  setFormDataInParent,
  nextHandler,
  prevHandler,
  informationValues,
}) => {
  const [validated, setValidated] = useState(false);
  const [informationData, setInformationData] = useState<InformationInterface>({
    name: informationValues.name,
    ID: informationValues.ID,
    address: informationValues.address,
    mobile: informationValues.mobile,
  });
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    const form = event.currentTarget;
    event.preventDefault();
    event.stopPropagation();
    if (form.checkValidity() === true) {
      setFormDataInParent("information", informationData);
      nextHandler();
      console.log(informationData);
    }
    setValidated(true);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    let { name, value } = event.target;
    setInformationData({ ...informationData, [name]: value });
  };
  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <div className="row">
        <div className="col col-6">
          <h2 className="text-center">Basic Information</h2>
          <CustomInputField
            label="Full Name"
            placeholder="Full Name"
            errMess="Enter Full Name."
            id="name"
            name="name"
            type="text"
            value={informationData.name}
            onChange={handleChange}
          />
          <CustomInputField
            label="ID"
            placeholder="ID"
            errMess="Enter ID."
            id="ID"
            name="ID"
            type="text"
            value={informationData.ID}
            onChange={handleChange}
          />

          <Form.Group
            style={
              localStorage.getItem("lang") === "ar"
                ? { marginBottom: "1rem", marginTop: "0.25rem" }
                : {}
            }
          >
            <Form.Label
              className={localStorage.getItem("lang") === "ar" ? "mb-1" : ""}
            >
              Address
            </Form.Label>
            <Form.Control
              as="textarea"
              id="address"
              name="address"
              style={{ resize: "none" }}
              placeholder="Address"
              required
              onChange={handleChange}
              value={informationData.address}
              rows={3}
            />
            <Form.Control.Feedback type="invalid">
              Enter Address.
            </Form.Control.Feedback>
          </Form.Group>
          <CustomInputField
            label="Mobile No"
            placeholder="Mobile No"
            errMess="Enter Mobile No."
            id="mobile"
            name="mobile"
            type="number"
            value={informationData.mobile}
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

export default Information;
