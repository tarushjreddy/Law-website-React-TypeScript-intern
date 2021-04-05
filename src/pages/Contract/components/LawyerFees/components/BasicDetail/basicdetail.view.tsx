import React from "react";
import { Form } from "react-bootstrap";

import DeliverableCollab from "../../../../../../assets/images/contract/cat collab.png";

const BasicDetail = () => {
  return (
    <div className="row">
      <div className="col col-6">
        <h2 className="text-center">Basic Details</h2>
        <form>
          <Form.Group controlId="name">
            <Form.Label>Full Name</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          <Form.Group controlId="nationality">
            <Form.Label>Nationality</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          <Form.Group controlId="IDnumber">
            <Form.Label>ID Number</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          <Form.Group controlId="resisndence">
            <Form.Label>Resisndence Number</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
        </form>
      </div>
      <div className="col col-6">
        <img src={DeliverableCollab} alt="Deliverable Collab" />
      </div>
    </div>
  );
};

export default BasicDetail;
