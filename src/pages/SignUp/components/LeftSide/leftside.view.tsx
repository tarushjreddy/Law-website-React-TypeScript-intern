import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import styles from "./leftside.module.scss";

const LeftSideView = () => {
  const { t } = useTranslation("signup");
  return (
    <div className="col-sm-12 col-md-6 p-0">
      <div
        className={`text-center ${styles["my-login-content"]} ${styles["right-bg"]}`}
      >
        <div style={{ height: "90px" }} />
        <h1>
          {t("title.part1")} <br /> {t("title.part2")}
        </h1>
        <p>{t("description.part1")}</p>
        <div className={styles["login-text-strip"]} />
        <p className={styles["log-back"]}>{t("description.part2")}</p>
        <div className={styles["my-button"]}>
          <Link to="/login">{t("loginButtonText")}</Link>
        </div>
      </div>
    </div>
  );
};

export default LeftSideView;
