import React, { useState } from "react";
import { Form } from "react-bootstrap";

import DeliverableCollab from "../../../../../../assets/images/contract/cat collab.png";
import CustomInputField from "../../../../../../components/CustomInputField";
import { PriceAndPaymentsInterface } from "../../transport.model";
interface PriceAndPaymentsProps {
  prevHandler: () => void;
  nextHandler: () => void;
  defaultFormValues: PriceAndPaymentsInterface;
  setFormDataInParent: (
    formType: string,
    formValues: PriceAndPaymentsInterface
  ) => void;
}

const PriceAndPayments: React.FC<PriceAndPaymentsProps> = ({
  nextHandler,
  prevHandler,
  setFormDataInParent,
  defaultFormValues,
}) => {
  const [validated, setValidated] = useState(false);
  const [formValues, setFormValues] = useState<PriceAndPaymentsInterface>({
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
      setFormDataInParent("priceAndPayments", formValues);
      nextHandler();
    }
    setValidated(true);
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <div className="row">
        <div className="col col-6">
          <h2 className="text-center">Price And Payment</h2>
          <CustomInputField
            pattern="[0-9]{10,}"
            label="Price"
            errMess="Please enter Price."
            placeholder="price"
            id="price"
            name="price"
            type="number"
            value={formValues.price}
            onChange={handleChange}
          />
          <Form.Group
            controlId="method"
            style={
              localStorage.getItem("lang") === "ar"
                ? { marginBottom: "1rem", marginTop: "0.25rem" }
                : {}
            }
          >
            <Form.Label>Payment Method</Form.Label>
            <Form.Control
              className="form-select"
              defaultValue="Bank Transfer"
              name="method"
              as="select"
              custom
              value={formValues.method}
              onChange={handleChange}
            >
              <option>Bank Transfer</option>
              <option>Cash Payment</option>
            </Form.Control>
          </Form.Group>
          {formValues.method === "Bank Transfer" && (
            <CustomInputField
              label="Account Number"
              errMess="Please enter Account Number."
              placeholder="Account Number"
              id="accountNo"
              name="accountNo"
              type="text"
              value={formValues.accountNo}
              onChange={handleChange}
            />
          )}
        </div>
        <div className="col col-6 my-auto">
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

export default PriceAndPayments;
