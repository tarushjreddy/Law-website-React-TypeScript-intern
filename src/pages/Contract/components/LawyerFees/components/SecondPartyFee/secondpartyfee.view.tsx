import React, { useState } from "react";
import { Form, Col, Row } from "react-bootstrap";

import DeliverableCollab from "../../../../../../assets/images/contract/cat collab.png";
import CustomInputField from "../../../../../../components/CustomInputField";
import BothDatePicker from "../../../../../../components/BothDatePicker";
import { SecondPartyFeeInterface } from "../../lawyerfees.model";
interface SecondPartyFeeProps {
  nextHandler: () => void;
  prevHandler: React.MouseEventHandler<HTMLButtonElement>;
  formValues: SecondPartyFeeInterface;
  setSecondPartyFeeInParent: (
    formType: string,
    formValues: SecondPartyFeeInterface
  ) => void;
}

const SecondPartyFee: React.FC<SecondPartyFeeProps> = ({
  nextHandler,
  prevHandler,
  formValues,
  setSecondPartyFeeInParent,
}) => {
  const [validated, setValidated] = useState(false);
  const [secondPartyFeeData, setSecondPartyFeeData] = useState<
    SecondPartyFeeInterface
  >({
    canceled: formValues.canceled,
    payTime: formValues.payTime,
    date: formValues.date,
    place: formValues.place,
    accountNo: formValues.accountNo,
  });
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    const form = event.currentTarget;
    event.preventDefault();
    event.stopPropagation();
    if (form.checkValidity() === true) {
      setSecondPartyFeeInParent("secondPartyFeeDetail", secondPartyFeeData);
      nextHandler();
    }
    setValidated(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    let { name, value } = e.target;
    setSecondPartyFeeData({ ...secondPartyFeeData, [name]: value });
  };

  const handleDateChange = (date: Date | null | string): void => {
    setSecondPartyFeeData({
      ...secondPartyFeeData,
      date: date?.toString() || "",
    });
  };
  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <div className="row">
        <div className="col col-6">
          <h2 className="text-center">Second Party Fee</h2>
          <CustomInputField
            pattern="[0-9]{10,}"
            label="Total Amount(total amount including Tax in SAR)"
            placeholder="Total Amount(total amount including Tax in SAR)"
            errMess="Enter Total Amount"
            id="canceled"
            name="canceled"
            type="number"
            value={secondPartyFeeData.canceled}
            onChange={handleChange}
          />
          <Form.Group
            controlId="payTime"
            style={
              localStorage.getItem("lang") === "ar"
                ? { marginBottom: "1rem", marginTop: "0.25rem" }
                : {}
            }
          >
            <Form.Label>Instance of payment</Form.Label>
            <Form.Control
              className="form-select"
              as="select"
              custom
              value={secondPartyFeeData.payTime}
              name="payTime"
              onChange={handleChange}
            >
              <option>On SIGNING OF THE CONTRACT</option>
              <option>WHEN THE JOB IS DONE</option>
              <option selected>A DATE</option>
            </Form.Control>
          </Form.Group>
          <BothDatePicker
            handleDateChange={handleDateChange}
            consultationDate={secondPartyFeeData.date}
          />
          <CustomInputField
            label="Place"
            placeholder="Place"
            errMess="Enter Place"
            id="place"
            name="place"
            type="place"
            value={secondPartyFeeData.place}
            onChange={handleChange}
          />
          <CustomInputField
            pattern="[0-9]{10,}"
            label="Account"
            placeholder="Account"
            errMess="Enter Account"
            id="accountNo"
            name="accountNo"
            type="number"
            value={secondPartyFeeData.accountNo}
            onChange={handleChange}
          />
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

export default SecondPartyFee;
