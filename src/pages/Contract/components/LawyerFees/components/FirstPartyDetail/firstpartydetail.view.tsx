import React, { useState } from "react";
import { Form, Row, Col } from "react-bootstrap";

import FirstPartyImage from "../../../../../../assets/images/contract/cat 1.png";
import CustomInputField from "../../../../../../components/CustomInputField";
import { FirstPartyDetailInterface } from "../../lawyerfees.model";
interface FirstPartyDetailViewProps {
  nextHandler: () => void;
  prevHandler: React.MouseEventHandler<HTMLButtonElement>;
  formValues: FirstPartyDetailInterface;
  setFirstPartyDetailsInParent: (
    formType: string,
    formValues: FirstPartyDetailInterface
  ) => void;
}
const FirstPartyDetailView: React.FC<FirstPartyDetailViewProps> = ({
  nextHandler,
  prevHandler,
  formValues,
  setFirstPartyDetailsInParent,
}) => {
  const [validated, setValidated] = useState(false);
  const [firstPartyDetailData, setFirstPartyDetailData] = useState<
    FirstPartyDetailInterface
  >({
    method: formValues.method,
    name: formValues.name,
    licenseNo: formValues.licenseNo,
    IDnum: formValues.IDnum,
    city: formValues.city,
    neighborhood: formValues.neighborhood,
    street: formValues.street,
    phone: formValues.phone,
  });
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    const form = event.currentTarget;
    event.preventDefault();
    event.stopPropagation();
    if (form.checkValidity() === true) {
      setFirstPartyDetailsInParent("firstPartyDetail", firstPartyDetailData);
      nextHandler();
    }
    setValidated(true);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    let { name, value } = event.target;
    setFirstPartyDetailData({ ...firstPartyDetailData, [name]: value });
  };
  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <div className="row">
        <div className="col col-6">
          <h2 className="text-center">First Party</h2>
          <Form.Group controlId="method">
            <Form.Label style={{ fontSize: "15px" }}>Type</Form.Label>
            <Form.Control
              className="form-select"
              size="sm"
              as="select"
              custom
              value={firstPartyDetailData.method}
              name="method"
              onChange={handleChange}
            >
              <option>Company</option>
              <option>Office</option>
              <option>Lawyer</option>
            </Form.Control>
          </Form.Group>
          <CustomInputField
            label="Name"
            placeholder="Name"
            errMess="Enter Name."
            id="name"
            name="name"
            type="text"
            value={firstPartyDetailData.name}
            onChange={handleChange}
            size="sm"
          />
          <CustomInputField
            label="License No."
            placeholder="License No."
            id="licenseNo"
            name="licenseNo"
            type="text"
            value={firstPartyDetailData.licenseNo}
            onChange={handleChange}
            errMess="Enter License No."
            size="sm"
          />
          <CustomInputField
            label="National Identity/Professional Registry Number"
            placeholder="National Identity/Professional Registry Number"
            errMess="Enter National Identity/Professional Registry Number"
            id="IDnum"
            name="IDnum"
            type="text"
            value={firstPartyDetailData.IDnum}
            onChange={handleChange}
            size="sm"
          />
          <Row>
            <Col>
              <CustomInputField
                label="City"
                placeholder="City"
                errMess="Enter City"
                id="city"
                name="city"
                type="text"
                value={firstPartyDetailData.city}
                onChange={handleChange}
                size="sm"
              />
            </Col>
            <Col>
              <CustomInputField
                label="Neighborhood"
                placeholder="Neighborhood"
                errMess="Enter Neighborhood"
                id="neighborhood"
                name="neighborhood"
                type="text"
                value={firstPartyDetailData.neighborhood}
                onChange={handleChange}
                size="sm"
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <CustomInputField
                label="Street"
                placeholder="Street"
                errMess="Enter Street"
                id="street"
                name="street"
                type="text"
                value={firstPartyDetailData.street}
                onChange={handleChange}
                size="sm"
              />
            </Col>
            <Col>
              <CustomInputField
                pattern="[0-9]{10,}"
                label="Mobile Number"
                placeholder="Mobile Number"
                errMess="Enter Mobile Number"
                id="phone"
                name="phone"
                type="number"
                value={firstPartyDetailData.phone}
                onChange={handleChange}
                size="sm"
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
