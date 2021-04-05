import React from "react";
import { Alert } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { useTranslation } from "react-i18next";
import CustomInputField from "../../../../../../components/CustomInputField";
import { SignUpValues } from "../../../../../../services/models";
import { SignUpResponseStatus } from "../../../../signup.model";

import styles from "./signupform.module.scss";

interface SignUpFormViewProps {
  validated: boolean;
  setValidated?: React.Dispatch<React.SetStateAction<boolean>>;
  confirmErrMess: string;
  confirmValid: boolean;
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
  handleChange,
  response,
}) => {
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
          type="email"
          id="email"
          name="email"
          onChange={handleChange}
          label={t("signUpFormFields.email.label")}
          placeholder={t("signUpFormFields.email.placeholder")}
          errMess={t("signUpFormFields.email.errMessage")}
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
          name="confirmPassword"
          onChange={handleChange}
          pattern={signUpValue.password}
          isInvalid={confirmValid}
          label={t("signUpFormFields.confirmPassword.label")}
          placeholder={t("signUpFormFields.confirmPassword.placeholder")}
          errMess={confirmErrMess}
        />
        <div className={styles["login-btn"]}>
          <div>
            <button type="submit">{t("singUpButtonText")}</button>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default SignUpFormView;
