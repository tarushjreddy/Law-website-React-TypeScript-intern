import React from "react";

import styles from "./linkdrawer.module.scss";
import LinkList from "./components/LinkList";
import LinkListPro from "./components/LinkListPro";

import { DatePicker } from "antd";
const LinkDrawerView = () => {
  return (
    <div className={styles["linkdrawContainer"]}>
      <div className={styles["drawerPaper"]}>
        <LinkListPro />
      </div>
    </div>
  );
};

export default LinkDrawerView;
