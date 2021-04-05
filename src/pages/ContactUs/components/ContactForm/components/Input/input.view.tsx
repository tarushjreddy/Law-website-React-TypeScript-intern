import React from "react";

import styles from "./input.module.scss";

interface InputProps {
  label: string;
}

const Input: React.FC<InputProps> = ({ label }) => {
  return (
    <div className="form-group">
      <label>{label}</label>
      <input type="text" className={`form-control ${styles["input-field"]}`} />
    </div>
  );
};

export default Input;
