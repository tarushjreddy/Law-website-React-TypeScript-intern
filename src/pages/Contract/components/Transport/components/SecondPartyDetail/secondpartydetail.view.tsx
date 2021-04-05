import React, { useState } from "react";
import { Form, Row, Col } from "react-bootstrap";

import SecondPartyImage from "../../../../../../assets/images/contract/cat 2.png";
import CustomInputField from "../../../../../../components/CustomInputField";
import { SecondPartyDetailInterface } from "../../transport.model";

interface SecondPartyDetailViewProps {
  prevHandler: () => void;
  nextHandler: () => void;
  defaultFormValues: SecondPartyDetailInterface;
  setFormDataInParent: (
    formType: string,
    formValues: SecondPartyDetailInterface
  ) => void;
}

const SecondPartyDetailView: React.FC<SecondPartyDetailViewProps> = ({
  nextHandler,
  prevHandler,
  setFormDataInParent,
  defaultFormValues,
}) => {
  const [validated, setValidated] = useState(false);
  const [formValues, setFormValues] = useState<SecondPartyDetailInterface>({
    ...defaultFormValues,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
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
          <h2 className="text-center">Second Party (Buyer)</h2>

          <CustomInputField
            label="Name"
            errMess="Please enter name."
            placeholder="name"
            id="name"
            name="name"
            type="text"
            value={formValues.name}
            onChange={handleChange}
          />
          <CustomInputField
            id="nationality"
            label="Nationality"
            name="nationality"
            type="text"
            placeholder="Nationality"
            value={formValues.nationality}
            onChange={handleChange}
            errMess="Please enter Nationality"
          />
          <CustomInputField
            label="ID Number"
            errMess="Please enter ID Number/Residence Number"
            placeholder="ID Number/Residence Number"
            id="IDnumber"
            name="IDnumber"
            type="text"
            value={formValues.IDnumber}
            onChange={handleChange}
          />
          <Row>
            <Col>
              <CustomInputField
                label="Address: City"
                errMess="Please enter City."
                placeholder="Address: City"
                id="city"
                name="city"
                type="text"
                value={formValues.city}
                onChange={handleChange}
              />
            </Col>
            <Col>
              <CustomInputField
                label="Neighbourhood"
                errMess="Please enter Neighbourhood"
                placeholder="Neighbourhood"
                id="neighborhood"
                name="neighborhood"
                type="text"
                value={formValues.neighborhood}
                onChange={handleChange}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <CustomInputField
                label="Street"
                errMess="Please enter Street"
                placeholder="Street"
                id="street"
                name="street"
                type="text"
                value={formValues.street}
                onChange={handleChange}
              />
            </Col>
            <Col>
              <CustomInputField
                pattern="[0-9]{10,}"
                label="Mobile Number"
                errMess="Please enter Mobile Number"
                placeholder="Mobile Number"
                id="phone"
                name="phone"
                type="number"
                value={formValues.phone}
                onChange={handleChange}
              />
            </Col>
          </Row>
        </div>
        <div className="col col-6 my-auto">
          <img src={SecondPartyImage} alt="First Party" className="mt-5" />
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
