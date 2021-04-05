import React, { useState } from "react";
import { Form } from "react-bootstrap";

import DeliverableCollabImage from "../../../../../../assets/images/contract/cat collab.png";
import CustomInputField from "../../../../../../components/CustomInputField";
import { jobDetailInterface } from "../../employmentcontract.model";

interface JobDetailProps {
  prevHandler: () => void;
  nextHandler: () => void;
  defaultFormValues: jobDetailInterface;
  setFormDataInParent: (
    formType: string,
    formValues: jobDetailInterface
  ) => void;
}

const JobDetailsView: React.FC<JobDetailProps> = ({
  nextHandler,
  prevHandler,
  setFormDataInParent,
  defaultFormValues,
}) => {
  const [validated, setValidated] = useState(false);
  const [formValues, setFormValues] = useState<jobDetailInterface>({
    ...defaultFormValues,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    let { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    const form = event.currentTarget;
    event.preventDefault();
    event.stopPropagation();
    if (form.checkValidity() === true) {
      setFormDataInParent("jobDetail", formValues);
      nextHandler();
    }
    setValidated(true);
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <div className="row">
        <div className="col col-6">
          <h2 className="text-center">Job Details</h2>

          <CustomInputField
            id="job"
            label="Job/Occupation"
            placeholder="Job/Occupation"
            name="job"
            type="text"
            value={formValues.job}
            onChange={handleChange}
            errMess="Please enter job"
          />
          <CustomInputField
            id="organization"
            label="Organization"
            placeholder="Organization"
            name="organization"
            type="text"
            value={formValues.organization}
            onChange={handleChange}
            errMess="Please enter Organization"
          />
          <CustomInputField
            id="branch"
            label="Branch"
            placeholder="Branch"
            name="branch"
            type="text"
            value={formValues.branch}
            onChange={handleChange}
            errMess="Please enter Branch"
          />

          <CustomInputField
            id="city"
            label="City"
            name="city"
            type="text"
            placeholder="City"
            value={formValues.city}
            onChange={handleChange}
            errMess="Please enter City."
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

export default JobDetailsView;
