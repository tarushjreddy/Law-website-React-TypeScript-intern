import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import ConfirmOut from "./components/ConfirmOut";
import SuccessOut from "./components/SuccessOut";
const root = {
  margin: "3%",
  width: "97%",
  height: "auto",
  padding: "0%",
};
interface SignOutProps {
  page: string;
  logoutHandler: () => void;
  dashboardSender: () => void;
  profileSender: () => void;
  handleClose: () => void;
  show: boolean;
  confirmLogout: () => void;
  showSuccess: boolean;
  isProfileUpdated: boolean;
}

const SignOut: React.FC<SignOutProps> = ({
  page,
  logoutHandler,
  dashboardSender,
  profileSender,
  handleClose,
  show,
  confirmLogout,
  showSuccess,
  isProfileUpdated,
}) => {
  const [open, setopen] = useState(false);
  return (
    <div style={root}>
      <Modal
        show={show}
        onHide={handleClose}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        {!showSuccess ? (
          <ConfirmOut confirmLogout={confirmLogout} handleClose={handleClose} />
        ) : (
          <SuccessOut handleClose={handleClose} />
        )}
      </Modal>
      <div className={`btn px-3 py-2 `} onClick={logoutHandler}></div>
      <Modal
        show={true}
        onHide={handleClose}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        {!showSuccess ? (
          <ConfirmOut confirmLogout={confirmLogout} handleClose={handleClose} />
        ) : (
          <SuccessOut handleClose={handleClose} />
        )}
      </Modal>
    </div>
  );
};

export default SignOut;
