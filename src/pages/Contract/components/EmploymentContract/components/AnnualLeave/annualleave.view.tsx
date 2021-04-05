import React, { useState } from "react";
import { Form } from "react-bootstrap";

import CustomInputField from "../../../../../../components/CustomInputField";
import { AnnualLeaveInterface } from "../../employmentcontract.model";

import TermsAndConditionsImage from "../../../../../../assets/images/contract/terms.png";

interface AnnualLeaveProps {
  prevHandler: () => void;
  nextHandler: () => void;
  defaultFormValues: AnnualLeaveInterface;
  setFormDataInParent: (
    formType: string,
    formValues: AnnualLeaveInterface
  ) => void;
}

const AnnualLeaveView: React.FC<AnnualLeaveProps> = ({
  nextHandler,
  prevHandler,
  setFormDataInParent,
  defaultFormValues,
}) => {
  const [validated, setValidated] = useState(false);
  const [formValues, setFormValues] = useState<AnnualLeaveInterface>({
    ...defaultFormValues,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value, checked } = event.target;
    if (name === "terms") {
      setFormValues({ ...formValues, [name]: checked });
    } else {
      setFormValues({ ...formValues, [name]: value });
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    const form = event.currentTarget;
    event.preventDefault();
    event.stopPropagation();
    if (form.checkValidity() === true && formValues.terms === true) {
      setFormDataInParent("annualLeave", formValues);
      nextHandler();
    }
    setValidated(true);
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <div>
        <div className="row">
          <div className="col col-6">
            <h2 className="text-center">Annual Leave</h2>
            <CustomInputField
              id="leave"
              label="Annual Leave"
              placeholder="Annual leave in days(After full year of continuous service)"
              name="leave"
              type="text"
              value={formValues.leave}
              onChange={handleChange}
              errMess="Enter Annual leave in days"
            />
            <Form.Group controlId="terms">
              <Form.Check
                required
                name="terms"
                type="checkbox"
                checked={formValues.terms}
                label="We agree to all terms and conditions stated above"
                onChange={handleChange}
              />
            </Form.Group>
          </div>
          <div className="col col-6 my-auto">
            <img src={TermsAndConditionsImage} alt="Second Party" />
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
              Submit
            </button>
          </div>
        </div>
      </div>
    </Form>
  );
};

export default AnnualLeaveView;
