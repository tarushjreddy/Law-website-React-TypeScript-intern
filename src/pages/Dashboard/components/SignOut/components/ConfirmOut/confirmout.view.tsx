import React from "react";
import { Button, Modal } from "react-bootstrap";

interface ConfirmOutProps {
  confirmLogout: () => void;
  handleClose: () => void;
}

const ConfirmOut: React.FC<ConfirmOutProps> = ({
  confirmLogout,
  handleClose,
}) => {
  return (
    <>
      <Modal.Header>
        <Modal.Title>Are you sure you want to logout</Modal.Title>
      </Modal.Header>
      <Modal.Footer>
        <Button variant="secondary" onClick={confirmLogout}>
          Yes
        </Button>
        <Button variant="secondary" onClick={handleClose}>
          No
        </Button>
      </Modal.Footer>
    </>
  );
};

export default ConfirmOut;
