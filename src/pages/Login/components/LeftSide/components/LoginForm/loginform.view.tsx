import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Alert } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import CustomInputField from "../../../../../../components/CustomInputField";
import { LoginResponseStatus, LoginValues } from "../../../../login.model";
import OTPInput from "./components/OTPInput";
import styles from "./loginform.module.scss";

interface LoginFormViewProps {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement & HTMLInputElement>
  ) => void;

  validated: boolean;
  loginValue: LoginValues;
  response: LoginResponseStatus;
}

const LoginFormView: React.FC<LoginFormViewProps> = ({
  handleSubmit,
  validated,
  loginValue,
  handleChange,
  response,
}) => {
  const { t } = useTranslation("login");
  const [show, setShow] = useState(false);
  const [otp, setOpt] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // state = { otp: "" };

  handleChange = (otp) => setOpt(true);
  return (
    <div className={styles["loginContainer"]}>
      <p>{t("loginFormHeading")}</p>
      <Alert
        show={response.status === "Fail"}
        variant="danger"
        className={styles.alert}
      >
        {response.msg}
      </Alert>
      <Alert
        show={response.status === "Success"}
        variant="success"
        className={styles.alert}
      >
        {response.msg}
      </Alert>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <CustomInputField
          label={
            t("loginFormFields.email.label") +
            "    or   " +
            t("loginFormFields.mobile.label")
          }
          name="email"
          type="email"
          placeholder={t("loginFormFields.email.placeholder")}
          classNameInput={styles["form-control"]}
          classNameInvalid={styles["invalid-feedback"]}
          onChange={handleChange}
          errMess={t("loginFormFields.email.errMessage")}
        />
        {/* <h6 style={{ textAlign: "center" }}>or</h6>
        <CustomInputField
          label={t("loginFormFields.mobile.label")}
          name="mobile"
          type="tel"
          placeholder={t("loginFormFields.mobile.placeholder")}
          classNameInput={styles["form-control"]}
          classNameInvalid={styles["invalid-feedback"]}
          onChange={handleChange}
          errMess={t("loginFormFields.mobile.errorMessage")}
        /> */}

        <CustomInputField
          label={t("loginFormFields.password.label")}
          name="password"
          type="password"
          placeholder={t("loginFormFields.password.placeholder")}
          classNameInput={styles["form-control"]}
          classNameInvalid={styles["invalid-feedback"]}
          onChange={handleChange}
          errMess={t("loginFormFields.password.errorMessage")}
        />

        <div
          className={`${styles["form-check"]} ${styles["my-check"]}`}
          style={
            localStorage.getItem("lang") === "ar"
              ? undefined
              : { paddingLeft: "1.3rem" }
          }
        >
          <input type="checkbox" className="form-check-input" />
          <label className="form-check-label" style={{ fontSize: "17px" }}>
            {t("text.remember")}
          </label>
          <a
            href="forget_pass.html"
            style={{ paddingTop: "4px", paddingLeft: "15px" }}
          >
            {t("text.forgetPassword")}
          </a>
        </div>

        <div className={styles["login-btn"]} onClick={handleShow}>
          <button>{t("loginButtonText")}</button>
        </div>
      </Form>
      {/* <Button variant="secondary" onClick={handleShow}>
        Verify OTP
      </Button> */}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>One Time Password Verification</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <OTPInput
              autoFocus
              isNumberInput
              length={6}
              className={styles["otpContainer"]}
              inputClassName={styles["otpInput"]}
              onChangeOTP={(otp) => console.log("Number OTP: ", otp)}
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Verify
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default LoginFormView;
