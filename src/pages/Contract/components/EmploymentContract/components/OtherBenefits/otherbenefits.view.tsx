import React, { useState } from "react";
import { Form } from "react-bootstrap";

import CustomCheckBox from "../../../../../../components/CustomCheckBox";
import { otherBenefitsInterface } from "../../employmentcontract.model";

import QuestionsImage from "../../../../../../assets/images/contract/terms.png";
interface OtherBenefitsProps {
  prevHandler: () => void;
  nextHandler: () => void;
  defaultFormValues: otherBenefitsInterface;
  setFormDataInParent: (
    formType: string,
    formValues: otherBenefitsInterface
  ) => void;
}

const OtherBenefits: React.FC<OtherBenefitsProps> = ({
  nextHandler,
  prevHandler,
  setFormDataInParent,
  defaultFormValues,
}) => {
  const [validated, setValidated] = useState(false);
  const [formValues, setFormValues] = useState<otherBenefitsInterface>({
    ...defaultFormValues,
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    const form = event.currentTarget;
    event.preventDefault();
    event.stopPropagation();
    if (form.checkValidity() === true) {
      setFormDataInParent("otherBenefits", formValues);
      nextHandler();
    }
    setValidated(true);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { checked, value } = event.target;
    const _benefits = formValues.benefits;

    if (checked) {
      _benefits.push(value);
    } else {
      const i = _benefits.indexOf(value);
      _benefits.splice(i, 1);
    }

    setFormValues({ ...formValues, benefits: _benefits });
  };

  return (
    <div>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <div className="row">
          <div className="col col-6">
            <h2 className="text-center">Other Benefits</h2>
            {[
              "Housing",
              "Transportation",
              "Annual leave tickets",
              "Health insurance",
            ].map((benefit, index) => {
              return (
                <CustomCheckBox
                  key={index}
                  label={benefit}
                  name="benefit"
                  value={benefit}
                  id={benefit}
                  onChange={handleChange}
                  checked={formValues.benefits.indexOf(benefit) !== -1}
                />
              );
            })}
          </div>
          <div className="col col-6 my-auto">
            <img src={QuestionsImage} alt="Question Step" />
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
    </div>
  );
};

export default OtherBenefits;
