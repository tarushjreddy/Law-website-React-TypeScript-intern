import React from "react";

import styles from "./customcheckbox.module.scss";

interface CustomCheckBoxViewProps {
  label: string;
  name: string;
  value: string;
  id: string;
  checked?: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const CustomCheckBoxView: React.FC<CustomCheckBoxViewProps> = ({
  label,
  name,
  value,
  id,
  onChange,
  checked = false,
}) => {
  return (
    <div className={styles["checkBoxContainer"]}>
      <label className={styles["checkBoxLabel"]}>
        {label}
        <input
          type="checkbox"
          name={name}
          value={value}
          onChange={onChange}
          checked={checked}
          id={id}
        />
        <span className={styles["checkMarkContainer"]}>
          <span></span>
        </span>
      </label>
    </div>
  );
};

export default CustomCheckBoxView;
