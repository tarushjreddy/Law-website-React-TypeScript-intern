import React, { useState } from "react";
import { Form } from "react-bootstrap";

import DeliverableCollab from "../../../../../../assets/images/contract/cat collab.png";
import CustomInputField from "../../../../../../components/CustomInputField";
import { TravelExpenseInterface } from "../../lawyerfees.model";
interface TravelExpenseProps {
  nextHandler: () => void;
  prevHandler: React.MouseEventHandler<HTMLButtonElement>;
  formValues: TravelExpenseInterface;
  setTravelExpenseInParent: (
    formType: string,
    formValues: TravelExpenseInterface
  ) => void;
}
const TravelExpense: React.FC<TravelExpenseProps> = ({
  nextHandler,
  prevHandler,
  formValues,
  setTravelExpenseInParent,
}) => {
  const [validated, setValidated] = useState(false);
  const [travelExpenseData, setTravelExpenseValues] = useState<
    TravelExpenseInterface
  >({
    travel: formValues.travel,
    amount: formValues.amount,
  });
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    const form = event.currentTarget;
    event.preventDefault();
    event.stopPropagation();
    if (form.checkValidity() === true) {
      setTravelExpenseInParent("travelExpenseDetail", travelExpenseData);
      nextHandler();
    }
    setValidated(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    let { name, value } = e.target;
    setTravelExpenseValues({ ...travelExpenseData, [name]: value });
  };
  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <div className="row">
        <div className="col col-6">
          <h2 className="text-center">Travel Expense</h2>

          <Form.Group>
            <Form.Label>
              Is the lawyer required to travel out of the city
            </Form.Label>
            <Form.Control
              className="form-select"
              as="select"
              custom
              value={travelExpenseData.travel}
              name="travel"
              onChange={handleChange}
            >
              <option>Yes</option>
              <option>No</option>
            </Form.Control>
          </Form.Group>
          {travelExpenseData.travel === "Yes" && (
            <>
              <CustomInputField
                label="Total Amount"
                placeholder="Total Amount"
                errMess="Enter Total Amount."
                id="amount"
                name="amount"
                type="number"
                pattern="[0-9]{10,}"
                value={travelExpenseData.amount}
                onChange={handleChange}
              />
              <p>
                The second party bears the travel and accommodation costs of the
                first party with a round-trip airfare, business class, housing
                costs, and transportation. Under a commitment to pay the amount
                from the second party after raising an invoice from the first
                party for it
              </p>
            </>
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

export default TravelExpense;
