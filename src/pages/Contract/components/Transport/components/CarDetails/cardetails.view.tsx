import React, { useState } from "react";
import { Form } from "react-bootstrap";

import DeliverableCollab from "../../../../../../assets/images/contract/cat collab.png";
import CustomInputField from "../../../../../../components/CustomInputField";
import { CarDetailsInterface } from "../../transport.model";
interface CarDetailsViewProps {
  prevHandler: () => void;
  nextHandler: () => void;
  defaultFormValues: CarDetailsInterface;
  setFormDataInParent: (
    formType: string,
    formValues: CarDetailsInterface
  ) => void;
}

const CarDetails: React.FC<CarDetailsViewProps> = ({
  nextHandler,
  prevHandler,
  setFormDataInParent,
  defaultFormValues,
}) => {
  const [validated, setValidated] = useState(false);
  const [formValues, setFormValues] = useState<CarDetailsInterface>({
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
      setFormDataInParent("carDetails", formValues);
      nextHandler();
    }
    setValidated(true);
  };
  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <div className="row">
        <div className="col col-6">
          <h2 className="text-center">Car Details</h2>
          <CustomInputField
            label="Modal"
            errMess="Please enter Modal."
            placeholder="Modal"
            id="modal"
            name="modal"
            type="text"
            value={formValues.modal}
            onChange={handleChange}
          />
          <CustomInputField
            label="Brand"
            errMess="Please enter Brand."
            placeholder="Brand"
            id="brand"
            name="brand"
            type="text"
            value={formValues.brand}
            onChange={handleChange}
          />
          <CustomInputField
            label="Plate Number"
            errMess="Please enter Plate Number."
            placeholder="Plate Number"
            id="plate"
            name="plate"
            type="text"
            value={formValues.plate}
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

export default CarDetails;
