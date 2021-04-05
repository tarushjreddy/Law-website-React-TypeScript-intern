import React, { useState } from "react";
import { Form } from "react-bootstrap";

import DatePickerImage from "../../../../../../assets/images/contract/date picker.jpg";
import CustomInputField from "../../../../../../components/CustomInputField";
import BothDatePicker from "../../../../../../components/BothDatePicker";
import { ContractDateInterface } from "../../lawyerfees.model";

interface ContractDateViewProps {
  nextHandler: () => void;
  prevHandler: React.MouseEventHandler<HTMLButtonElement>;
  formValues: ContractDateInterface;
  setContractDateInParent: (
    formType: string,
    formValues: ContractDateInterface
  ) => void;
}

const ContractDateView: React.FC<ContractDateViewProps> = ({
  nextHandler,
  prevHandler,
  formValues,
  setContractDateInParent,
}) => {
  const [validated, setValidated] = useState(false);
  const [dateValues, setDateValues] = useState<ContractDateInterface>({
    ondate: formValues.ondate,
  });

  const handleChange = (date: Date | null | string): void => {
    setDateValues({
      ...dateValues,
      ondate: date?.toString() || "",
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    const form = event.currentTarget;
    event.preventDefault();
    event.stopPropagation();
    if (form.checkValidity() === true) {
      setContractDateInParent("contractDate", dateValues);
      nextHandler();
    }
    setValidated(true);
  };
  return (
    <>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <div className="row">
          <div className="col col-6">
            <h2 className="text-center">Contract Date</h2>
            <p>Please select the date on which this contract is agreed upon:</p>
            <BothDatePicker
              handleDateChange={handleChange}
              consultationDate={dateValues.ondate}
            />
          </div>
          <div className="col col-6 my-auto">
            <img
              style={
                localStorage.getItem("lang") === "ar"
                  ? { width: "80%" }
                  : { width: "100%" }
              }
              src={DatePickerImage}
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
