import React, { useState } from "react";
import { Form } from "react-bootstrap";

import BothDatePicker from "../../../../../../components/BothDatePicker";
import { contractDurationInterface } from "../../employmentcontract.model";

import DeliverableCollabImage from "../../../../../../assets/images/contract/cat collab.png";

interface ContractDurationViewProps {
  prevHandler: () => void;
  nextHandler: () => void;
  defaultFormValues: contractDurationInterface;
  setFormDataInParent: (
    formType: string,
    formValues: contractDurationInterface
  ) => void;
}

const ContractDurationView: React.FC<ContractDurationViewProps> = ({
  nextHandler,
  prevHandler,
  setFormDataInParent,
  defaultFormValues,
}) => {
  const [validated, setValidated] = useState(false);
  const [formValues, setFormValues] = useState<contractDurationInterface>({
    ...defaultFormValues,
  });

  const handleChangeDurationType = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { value } = event.target;
    if (value === "Limited" || value === "Unlimited") {
      setFormValues({
        ...formValues,
        duration: value,
      });
    }
  };

  const durationStartDateHandleChange = (date: Date | null | string) => {
    setFormValues({
      ...formValues,
      start: date?.toString() || "",
    });
  };

  const durationEndDateHandleChange = (date: Date | null | string) => {
    setFormValues({
      ...formValues,
      end: date?.toString() || "",
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    const form = event.currentTarget;
    event.preventDefault();
    event.stopPropagation();
    if (form.checkValidity() === true) {
      setFormDataInParent("contractDuration", formValues);
      nextHandler();
    }
    setValidated(true);
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <div className="row">
        <div className="col col-6">
          <h2 className="text-center">Contract Duration</h2>

          <Form.Group
            controlId="duration"
            style={
              localStorage.getItem("lang") === "ar"
                ? { marginBottom: "1rem", marginTop: "0.25rem" }
                : {}
            }
          >
            <Form.Label>Contract Duration</Form.Label>
            <Form.Control
              className="form-select"
              as="select"
              custom
              onChange={handleChangeDurationType}
              value={formValues.duration}
            >
              <option value="Limited">Limited</option>
              <option value="Unlimited">Unlimited(Permanent)</option>
            </Form.Control>
          </Form.Group>

          {formValues.duration === "Limited" && (
            <>
              <Form.Label>
                <b>Start Date</b>
              </Form.Label>
              <BothDatePicker
                handleDateChange={durationStartDateHandleChange}
                consultationDate={formValues.start}
              />
              <Form.Label>
                <b>End Date</b>
              </Form.Label>
              <BothDatePicker
                handleDateChange={durationEndDateHandleChange}
                consultationDate={formValues.end}
              />
            </>
          )}
        </div>
        <div className="col col-6 my-auto">
          <img src={DeliverableCollabImage} alt="Deliverable Collab" />
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

export default ContractDurationView;
