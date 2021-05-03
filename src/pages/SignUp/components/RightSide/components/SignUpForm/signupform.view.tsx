import React, { useState } from "react";
import { Alert } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useTranslation } from "react-i18next";
import CustomInputField from "../../../../../../components/CustomInputField";
import { SignUpValues, OtpValues } from "../../../../../../services/models";
import { SignUpResponseStatus } from "../../../../signup.model";
import Switch from "@material-ui/core/Switch";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";

import styles from "./signupform.module.scss";
import { purple } from "@material-ui/core/colors";
// import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from "mdbreact";

interface SignUpFormViewProps {
  validated: boolean;
  SignUp: (event: React.MouseEvent<HTMLButtonElement>) => void;
  setValidated?: React.Dispatch<React.SetStateAction<boolean>>;
  confirmErrMess: string;
  confirmValid: boolean;
  handleShow: boolean;
  // responseotp: string;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  signUpValue: SignUpValues;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  response: SignUpResponseStatus;
}

const SignUpFormView: React.FC<SignUpFormViewProps> = ({
  validated,
  handleSubmit,
  confirmErrMess,
  confirmValid,
  signUpValue,
  handleShow,
  SignUp,
  handleChange,
  response,
  // responseotp,
}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const { t } = useTranslation("signup");
  return (
    <div className={`${styles["signUpContainer"]}`}>
      <p>{t("signUpFormHeading")}</p>
      <Alert
        className={styles.alert}
        show={response.status === "Fail"}
        variant="danger"
      >
        Account Already Registered
      </Alert>
      <Alert
        className={styles.alert}
        show={response.status === "Success"}
        variant="success"
      >
        {response.msg}
      </Alert>
      <Form
        className="text-left"
        noValidate
        validated={validated}
        onSubmit={handleSubmit}
      >
        <CustomInputField
          type="text"
          id="first_name"
          name="first_name"
          onChange={handleChange}
          label={t("signUpFormFields.firstname.label")}
          placeholder={t("signUpFormFields.firstname.placeholder")}
          errMess={t("signUpFormFields.firstname.errMessage")}
        />
        <CustomInputField
          type="text"
          id="last_name"
          name="last_name"
          onChange={handleChange}
          label={t("signUpFormFields.lastname.label")}
          placeholder={t("signUpFormFields.lastname.placeholder")}
          errMess={t("signUpFormFields.lastname.errMessage")}
        />
        <CustomInputField
          type="email"
          id="email"
          name="email"
          onChange={handleChange}
          label={t("signUpFormFields.email.label")}
          placeholder={t("signUpFormFields.email.placeholder")}
          errMess={t("signUpFormFields.lastname.errMessage")}
        />
        <CustomInputField
          type="password"
          id="password"
          name="password"
          onChange={handleChange}
          label={t("signUpFormFields.password.label")}
          placeholder={t("signUpFormFields.password.placeholder")}
          errMess={t("signUpFormFields.password.errMessage")}
        />
        <CustomInputField
          type="password"
          id="confirmPassword"
          name="cpassword"
          onChange={handleChange}
          pattern={signUpValue.password}
          isInvalid={confirmValid}
          label={t("signUpFormFields.confirmPassword.label")}
          placeholder={t("signUpFormFields.confirmPassword.placeholder")}
          errMess={confirmErrMess}
        />
        <CustomInputField
          type="tel"
          id="mobile"
          name="phone"
          onChange={handleChange}
          label={t("signUpFormFields.mobile.label")}
          placeholder={t("signUpFormFields.mobile.placeholder")}
          errMess={confirmErrMess}
        />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <FormControlLabel
            control={<Switch color="primary" />}
            label="Sign up as Lawyer"
          />
        </div>
        <div className={styles["login-btn"]}>
          <div>
            <button type="submit">{t("singUpButtonText")}</button>
            {/* type="submit" */}
          </div>
        </div>
      </Form>

      <Modal show={handleShow} onHide={handleShow}>
        <Modal.Header>
          <Modal.Title>One Time Password Verification</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <CustomInputField
            label={t("signUpFormFields.otp.label")}
            name="mobile"
            type="tel"
            placeholder={t("signUpFormFields.otp.placeholder")}
            classNameInput={styles["form-control"]}
            classNameInvalid={styles["invalid-feedback"]}
            onChange={handleChange}
            errMess={t("signUpFormFields.otp.errorMessage")}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={SignUp}>
            Resend OTP
          </Button>
          <Button variant="primary" onClick={SignUp}>
            Verify
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default SignUpFormView;
