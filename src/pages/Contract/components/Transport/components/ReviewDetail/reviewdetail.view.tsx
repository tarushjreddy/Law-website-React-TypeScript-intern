import React, { useState } from "react";
import { Form } from "react-bootstrap";

import UploadImage from "../../../../../../assets/images/contract/Upload.png";
import { ReviewDetailInterface } from "../../transport.model";

interface ReviewDetailViewProps {
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
  setReviewDetailInParent: React.Dispatch<
    React.SetStateAction<ReviewDetailInterface>
  >;
  defaultReviewDetail: ReviewDetailInterface;
}

const ReviewDetailView: React.FC<ReviewDetailViewProps> = ({
  setCurrentStep,
  defaultReviewDetail,
  setReviewDetailInParent,
}) => {
  const [validated, setValidated] = useState(false);
  const [reviewDetail, setReviewDetail] = useState<ReviewDetailInterface>({
    ...defaultReviewDetail,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, files, value } = e.target;

    if (name === "additionalInfo") {
      setReviewDetail({
        ...reviewDetail,
        [name]: value,
      });
    } else if (files?.length) {
      setReviewDetail({
        ...reviewDetail,
        [name]: files[0],
      });
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    const form = event.currentTarget;
    event.preventDefault();
    event.stopPropagation();
    if (form.checkValidity() === true) {
      setReviewDetailInParent(reviewDetail);
      setCurrentStep(10);
    }
    setValidated(true);
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <div className="row">
        <div className="col col-6">
          <h2 className="text-center">Upload Contract Document</h2>
          <p>
            Please upload the contract which falls under Employment category, if
            you are looking upload some other document, please go to the
            contracts section.
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
              required
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
              isInvalid={!reviewDetail.file && validated}
              feedbackTooltip
              feedback={
                !reviewDetail.file && validated ? "Please Upload document" : ""
              }
            />
          </Form.Group>
          <p>
            We will review your contract document and get back to you by the
            latest.
          </p>
        </div>

        <div className="col col-6">
          <img src={UploadImage} alt="Terms" />
        </div>
      </div>
      <div
        className="col-12 row justify-content-around align-content-center"
        style={{ height: "4em" }}
      >
        <div style={{ width: "auto" }}>
          <button className="btn btn-custom" onClick={() => setCurrentStep(13)}>
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
  );
};

export default ReviewDetailView;
