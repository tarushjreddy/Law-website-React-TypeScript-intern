import React from "react";

import { Form, Row, Col } from "react-bootstrap";

interface InputFieldProps {
  label: string;
  type: string;
  error: boolean;
  helperText: string;
  name: string;
  value: string | undefined;
  onChange: (e: React.ChangeEvent<HTMLInputElement & HTMLInputElement>) => void;
  disabled?: boolean;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  type,
  error,
  helperText,
  name,
  value,
  onChange,
  disabled,
}) => {
  return (
    <Form.Group className="container row" style={{ marginBottom: "2em" }}>
      <Form.Label
        className="col"
        style={{ display: "flex", alignItems: "center" }}
      >
        <h5>{label}</h5>
      </Form.Label>
      <Col>
        <Form.Control
          type={type}
          isInvalid={error}
          id={name}
          placeholder={label}
          name={name}
          value={value}
          onChange={onChange}
          readOnly={disabled}
        />
        <Form.Control.Feedback type="invalid">
          {helperText}
        </Form.Control.Feedback>
      </Col>
    </Form.Group>
  );
};

export default InputField;
