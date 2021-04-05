import React, { useState } from "react";
import { Form, Row, Col } from "react-bootstrap";

import SecondPartyImage from "../../../../../../assets/images/contract/cat 2.png";
import CustomInputField from "../../../../../../components/CustomInputField";
import { SecondPartyDetailInterface } from "../../lawyerfees.model";
interface SecondPartyDetailViewProps {
  nextHandler: () => void;
  prevHandler: React.MouseEventHandler<HTMLButtonElement>;
  formValues: SecondPartyDetailInterface;
  setFirstSecondDetailsInParent: (
    formType: string,
    formValues: SecondPartyDetailInterface
  ) => void;
}
const SecondPartyDetailView: React.FC<SecondPartyDetailViewProps> = ({
  nextHandler,
  prevHandler,
  formValues,
  setFirstSecondDetailsInParent,
}) => {
  const [validated, setValidated] = useState(false);
  const [secondPartyDetailData, setSecondPartyDetailData] = useState<
    SecondPartyDetailInterface
  >({
    firstName: formValues.firstName,
    name: formValues.name,
    nationality: formValues.nationality,
    IDnum: formValues.IDnum,
    city: formValues.city,
    neighborhood: formValues.neighborhood,
    phone: formValues.phone,
    email: formValues.email,
    POBox: formValues.POBox,
    street: formValues.street,
    contract: formValues.contract,
    nationalID: formValues.nationalID,
  });
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    const form = event.currentTarget;
    event.preventDefault();
    event.stopPropagation();
    if (form.checkValidity() === true) {
      setFirstSecondDetailsInParent("secondPartyDetail", secondPartyDetailData);
      nextHandler();
    }
    setValidated(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    let { name, value } = e.target;
    setSecondPartyDetailData({ ...secondPartyDetailData, [name]: value });
  };
  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <div className="row">
        <div className="col col-6">
          <h2 className="text-center">Second Party</h2>
          <Form.Label>Name</Form.Label>

          <Form.Group
            className="input-group"
            style={
              localStorage.getItem("lang") === "ar"
                ? { marginBottom: "1rem", marginTop: "0.25rem" }
                : {}
            }
          >
            <span className="input-group-addon col-2 px-0">
              <Form.Control
                className="form-select"
                as="select"
                custom
                value={secondPartyDetailData.firstName}
                name="firstName"
                onChange={handleChange}
              >
                <option>Mr</option>
                <option>Mrs</option>
                <option>Miss</option>
                <input type="text" />
              </Form.Control>
            </span>
            <div className="col-10 px-0">
              <Form.Control
                placeholder="Name"
                id="name"
                name="name"
                type="text"
                required
                value={secondPartyDetailData.name}
                onChange={handleChange}
              />
              <Form.Control.Feedback type="invalid">
                Enter Name
              </Form.Control.Feedback>
            </div>
          </Form.Group>

          <Row>
            <Col>
              <CustomInputField
                label="Nationality"
                placeholder="Nationality"
                errMess="Enter Nationality."
                id="nationality"
                name="nationality"
                type="text"
                value={secondPartyDetailData.nationality}
                onChange={handleChange}
                size="sm"
              />
            </Col>
            <Col>
              <CustomInputField
                label="ID/Commercial Registry Number"
                placeholder="ID/Commercial Registry Number"
                errMess="Enter ID/Commercial Registry Number."
                id="IDnum"
                name="IDnum"
                type="text"
                value={secondPartyDetailData.IDnum}
                onChange={handleChange}
                size="sm"
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <CustomInputField
                label="Address: City"
                placeholder="Address: City"
                errMess="Enter Address: City."
                id="city"
                name="city"
                type="text"
                value={secondPartyDetailData.city}
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
                value={secondPartyDetailData.neighborhood}
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
                value={secondPartyDetailData.street}
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
                value={secondPartyDetailData.phone}
                onChange={handleChange}
                size="sm"
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <CustomInputField
                label="Email"
                placeholder="Email"
                errMess="Enter Email"
                id="email"
                name="email"
                type="email"
                value={secondPartyDetailData.email}
                onChange={handleChange}
                size="sm"
              />
            </Col>
            <Col>
              <CustomInputField
                label="Contract"
                placeholder="Contract"
                errMess="Enter Contract"
                id="contract"
                name="contract"
                type="text"
                value={secondPartyDetailData.contract}
                onChange={handleChange}
                size="sm"
              />
            </Col>
          </Row>
          <CustomInputField
            label="National Identity, Agency, Authorization no."
            placeholder="National Identity, Agency, Authorization no."
            errMess="Enter National Identity, Agency, Authorization no."
            id="nationalID"
            name="nationalID"
            type="text"
            value={secondPartyDetailData.nationalID}
            onChange={handleChange}
            size="sm"
          />
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
