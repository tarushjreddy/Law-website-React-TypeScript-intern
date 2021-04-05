import React, { useState } from "react";
import { Form } from "react-bootstrap";

import CustomInputField from "../../../../components/CustomInputField";
import DeliverableCollab from "../../../../assets/images/contract/cat collab.png";
import { OfflinePlatformInterface } from "../../court.model";

interface CaseDetailsProps {
  setFormDataInParent: (formType: string, formValues: any) => void;
  nextHandler: () => void;
  prevHandler: () => void;
  platformValues: OfflinePlatformInterface;
}

const UserDetails: React.FC<CaseDetailsProps> = ({
  setFormDataInParent,
  nextHandler,
  prevHandler,
  platformValues,
}) => {
  const [validated, setValidated] = useState(false);
  const [offflinePlatformData, setOffflinePlatformData] = useState<
    OfflinePlatformInterface
  >({
    type: platformValues.type,
    address: platformValues.address,
  });
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    const form = event.currentTarget;
    event.preventDefault();
    event.stopPropagation();
    if (form.checkValidity() === true) {
      setFormDataInParent("offlinePlatform", offflinePlatformData);
      nextHandler();
      console.log(offflinePlatformData);
    }
    setValidated(true);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    let { name, value } = event.target;
    if (name === "type" && value === "Branch Office") {
      setOffflinePlatformData({
        ...offflinePlatformData,
        address: "Jeddah Office",
        [name]: value,
      });
    } else if (name === "type" && value === "External Location") {
      setOffflinePlatformData({
        ...offflinePlatformData,
        address: "",
        [name]: value,
      });
    } else {
      setOffflinePlatformData({ ...offflinePlatformData, [name]: value });
    }
  };
  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <div className="row">
        <div className="col col-6">
          <h2 className="text-center">Offline Platform Type</h2>
          <Form.Group
            style={
              localStorage.getItem("lang") === "ar"
                ? { marginBottom: "1rem", marginTop: "0.25rem" }
                : {}
            }
          >
            <Form.Label style={{ fontSize: "15px" }}>Location</Form.Label>
            <Form.Control
              className="form-select"
              as="select"
              custom
              required
              value={offflinePlatformData.type}
              name="type"
              onChange={handleChange}
            >
              <option>Branch Office</option>
              <option>External Location</option>
            </Form.Control>
          </Form.Group>
          {offflinePlatformData.type === "External Location" && (
            <Form.Group
              style={
                localStorage.getItem("lang") === "ar"
                  ? { marginBottom: "1rem", marginTop: "0.25rem" }
                  : {}
              }
            >
              <Form.Label>Address</Form.Label>
              <Form.Control
                as="textarea"
                id="address"
                name="address"
                style={{ resize: "none" }}
                placeholder="Address"
                required
                onChange={handleChange}
                value={offflinePlatformData.address}
                rows={3}
              />
              <Form.Control.Feedback type="invalid">
                Enter Address.
              </Form.Control.Feedback>
            </Form.Group>
          )}
          {offflinePlatformData.type === "Branch Office" && (
            <Form.Group>
              <Form.Label style={{ fontSize: "15px" }}>
                Office Location
              </Form.Label>
              <Form.Control
                className="form-select"
                as="select"
                custom
                required
                value={offflinePlatformData.address}
                name="address"
                onChange={handleChange}
              >
                <option>Jeddah Office</option>
                <option>Madina Office</option>
                <option>Riyadh Office</option>
              </Form.Control>
            </Form.Group>
          )}
        </div>
        <div className="col col-6">
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

export default UserDetails;

//Jeddah Office, Madina Office, Riyadh Office
