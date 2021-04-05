import React, { useState } from "react";
import { Form } from "react-bootstrap";

import DeliverableCollab from "../../../../../../assets/images/contract/cat collab.png";
import { ServiceTypeInterface } from "../../lawyerfees.model";
interface ServiceTypeProps {
  nextHandler: () => void;
  prevHandler: React.MouseEventHandler<HTMLButtonElement>;
  formValues: ServiceTypeInterface;
  setServiceDetailInParent: (
    formType: string,
    formValues: ServiceTypeInterface
  ) => void;
}
const ServiceType: React.FC<ServiceTypeProps> = ({
  nextHandler,
  prevHandler,
  formValues,
  setServiceDetailInParent,
}) => {
  const [validated, setValidated] = useState(false);
  const [serviceTypeData, setServiceTypeData] = useState<ServiceTypeInterface>({
    serviceType: formValues.serviceType,
  });
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    const form = event.currentTarget;
    event.preventDefault();
    event.stopPropagation();
    if (form.checkValidity() === true) {
      setServiceDetailInParent("serviceDetail", serviceTypeData);
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
          <h2 className="text-center">Service Type</h2>
          <Form.Group>
            <label>
              Enter the details on the service to be provided by the lawyer
            </label>
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
