import React, { useState } from "react";

import { Form } from "react-bootstrap";

import DeliverableCollab from "../../../../assets/images/contract/cat collab.png";
import { SSDetailsInterface } from "../../court.model";
interface ServiceTypeProps {
  nextHandler: () => void;
  prevHandler: React.MouseEventHandler<HTMLButtonElement>;
  sSDetailsValues: SSDetailsInterface;
  setFormDataInParent: (formType: string, formValues: any) => void;
}
const ServiceType: React.FC<ServiceTypeProps> = ({
  nextHandler,
  prevHandler,
  sSDetailsValues,
  setFormDataInParent,
}) => {
  const [validated, setValidated] = useState(false);
  const [serviceTypeData, setServiceTypeData] = useState<SSDetailsInterface>({
    serviceType: sSDetailsValues.serviceType,
  });
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    const form = event.currentTarget;
    event.preventDefault();
    event.stopPropagation();
    if (form.checkValidity() === true) {
      setFormDataInParent("sSDetails", serviceTypeData);
      nextHandler();
    }
    setValidated(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    let { name, value } = e.target;
    setServiceTypeData({ ...serviceTypeData, [name]: value });
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <div className="row">
        <div className="col col-6">
          <h2 className="text-center">Special Service</h2>
          <Form.Group
            style={
              localStorage.getItem("lang") === "ar"
                ? { marginBottom: "1rem", marginTop: "0.25rem" }
                : {}
            }
          >
            <Form.Label>Special Service Detail</Form.Label>
            <Form.Control
              as="textarea"
              id="serviceType"
              name="serviceType"
              style={{ resize: "none" }}
              placeholder="Service detail"
              required
              onChange={handleChange}
              value={serviceTypeData.serviceType}
              rows={3}
            />
            <Form.Control.Feedback type="invalid">
              Required
            </Form.Control.Feedback>
          </Form.Group>
        </div>
        <div className="col col-6 my-auto">
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

export default ServiceType;
