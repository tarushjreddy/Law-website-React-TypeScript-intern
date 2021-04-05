import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Form, Row, Col } from "react-bootstrap";

import CustomInputField from "../../../../../../components/CustomInputField";
import BothDatePicker from "../../../../../../components/BothDatePicker";
import { firstPartyDetailInterface } from "../../employmentcontract.model";

import FirstPartyImage from "../../../../../../assets/images/contract/cat 1.png";

interface FirstPartyDetailViewProps {
  prevHandler: () => void;
  nextHandler: () => void;
  defaultFormValues: firstPartyDetailInterface;
  setFormDataInParent: (
    formType: string,
    formValues: firstPartyDetailInterface
  ) => void;
}

const FirstPartyDetailView: React.FC<FirstPartyDetailViewProps> = ({
  nextHandler,
  prevHandler,
  setFormDataInParent,
  defaultFormValues,
}) => {
  const { t } = useTranslation("contract");

  const [validated, setValidated] = useState(false);
  const [formValues, setFormValues] = useState<firstPartyDetailInterface>({
    ...defaultFormValues,
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    const form = event.currentTarget;
    event.preventDefault();
    event.stopPropagation();
    if (form.checkValidity() === true) {
      setFormDataInParent("firstPartyDetail", formValues);
      nextHandler();
    }
    setValidated(true);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleDateChange = (date: Date | null | string): void => {
    setFormValues({
      ...formValues,
      issueDate: date?.toString() || "",
    });
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <div className="row">
        <div className="col col-6">
          <h2 className="text-center">
            {t("categoryForm.firstPartyDetail.heading")}
          </h2>
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
              <Form.Group
                controlId="duration"
                style={
                  localStorage.getItem("lang") === "ar"
                    ? { marginBottom: "1rem", marginTop: "0.25rem" }
                    : {}
                }
              >
                <Form.Label>Type</Form.Label>
                <Form.Control
                  className="form-select"
                  defaultValue="Organization"
                  name="type"
                  value={formValues.type}
                  as="select"
                  custom
                  onChange={handleChange}
                >
                  {["Organization", "Company", "Person"].map((value, index) => {
                    return (
                      <option key={index} value={value}>
                        {value}
                      </option>
                    );
                  })}
                </Form.Control>
              </Form.Group>
            </Col>
          </Row>
          <CustomInputField
            label="National ID/Company Registration number"
            name="registrationNum"
            type="text"
            placeholder="National ID/Company Registration number"
            value={formValues.registrationNum}
            onChange={handleChange}
            errMess="Please enter National ID/Company Registration number."
          />
          <BothDatePicker
            handleDateChange={handleDateChange}
            consultationDate={formValues.issueDate}
          />
          <CustomInputField
            label="Place of Issue"
            name="issuePlace"
            type="text"
            placeholder="Place of Issue"
            value={formValues.issuePlace}
            onChange={handleChange}
            errMess="Select Place of Issue."
          />
          <Row>
            <Col>
              <CustomInputField
                label="Represented by"
                name="represented"
                type="text"
                placeholder="Represented by"
                value={formValues.represented}
                onChange={handleChange}
                errMess="Enter Represented by."
              />
            </Col>
            <Col>
              <CustomInputField
                label="Source"
                name="source"
                type="text"
                placeholder="Source"
                value={formValues.source}
                onChange={handleChange}
                errMess="Enter Source."
              />
            </Col>
          </Row>
        </div>
        <div className="col col-6 my-auto">
          <img src={FirstPartyImage} alt="First Party" className="mt-5" />
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

export default FirstPartyDetailView;
