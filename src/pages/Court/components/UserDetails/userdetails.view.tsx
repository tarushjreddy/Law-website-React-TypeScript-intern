import React, { useState } from "react";
import { Form } from "react-bootstrap";

import CustomInputField from "../../../../components/CustomInputField";
import DeliverableCollab from "../../../../assets/images/contract/cat collab.png";
import { UerDetailsInterface } from "../../court.model";

interface CaseDetailsProps {
  setFormDataInParent: (formType: string, formValues: any) => void;
  nextHandler: () => void;
  prevHandler: () => void;
  userDetailsValues: UerDetailsInterface;
}

const UserDetails: React.FC<CaseDetailsProps> = ({
  setFormDataInParent,
  nextHandler,
  prevHandler,
  userDetailsValues,
}) => {
  const [validated, setValidated] = useState(false);
  const [userDetailsData, setUserDetailsData] = useState<UerDetailsInterface>({
    userType: userDetailsValues.userType,
    companyType: userDetailsValues.companyType,
  });
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    const form = event.currentTarget;
    event.preventDefault();
    event.stopPropagation();
    if (form.checkValidity() === true) {
      setFormDataInParent("userDetails", userDetailsData);
      nextHandler();
      console.log(userDetailsData);
    }
    setValidated(true);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    let { name, value } = event.target;
    setUserDetailsData({ ...userDetailsData, [name]: value });
  };
  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <div className="row">
        <div className="col col-6">
          <h2 className="text-center">User Details</h2>
          <Form.Group
            controlId="caseTypeName"
            style={
              localStorage.getItem("lang") === "ar"
                ? { marginBottom: "1rem", marginTop: "0.25rem" }
                : {}
            }
          >
            <Form.Label style={{ fontSize: "15px" }}>User Type</Form.Label>
            <Form.Control
              className="form-select"
              as="select"
              custom
              required
              value={userDetailsData.userType}
              name="userType"
              onChange={handleChange}
            >
              <option>Company</option>
              <option>Individual</option>
            </Form.Control>
          </Form.Group>
          {userDetailsData.userType === "Company" && (
            <CustomInputField
              label="Type of Company"
              placeholder="Type of Company"
              errMess="Enter Type of Company."
              id="companyType"
              name="companyType"
              type="text"
              value={userDetailsData.companyType}
              onChange={handleChange}
            />
          )}
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

export default UserDetails;
