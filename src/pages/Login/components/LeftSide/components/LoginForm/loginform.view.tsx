import React, { useState, Component } from "react";
import { Form } from "react-bootstrap";
import { Alert } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import Modal from "react-bootstrap/Modal";

import Button from "react-bootstrap/Button";
import CustomInputField from "../../../../../../components/CustomInputField";
import {
  LoginResponseStatus,
  LoginValues,
  otpValues,
  LoginResponseOTPStatus,
} from "../../../../login.model";

import styles from "./loginform.module.scss";

interface LoginFormViewProps {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  SignIn: (event: React.MouseEvent<HTMLButtonElement>) => void;
  handleChangeOTP: (
    e: React.ChangeEvent<HTMLInputElement & HTMLInputElement>
  ) => void;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement & HTMLInputElement>
  ) => void;

  validated: boolean;

  handleShow: boolean;
  loginValue: LoginValues;

  response: LoginResponseStatus;
  responseotp: LoginResponseOTPStatus;
}

const LoginFormView: React.FC<LoginFormViewProps> = ({
  handleSubmit,
  validated,
  loginValue,
  handleChange,
  handleShow,
  SignIn,

  response,
  handleChangeOTP,
  responseotp,
}) => {
  const { t } = useTranslation("login");

  // state = { otp: "" };
  // if (responseotp.status === "Success") {
  //   setclose(true);
  // } else {
  //   setclose(false);
  // }
  // handleChange = (otp) => setOpt(true);
  return (
    <div className={styles["loginContainer"]}>
      <p>{t("loginFormHeading")}</p>
      <Alert
        show={responseotp.status === "Fail"}
        variant="danger"
        className={styles.alert}
      >
        Password wrong
      </Alert>
      <Alert
        show={responseotp.msg === "No Account Found!"}
        variant="danger"
        className={styles.alert}
      >
        No Account Found!
      </Alert>
      <Alert
        show={responseotp.status === "Success"}
        variant="success"
        className={styles.alert}
      >
        Succesfull correct
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

        <div className={styles["login-btn"]}>
          <button type="submit">{t("loginButtonText")}</button>
        </div>
      </Form>
      {/* <Button variant="secondary" onClick={handleShow}>
        Verify OTP
      </Button> */}

      <Modal show={handleShow} onHide={handleShow}>
        <Modal.Header>
          <Modal.Title>One Time Password Verification</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Alert
            show={response.status === "Wrong OTP"}
            variant="danger"
            style={{ width: "51%" }}
            className={styles.alert}
          >
            Please enter the correct OTP.
          </Alert>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            {/* <OTPInput
              length={6}
              className={styles["otpContainer"]}
              inputClassName={styles["otpInput"]}
              onChangeOTP={(otp) => {
                setOtp(otp);
                console.log("this is the otp val ", otpval);
              }}
            /> */}
            <Form>
              <CustomInputField
                label="Please enter the correct OTP."
                name="otp"
                type="text"
                placeholder="Enter the 6 digit OTP"
                classNameInput={styles["form-control"]}
                classNameInvalid={styles["invalid-feedback"]}
                onChange={handleChangeOTP}
                errMess={t("loginFormFields.password.errorMessage")}
              />
            </Form>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={SignIn}>
            Resend OTP
          </Button>
          <Button variant="primary" onClick={SignIn}>
            Verify
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default LoginFormView;
