import React, { useState } from "reactn";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

import LoginForm from "../../pages/Login/components/LeftSide/components/LoginForm";
import SignUpForm from "../../pages/SignUp/components/RightSide/components/SignUpForm";

interface PopupProps {
  show: boolean;
  setter: React.Dispatch<React.SetStateAction<boolean>>;
  onHide: () => void;
  popupFunction: () => void;
}

interface SignUpCompProps {
  onHide: () => void;
  popupFunction: () => void;
}

const SignUpComp: React.FC<SignUpCompProps> = (props) => {
  /*if (status === "Success") {
      props.onHide();
      props.popupFunction();
  } */
  return <SignUpForm popupFunction={props.popupFunction} />;
};

const Popup: React.FC<PopupProps> = (props) => {
  const [loginShow, setLoginShow] = useState(true);
  const [backArrow, setBackArrow] = useState(false);
  const forLogin = () => {
    setLoginShow(true);
    setBackArrow(false);
  };
  const forSignUp = (event: any) => {
    event.preventDefault();
    setLoginShow(false);
    setBackArrow(true);
  };
  const BackButton = () => {
    return (
      <div className="my-button">
        <button onClick={() => forLogin()}>
          <ArrowBackIcon />
        </button>
      </div>
    );
  };
  const LoginComp = () => {
    /*if (status === "Success") {
      props.onHide();
      props.popupFunction();
    }*/
    return (
      <div>
        <LoginForm popupFunction={props.popupFunction} />
        <div style={{ textAlign: "center", color: "#4d4d4d" }}>
          <p>
            Don't have an account?{" "}
            <Link
              to=""
              onClick={(event) => forSignUp(event)}
              style={{ fontWeight: "bolder", color: "#b19940" }}
            >
              Sign up now
            </Link>
          </p>
        </div>
      </div>
    );
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {backArrow ? <BackButton /> : <div></div>}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {loginShow ? (
          <LoginComp />
        ) : (
          <SignUpComp
            onHide={props.onHide}
            popupFunction={props.popupFunction}
          />
        )}
      </Modal.Body>
      <Modal.Footer></Modal.Footer>
    </Modal>
  );
};

export default Popup;
