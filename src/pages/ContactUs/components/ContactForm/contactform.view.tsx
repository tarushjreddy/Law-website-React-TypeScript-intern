import React from "react";
import { useTranslation } from "react-i18next";

import styles from "./contactform.module.scss";
import Input from "./components/Input";

const ContactForm = () => {
  const { t } = useTranslation("contactus");
  return (
    <div>
      <h1>{t("contactUsForm.heading")}</h1>
      <h3 style={{ color: "grey" }}>{t("contactUsForm.text")}</h3>

      <Input label={t("contactUsForm.fields.nameLabel")} />
      <Input label={t("contactUsForm.fields.nameLabel")} />
      <Input label={t("contactUsForm.fields.nameLabel")} />

      <div className="form-group">
        <label>{t("contactUsForm.fields.messageLabel")}</label>
        <textarea
          rows={5}
          className={`form-control ${styles["input-field"]}`}
          style={{ resize: "none" }}
        ></textarea>
      </div>
      <div className={styles["login-btn"]}>
        <button
          type="submit"
          style={{
            width: "35%",
          }}
        >
          {t("contactUsForm.sendButton")}
        </button>
      </div>
    </div>
  );
};

export default ContactForm;
