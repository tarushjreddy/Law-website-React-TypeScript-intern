import React, { useState } from "react";
import { Alert } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useTranslation } from "react-i18next";
import CustomInputField from "../../../../../../components/CustomInputField";
import { SignUpValues } from "../../../../../../services/models";
import { SignUpResponseStatus } from "../../../../signup.model";
import BootstrapSwitchButton from "bootstrap-switch-button-react";

import styles from "./signupform.module.scss";
// import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from "mdbreact";

interface SignUpFormViewProps {
  validated: boolean;
  setValidated?: React.Dispatch<React.SetStateAction<boolean>>;
  confirmErrMess: string;
  confirmValid: boolean;
  handleShow: boolean;
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
  handleChange,
  response,
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
        {response.msg}
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
          isInvalid={confirmValid}
          label={t("signUpFormFields.firstname.label")}
          placeholder={t("signUpFormFields.firstname.placeholder")}
          errMess={confirmErrMess}
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
          errMess={t("signUpFormFields.mobile.errMessage")}
        />

        <div className={styles["login-btn"]}>
          <div>
            <button type="submit">{t("singUpButtonText")}</button>
            {/* type="submit" */}
          </div>
        </div>
      </Form>
      <label> Sign Up as</label>
      {/* <form style={{ display: "flex" }}>
        <div
          style={{
            display: "flex",
            marginRight: "20px",
            textAlign: "center",
            alignItems: "center",

            flexDirection: "row",
          }}
        >
          <BootstrapSwitchButton checked={true} size="xs" />
          Lawyer
        </div>
      </form>{" "} */}

      {/* <Button variant="primary">Verify OTP</Button> */}
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
          <Button variant="primary" onClick={handleClose}>
            Verify
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default SignUpFormView;
