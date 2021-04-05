import React, { useState } from "react";
import { Form } from "react-bootstrap";

import TermsAndConditionsImage from "../../../../../../assets/images/contract/Upload.png";
interface fileTypeErrorType {
  isError: boolean;
  errorMsg: string;
}
interface TermsAndConditionsViewProps {
  currentStep: number;
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
  prevStep: number;
  prevHandler: React.MouseEventHandler<HTMLButtonElement>;
  categoryName?: string;
  setReviewInParent: (termsAndConditionsValues: any) => void;
}
const TermsAndConditionsView: React.FC<TermsAndConditionsViewProps> = ({
  prevHandler,
  prevStep,
  currentStep,
  setCurrentStep,
  categoryName,
  setReviewInParent,
}) => {
  const [showThankCard, setShowThank] = useState("false");
  const [fileTypeError, setFileTypeError] = useState({
    isError: false,
    errorMsg: "",
  });
  const [validated, setValidated] = useState(false);
  const [termsAndConditionsValues, setTermsAndConditionsValues] = useState({
    additionalInfo: "",
    file: null,
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    let { name } = e.target;
    if (name === "additionalInfo") {
      setTermsAndConditionsValues({
        ...termsAndConditionsValues,
        [name]: e.target.value,
      });
    } else {
      setTermsAndConditionsValues({
        ...termsAndConditionsValues,
        [name]: e.target.files,
      });
      setFileTypeError({
        isError: false,
        errorMsg: "",
      });
    }
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    const form = event.currentTarget;
    event.preventDefault();
    event.stopPropagation();
    if (form.checkValidity() === true) {
      setReviewInParent(termsAndConditionsValues);
      setCurrentStep(9);
    } else {
      if (termsAndConditionsValues.file === null) {
        setFileTypeError({
          isError: true,
          errorMsg: "Please Upload document",
        });
      }
    }
    setValidated(true);
  };

  const MainForm = (
    <>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <div className="row">
          <div className="col col-6">
            <h2 className="text-center">Upload Contract Document</h2>
            <p>
              Please upload the contract which falls under {categoryName}{" "}
              category, if you are looking upload some other document, please go
              to the contracts section.
            </p>
            <Form.Group
              controlId="termsandconditions"
              style={
                localStorage.getItem("lang") === "ar"
                  ? { marginBottom: "1rem", marginTop: "0.25rem" }
                  : {}
              }
            >
              <Form.Label>
                Provide any additional information if needed
              </Form.Label>
              <Form.Control
                name="additionalInfo"
                as="textarea"
                style={{ resize: "none" }}
                rows={4}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group
              style={
                localStorage.getItem("lang") === "ar"
                  ? { marginBottom: "1rem", marginTop: "0.25rem" }
                  : {}
              }
            >
              <Form.Label>Upload Document</Form.Label>
              <Form.File
                className="position-relative d-block"
                required
                name="file"
                id="document"
                onChange={handleChange}
                isInvalid={fileTypeError?.isError}
                feedbackTooltip
                feedback={fileTypeError?.errorMsg}
              />
            </Form.Group>
            <p>
              We will review your contract document and get back to you by the
              latest.
            </p>
          </div>

          <div className="col col-6">
            <img src={TermsAndConditionsImage} alt="Terms" />
          </div>
        </div>
        <div
          className="col-12 row justify-content-around align-content-center"
          style={{ height: "4em" }}
        >
          <div style={{ width: "auto" }}>
            <button
              className="btn btn-custom"
              onClick={() => setCurrentStep(prevStep)}
            >
              Previous
            </button>
          </div>
          <div style={{ width: "auto" }}>
            <button className="btn btn-custom" type="submit">
              Submit
            </button>
          </div>
        </div>
      </Form>
    </>
  );

  return <div>{MainForm}</div>;
};

export default TermsAndConditionsView;
