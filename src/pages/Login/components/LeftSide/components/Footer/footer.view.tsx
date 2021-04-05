import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import styles from "./footer.module.scss";

const FooterView = () => {
  const { t } = useTranslation("login");
  return (
    <>
      <div className={styles["social-signup"]}>
        <p>
          {t("signUpLink.part1")}{" "}
          <Link to="/signup">{t("signUpLink.part2")}</Link>
        </p>
      </div>

      <div className={styles.polyterm}>
        <p>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a href="#">{t("text.policy")}</a>
          <span> | </span>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a href="#">{t("text.termAndCondition")}</a>
        </p>
      </div>
    </>
  );
};

export default FooterView;
