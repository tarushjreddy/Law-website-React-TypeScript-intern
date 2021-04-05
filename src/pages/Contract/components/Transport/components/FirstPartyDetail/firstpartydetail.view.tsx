import React, { useState } from "react";
import { Form, Row, Col } from "react-bootstrap";

import FirstPartyImage from "../../../../../../assets/images/contract/cat 1.png";
import CustomInputField from "../../../../../../components/CustomInputField";
import { FirstPartyDetailInterface } from "../../transport.model";
interface FirstPartyDetailViewProps {
  prevHandler: () => void;
  nextHandler: () => void;
  defaultFormValues: FirstPartyDetailInterface;
  setFormDataInParent: (
    formType: string,
    formValues: FirstPartyDetailInterface
  ) => void;
}

const FirstPartyDetailView: React.FC<FirstPartyDetailViewProps> = ({
  nextHandler,
  prevHandler,
  setFormDataInParent,
  defaultFormValues,
}) => {
  const [validated, setValidated] = useState(false);
  const [formValues, setFormValues] = useState<FirstPartyDetailInterface>({
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

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <div className="row">
        <div className="col col-6">
          <h2 className="text-center">First Party (Seller)</h2>
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
            errMess="Please enter ID Number."
            placeholder="ID Number"
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
