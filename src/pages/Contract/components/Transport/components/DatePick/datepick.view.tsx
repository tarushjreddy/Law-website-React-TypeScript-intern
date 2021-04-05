import React, { useState } from "react";
import { Form } from "react-bootstrap";

import DatePickerImage from "../../../../../../assets/images/contract/date picker.jpg";
import CustomInputField from "../../../../../../components/CustomInputField";
import BothDatePicker from "../../../../../../components/BothDatePicker";
import { ContractDateInterface } from "../../transport.model";

interface ContractDateViewProps {
  prevHandler: () => void;
  nextHandler: () => void;
  defaultFormValues: ContractDateInterface;
  setFormDataInParent: (
    formType: string,
    formValues: ContractDateInterface
  ) => void;
}

const ContractDateView: React.FC<ContractDateViewProps> = ({
  nextHandler,
  prevHandler,
  setFormDataInParent,
  defaultFormValues,
}) => {
  const [validated, setValidated] = useState(false);
  const [formValues, setFormValues] = useState<ContractDateInterface>({
    ...defaultFormValues,
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    const form = event.currentTarget;
    event.preventDefault();
    event.stopPropagation();
    if (form.checkValidity() === true) {
      setFormDataInParent("contractDate", formValues);
      nextHandler();
    }
    setValidated(true);
  };

  const handleChange = (date: Date | null | string): void => {
    setFormValues({
      ...formValues,
      ondate: date?.toString() || "",
    });
  };

  return (
    <>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <div className="row">
          <div className="col col-6">
            <h2 className="text-center">Contract Date</h2>
            <BothDatePicker
              handleDateChange={handleChange}
              consultationDate={formValues.ondate}
            />
          </div>
          <div className="col col-6 my-auto">
            <img
              src={DatePickerImage}
              style={
                localStorage.getItem("lang") === "ar"
                  ? { width: "80%" }
                  : { width: "100%" }
              }
              alt="Deliverable Collab"
            />
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
    </>
  );
};

export default ContractDateView;
