import React, { useState } from "react";

import { Form } from "react-bootstrap";

import DeliverableCollab from "../../../../assets/images/contract/cat collab.png";
import { TextInfoInterface } from "../../court.model";

interface AdditionalTextInfoProps {
  nextHandler: () => void;
  prevHandler: React.MouseEventHandler<HTMLButtonElement>;
  addTextValues: TextInfoInterface;
  setFormDataInParent: (formType: string, formValues: any) => void;
}

const AdditionalTextInfo: React.FC<AdditionalTextInfoProps> = ({
  nextHandler,
  prevHandler,
  addTextValues,
  setFormDataInParent,
}) => {
  const [validated, setValidated] = useState(false);
  const [addTextData, setAddTextData] = useState<TextInfoInterface>({
    textDetail: addTextValues.textDetail,
  });
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    const form = event.currentTarget;
    event.preventDefault();
    event.stopPropagation();
    if (form.checkValidity() === true) {
      setFormDataInParent("textInfo", addTextData);
      nextHandler();
    }
    setValidated(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    let { name, value } = e.target;
    setAddTextData({ ...addTextData, [name]: value });
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <div className="row">
        <div className="col col-6">
          <h2 className="text-center">Additional Information</h2>
          <Form.Group
            style={
              localStorage.getItem("lang") === "ar"
                ? { marginBottom: "1rem", marginTop: "0.25rem" }
                : {}
            }
          >
            <Form.Label>Please Provide Additional Information</Form.Label>
            <Form.Control
              as="textarea"
              id="textDetail"
              name="textDetail"
              style={{ resize: "none" }}
              placeholder="Additional detail"
              required
              onChange={handleChange}
              value={addTextData.textDetail}
              rows={3}
            />
            <Form.Control.Feedback type="invalid">
              Required
            </Form.Control.Feedback>
          </Form.Group>
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

export default AdditionalTextInfo;
