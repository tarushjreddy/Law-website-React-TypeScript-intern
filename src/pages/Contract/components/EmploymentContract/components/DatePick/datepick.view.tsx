import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Form } from "react-bootstrap";

import DatePickerImage from "../../../../../../assets/images/contract/date picker.jpg";
import BothDatePicker from "../../../../../../components/BothDatePicker";
import { ContractDateInterface } from "../../employmentcontract.model";

interface ContractDateViewProps {
  nextHandler: () => void;
  prevHandler: () => void;
  setFormDataInParent: (formType: string, formValues: any) => void;
}

const DatePickView: React.FC<ContractDateViewProps> = ({
  prevHandler,
  nextHandler,
  setFormDataInParent,
}) => {
  const { t } = useTranslation("contract");

  const [validated, setValidated] = useState(false);
  const [formValues, setFormValues] = useState<ContractDateInterface>({
    date: "",
  });

  const handleChange = (date: Date | null | string): void => {
    setFormValues({
      ...formValues,
      date: date?.toString() || "",
    });
  };

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

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <div className="row">
        <div
          className="col col-6 row align-items-center"
          style={{ height: "15em" }}
        >
          <div className="col-12">
            <h2 className="text-center">
              {t("categoryForm.datePick.heading")}
            </h2>
          </div>
          <div className="col-12">
            <BothDatePicker
              handleDateChange={handleChange}
              consultationDate={formValues.date}
            />
          </div>
        </div>
        <div className="col col-6 my-auto">
          <img
            src={DatePickerImage}
            style={
              localStorage.getItem("lang") === "ar"
                ? { width: "80%" }
                : { width: "100%" }
            }
            alt="Date Picker"
          />
        </div>
      </div>
      <div
        className="col-12 row justify-content-around align-content-center"
        style={{ height: "4em" }}
      >
        <div style={{ width: "auto" }}>
          <button className="btn btn-custom" onClick={prevHandler}>
            {t("categoryForm.text.previous")}
          </button>
        </div>
        <div style={{ width: "auto" }}>
          <button className="btn btn-custom" type="submit">
            {t("categoryForm.text.next")}
          </button>
        </div>
      </div>
    </Form>
  );
};

export default DatePickView;
