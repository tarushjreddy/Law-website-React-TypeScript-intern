import React, { useState } from "react";
import { Form } from "react-bootstrap";

import CustomInputField from "../../../../../../components/CustomInputField";
import { noticePeriodInterface } from "../../employmentcontract.model";

import DeliverableCollabImage from "../../../../../../assets/images/contract/cat collab.png";

interface NoticePeriodProps {
  prevHandler: () => void;
  nextHandler: () => void;
  defaultFormValues: noticePeriodInterface;
  setFormDataInParent: (
    formType: string,
    formValues: noticePeriodInterface
  ) => void;
}

const NoticePeriodView: React.FC<NoticePeriodProps> = ({
  nextHandler,
  prevHandler,
  setFormDataInParent,
  defaultFormValues,
}) => {
  const [validated, setValidated] = useState(false);
  const [formValues, setFormValues] = useState<noticePeriodInterface>({
    ...defaultFormValues,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target;
    let newValue: string | boolean = value;
    if (name === "isCancellable") newValue = value === "Yes" ? true : false;
    setFormValues({ ...formValues, [name]: newValue });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    const form = event.currentTarget;
    event.preventDefault();
    event.stopPropagation();
    if (form.checkValidity() === true) {
      setFormDataInParent("noticePeriod", formValues);
      nextHandler();
    }
    setValidated(true);
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <div className="row">
        <div className="col col-6">
          <h2 className="text-center">Notice Period</h2>

          <Form.Group
            controlId="canceled"
            style={
              localStorage.getItem("lang") === "ar"
                ? { marginBottom: "1rem", marginTop: "0.25rem" }
                : {}
            }
          >
            <Form.Label>
              This contract shall be considered canceled by the second party if
              work is not started within notice Period
            </Form.Label>
            <Form.Control
              className="form-select"
              as="select"
              custom
              value={formValues.isCancellable ? "Yes" : "No"}
              onChange={handleChange}
              name="isCancellable"
            >
              <option value={"Yes"}>Yes</option>
              <option value={"No"}>No</option>
            </Form.Control>
          </Form.Group>
          <CustomInputField
            id="period"
            label="Time for second party to start the work within(From this contract signing date in days)"
            placeholder="Contract Time period"
            name="period"
            type="number"
            pattern="[0-9]{10,}"
            value={formValues.period}
            onChange={handleChange}
            errMess="Enter contract period"
          />
          <CustomInputField
            id="fee"
            label="Monthly fee"
            placeholder="Monthly fee"
            name="fee"
            type="number"
            pattern="[0-9]{10,}"
            value={formValues.fee}
            onChange={handleChange}
            errMess="Enter Monthly fee"
          />
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

export default NoticePeriodView;
