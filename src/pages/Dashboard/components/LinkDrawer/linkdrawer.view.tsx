import React from "react";

import styles from "./linkdrawer.module.scss";
import LinkList from "./components/LinkList";

const LinkDrawerView = () => {
  return (
    <div className={styles["linkdrawContainer"]}>
      <div className={styles["drawerPaper"]}>
        <LinkList />
      </div>
    </div>
  );
};

export default LinkDrawerView;
