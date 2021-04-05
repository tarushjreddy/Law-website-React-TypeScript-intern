import React, { useState } from "react";
import { Form } from "react-bootstrap";

import TermsAndConditionsImage from "../../../../../../assets/images/contract/terms.png";
import { TermsConditionsInterface } from "../../transport.model";
interface TermsConditionsProps {
  prevHandler: () => void;
  nextHandler: () => void;
  defaultFormValues: TermsConditionsInterface;
  setFormDataInParent: (
    formType: string,
    formValues: TermsConditionsInterface
  ) => void;
}

const TermsConditions: React.FC<TermsConditionsProps> = ({
  nextHandler,
  prevHandler,
  setFormDataInParent,
  defaultFormValues,
}) => {
  // TermsConditions
  const [validated, setValidated] = useState(false);
  const [formValues, setFormValues] = useState<TermsConditionsInterface>({
    ...defaultFormValues,
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    const form = event.currentTarget;
    event.preventDefault();
    event.stopPropagation();
    if (form.checkValidity() === true) {
      setFormDataInParent("termsConditions", formValues);
      nextHandler();
    }
    setValidated(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    let { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <div className="row">
        <div className="col col-6">
          <h2 className="text-center">Jurisdiction Area</h2>

          <Form.Group controlId="jdArea">
            <Form.Label>Jurisdiction Area</Form.Label>
            <Form.Control
              className="form-select"
              as="select"
              custom
              defaultValue="Jeddah"
              name="firstName"
              onChange={handleChange}
            >
              <option>Jeddah</option>
              <option>Riyadh</option>
              <option>Madina</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="terms">
            <Form.Check
              required
              name="terms"
              type="checkbox"
              label="We agree to all terms and conditions stated above"
              onChange={handleChange}
            />
          </Form.Group>
        </div>
        <div className="col col-6 my-auto">
          <img src={TermsAndConditionsImage} alt="Deliverable Collab" />
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
    </Form>
  );
};

export default TermsConditions;
