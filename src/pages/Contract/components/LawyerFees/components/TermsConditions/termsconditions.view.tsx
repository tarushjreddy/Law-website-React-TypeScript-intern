import React, { useState } from "react";
import { Form } from "react-bootstrap";

import TermsAndConditionsImage from "../../../../../../assets/images/contract/terms.png";
import { TermsConditionsInterface } from "../../lawyerfees.model";
interface TermsConditionsProps {
  nextHandler: () => void;
  prevHandler: React.MouseEventHandler<HTMLButtonElement>;
  formValues: TermsConditionsInterface;
  setTermsInParent: (
    formType: string,
    formValues: TermsConditionsInterface
  ) => void;
}
const TermsConditions: React.FC<TermsConditionsProps> = ({
  nextHandler,
  prevHandler,
  formValues,
  setTermsInParent,
}) => {
  const [validated, setValidated] = useState(false);
  const [termsConditionsData, setTermsConditionsData] = useState<
    TermsConditionsInterface
  >({
    terms: formValues.terms,
    jdArea: formValues.jdArea,
  });
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    const form = event.currentTarget;
    event.preventDefault();
    event.stopPropagation();
    if (form.checkValidity() === true) {
      setTermsInParent("termsConditionsDetail", termsConditionsData);
      nextHandler();
    }
    setValidated(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    let { name, value } = e.target;
    setTermsConditionsData({ ...termsConditionsData, [name]: value });
  };
  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <div className="row">
        <div className="col col-6">
          <h2 className="text-center">Jurisdiction Area</h2>
          <Form.Group controlId="jdArea">
            <Form.Label>Jurisdiction Area</Form.Label>
            <p>
              Any dispute that arises between the two parties as a result of
              this contract shall be the competent court in the city of:
            </p>
            <Form.Control
              className="form-select"
              as="select"
              custom
              value={termsConditionsData.jdArea}
              name="jdArea"
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
              label="I agree to all terms and conditions stated above"
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
