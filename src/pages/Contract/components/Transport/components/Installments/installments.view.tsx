import React, { useState } from "react";
import { Form, Col, Row, Button } from "react-bootstrap";

import DeliverableCollab from "../../../../../../assets/images/contract/cat collab.png";
import CustomInputField from "../../../../../../components/CustomInputField";
import BothDatePicker from "../../../../../../components/BothDatePicker";
import { InstallmentsInterface } from "../../transport.model";
interface InstallmentsProps {
  prevHandler: () => void;
  nextHandler: () => void;
  defaultFormValues: InstallmentsInterface;
  setFormDataInParent: (
    formType: string,
    formValues: InstallmentsInterface
  ) => void;
}
const Installments: React.FC<InstallmentsProps> = ({
  nextHandler,
  prevHandler,
  setFormDataInParent,
  defaultFormValues,
}) => {
  const [validated, setValidated] = useState(false);
  const [formValues, setFormValues] = useState<InstallmentsInterface>({
    ...defaultFormValues,
  });

  const increseInstallment = () => {
    setFormValues({
      ...formValues,
      installments: formValues.installments + 1,
    });
  };

  const dateHandleChange2 = (date: Date | null | string): void => {
    setFormValues({
      ...formValues,
      secondDate: date?.toString() || "",
    });
  };

  const dateHandleChange3 = (date: Date | null | string): void => {
    setFormValues({
      ...formValues,
      thirdDate: date?.toString() || "",
    });
  };

  const dateHandleChange4 = (date: Date | null | string): void => {
    setFormValues({
      ...formValues,
      fourthDate: date?.toString() || "",
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    const form = event.currentTarget;
    event.preventDefault();
    event.stopPropagation();
    if (form.checkValidity() === true) {
      setFormDataInParent("installments", formValues);
      nextHandler();
    }
    setValidated(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    let { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <div className="row">
        <div
          className="col col-6"
          style={{ height: "550px", overflowY: "auto" }}
        >
          <h2 className="text-center">Installments</h2>
          <CustomInputField
            pattern="[0-9]{10,}"
            label="Total Amount"
            errMess="Please enter Total Amount."
            placeholder="Total Amount"
            id="canceled"
            name="canceled"
            type="number"
            value={formValues.canceled}
            onChange={handleChange}
          />
          <CustomInputField
            pattern="[0-9]{10,}"
            label="The initial amount to be paid upon signing of the contract"
            errMess="Please enter first payment."
            placeholder="First Installment"
            id="firstPayment"
            name="firstPayment"
            type="number"
            value={formValues.firstPayment}
            onChange={handleChange}
          />
          <CustomInputField
            pattern="[0-9]{10,}"
            label="Second Installment"
            errMess="Please enter Second Installment"
            placeholder="Second Installment"
            id="secondPayment"
            name="secondPayment"
            type="number"
            value={formValues.secondPayment}
            onChange={handleChange}
          />
          <BothDatePicker
            handleDateChange={dateHandleChange2}
            consultationDate={formValues.secondDate}
          />
          {/*<CustomInputField
                              label="On"
                              errMess="Please select Date"
                              placeholder="On"
                              id="secondDate"
                              name="secondDate"
                              type="date"
                              value={formValues.secondDate}
                              onChange={handleChange}
                            />*/}
          {formValues.installments >= 3 && (
            <>
              <CustomInputField
                pattern="[0-9]{10,}"
                label="Third Installment"
                errMess="Please enter Third Installment"
                placeholder="Third Installment"
                id="thirdPayment"
                name="thirdPayment"
                type="number"
                value={formValues.thirdPayment}
                onChange={handleChange}
              />
              <BothDatePicker
                handleDateChange={dateHandleChange3}
                consultationDate={formValues.thirdDate}
              />
            </>
          )}
          {formValues.installments >= 4 && (
            <>
              <CustomInputField
                pattern="[0-9]{10,}"
                label="Fourth Installment"
                errMess="Please enter Fourth Installment"
                placeholder="Fourth Installment"
                id="fourthPayment"
                name="fourthPayment"
                type="number"
                value={formValues.fourthPayment}
                onChange={handleChange}
              />
              <BothDatePicker
                handleDateChange={dateHandleChange4}
                consultationDate={formValues.fourthDate}
              />
            </>
          )}
          {formValues.installments < 4 && (
            <div className="text-center my-2">
              <Button variant="outline-custom" onClick={increseInstallment}>
                Add another Installment
              </Button>
            </div>
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

export default Installments;
