import React from "react";
//import Breadcrumbs from "@material-ui/core/Breadcrumbs";
//import { Typography } from "@material-ui/core";
import styles from "./crumbsequence.module.scss";

interface CrumbSequenceViewProps {
  crumbs: any;
}

const CrumbSequenceView: React.FC<CrumbSequenceViewProps> = ({ crumbs }) => {
  const crumbCode = crumbs.map((crumb: any) => {
    return (
      <li className="breadcrumb-item" key={crumb}>
        {crumb}
      </li>
    );
  });

  return (
    <div className={styles["crumbs"]}>
      <ol className="breadcrumb p-0 m-0">{crumbCode}</ol>
    </div>
  );
};

export default CrumbSequenceView;
