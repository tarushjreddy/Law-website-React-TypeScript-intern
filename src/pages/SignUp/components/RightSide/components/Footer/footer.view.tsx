import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import styles from "./footer.module.scss";

const FooterView = () => {
  const { t } = useTranslation("signup");
  return (
    <>
      <div className={styles["social-signup"]}>
        <h4>{t("text.or")}</h4>

        <div style={{ display: "none" }}>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a href="#" className={styles["fb-icon"]}>
            <i className="fa fa-facebook" />
          </a>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a href="#" className={styles["twitter-icon"]}>
            <i className="fa fa-twitter" />
          </a>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a href="#" className={styles["gp-icon"]}>
            <i className="fa fa-google-plus" />
          </a>
        </div>
        <p>
          {t("loginLink.part1")} <Link to="/login">{t("loginLink.part2")}</Link>
        </p>
      </div>
      <div className={styles["polyterm"]}>
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
