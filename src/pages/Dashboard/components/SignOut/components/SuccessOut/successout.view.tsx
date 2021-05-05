import React from "react";
import { Button, Modal } from "react-bootstrap";

interface SuccessOutProps {
  handleClose: () => void;
}

const SuccessOut: React.FC<SuccessOutProps> = ({ handleClose }) => {
  return (
    <>
      <Modal.Header>
        <Modal.Title>SignOut Successful</Modal.Title>
      </Modal.Header>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          close
        </Button>
      </Modal.Footer>
    </>
  );
};

export default SuccessOut;
