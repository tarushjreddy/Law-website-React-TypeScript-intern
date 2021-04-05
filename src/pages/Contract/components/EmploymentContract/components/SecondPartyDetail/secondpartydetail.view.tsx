import React, { useState } from "react";
import { Form, Row, Col } from "react-bootstrap";

import CustomInputField from "../../../../../../components/CustomInputField";
import BothDatePicker from "../../../../../../components/BothDatePicker";
import { secondPartyDetailInterface } from "../../employmentcontract.model";

import SecondPartyImage from "../../../../../../assets/images/contract/cat 2.png";

interface SecondPartyDetailViewProps {
  prevHandler: () => void;
  nextHandler: () => void;
  defaultFormValues: secondPartyDetailInterface;
  setFormDataInParent: (
    formType: string,
    formValues: secondPartyDetailInterface
  ) => void;
}

const SecondPartyDetailView: React.FC<SecondPartyDetailViewProps> = ({
  nextHandler,
  prevHandler,
  setFormDataInParent,
  defaultFormValues,
}) => {
  const [validated, setValidated] = useState(false);
  const [formValues, setFormValues] = useState<secondPartyDetailInterface>({
    ...defaultFormValues,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleDateChange = (date: Date | null | string) => {
    setFormValues({
      ...formValues,
      issueDate: date?.toString() || "",
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    const form = event.currentTarget;
    event.preventDefault();
    event.stopPropagation();
    if (form.checkValidity() === true) {
      setFormDataInParent("secondPartyDetail", formValues);
      nextHandler();
    }
    setValidated(true);
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <div className="row">
        <div className="col col-6">
          <h2 className="text-center">Second Party Detail</h2>
          <Row>
            <Col>
              <CustomInputField
                id="name"
                label="Name"
                name="name"
                type="text"
                placeholder="Name"
                value={formValues.name}
                onChange={handleChange}
                errMess="Please enter Name."
              />
            </Col>
            <Col>
              <CustomInputField
                id="nationality"
                label="Nationality"
                name="nationality"
                type="text"
                placeholder="Nationality"
                value={formValues.nationality}
                onChange={handleChange}
                errMess="Please enter Nationality."
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <CustomInputField
                id="passNumber"
                label="Passport/Visa Number"
                name="passNumber"
                type="text"
                placeholder="Passport/Visa Number"
                value={formValues.passNumber}
                onChange={handleChange}
                errMess="Please enter Passport/Visa Number."
              />
            </Col>
            <Col>
              <CustomInputField
                label="Place of Issue"
                name="issuePlace"
                type="text"
                placeholder="Place of Issue"
                value={formValues.issuePlace}
                onChange={handleChange}
                errMess="Select Place of Issue."
              />
            </Col>
          </Row>
          <BothDatePicker
            handleDateChange={handleDateChange}
            consultationDate={formValues.issueDate}
          />
          <Row>
            <Col>
              <CustomInputField
                pattern="[0-9]{10,}"
                id="phone"
                label="Phone"
                name="phone"
                type="text"
                placeholder="phone"
                value={formValues.phone}
                onChange={handleChange}
                errMess="Please enter Phone."
              />
            </Col>
            <Col>
              <CustomInputField
                id="email"
                label="Email"
                name="email"
                type="email"
                placeholder="email"
                value={formValues.email}
                onChange={handleChange}
                errMess="Please enter Email."
              />
            </Col>
          </Row>
          <CustomInputField
            id="POBox"
            label="P.O. Box"
            name="POBox"
            type="text"
            placeholder="P.O. Box"
            value={formValues.POBox}
            onChange={handleChange}
            errMess="Please enter P.O. Box."
          />
        </div>
        <div className="col col-6 my-auto">
          <img src={SecondPartyImage} alt="Second Party" className="mt-5" />
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

export default SecondPartyDetailView;
