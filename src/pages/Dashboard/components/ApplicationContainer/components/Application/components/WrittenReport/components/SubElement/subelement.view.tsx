import React from "react";

import styles from "../../writtenreport.module.scss";

interface SubElementProps {
  label: string;
  value: string;
}

const SubElement: React.FC<SubElementProps> = ({ label, value }) => {
  return (
    <div className={styles["subElement"]}>
      <p>{label}</p>
      <p>{value}</p>
    </div>
  );
};

export default SubElement;
