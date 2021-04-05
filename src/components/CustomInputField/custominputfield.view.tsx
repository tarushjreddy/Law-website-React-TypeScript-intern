import React from "react";
import Form from "react-bootstrap/Form";

interface CustomInputFieldProps {
  label: string;
  type: string;
  id?: string;
  name: string;
  placeholder: string;
  errMess?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  isInvalid?: boolean;
  pattern?: string;
  classNameInput?: string;
  classNameInvalid?: string;
  value?: string | number;
  size?: string;
}

const CustomInputField: React.FC<CustomInputFieldProps> = ({
  label,
  type,
  id,
  name,
  placeholder,
  onChange,
  errMess,
  isInvalid,
  pattern,
  classNameInput,
  classNameInvalid,
  value,
  size,
}) => {
  return (
    <Form.Group
      style={
        localStorage.getItem("lang") === "ar"
          ? { direction: "rtl", marginBottom: "1rem", marginTop: "0.25rem" }
          : { direction: "ltr" }
      }
    >
      <label className={localStorage.getItem("lang") === "ar" ? "mb-1" : ""}>
        {label}
      </label>
      <Form.Control
        className={classNameInput}
        // size={size}
        style={
          localStorage.getItem("lang") === "ar"
            ? { direction: "rtl" }
            : { direction: "ltr" }
        }
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        required
        onChange={onChange}
        pattern={pattern}
        isInvalid={isInvalid}
        value={value}
      />
      <Form.Control.Feedback className={classNameInvalid} type="invalid">
        {errMess}
      </Form.Control.Feedback>
    </Form.Group>
  );
};

export default CustomInputField;
