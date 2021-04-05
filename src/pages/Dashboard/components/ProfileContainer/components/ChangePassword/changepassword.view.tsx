import React from "react";

import { Alert, Form, Row, Col, Button } from "react-bootstrap";

import { ChangePasswordValues } from "../../../../../../services/models";
import InputField from "./components/InputField";

interface ChangePasswordViewProps {
  handleSubmit: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
  handleChange1: (
    e: React.ChangeEvent<HTMLInputElement & HTMLInputElement>
  ) => void;
  handleChange2: (
    e: React.ChangeEvent<HTMLInputElement & HTMLInputElement>
  ) => void;
  handleChange3: (
    e: React.ChangeEvent<HTMLInputElement & HTMLInputElement>
  ) => void;
  changePasswordValue: ChangePasswordValues;
  responseMessage: string;
  currentIsInvalid: {
    isInvalid: boolean;
    msg: string;
  };
  newIsInvalid: {
    isInvalid: boolean;
    msg: string;
  };
  confirmNewIsInvalid: {
    isInvalid: boolean;
    msg: string;
  };
  checkIsSubmitButtonDisabled: () => boolean;
}

const ChangePasswordView: React.FC<ChangePasswordViewProps> = ({
  handleSubmit,
  handleChange1,
  handleChange2,
  handleChange3,
  responseMessage,
  changePasswordValue,
  currentIsInvalid,
  newIsInvalid,
  confirmNewIsInvalid,
  checkIsSubmitButtonDisabled,
}) => {
  return (
    <div
      className="row justify-content-center align-content-center"
      style={{
        margin: "3%",
        width: "97%",
        height: "auto",
        padding: "0%",
      }}
    >
      <div
        className="justify-content-center"
        style={{
          width: "95%",
          padding: "3% 0%",
          display: "flex",
          border: "2px solid #b8a046",
          borderRadius: "10px",
          backgroundColor: "#f7f7f7",
        }}
      >
        <div className="container col-md-10">
          {responseMessage && (
            <Alert show={true} variant="success">
              {responseMessage}
            </Alert>
          )}
          <Form>
            <InputField
              label="Enter Current Password"
              type="password"
              error={currentIsInvalid.isInvalid}
              helperText={currentIsInvalid.msg}
              name="current"
              value={changePasswordValue.current}
              onChange={handleChange1}
            />

            <InputField
              label="Enter New Password"
              type="password"
              error={newIsInvalid.isInvalid}
              helperText={newIsInvalid.msg}
              name="new"
              value={changePasswordValue.new}
              onChange={handleChange2}
            />

            <InputField
              label="Confirm New Password"
              type="password"
              error={confirmNewIsInvalid.isInvalid}
              helperText={confirmNewIsInvalid.msg}
              name="confirmNew"
              value={changePasswordValue.confirmNew}
              onChange={handleChange3}
            />
          </Form>
          <div className="mt-5 mr-5 mb-2 text-center">
            <button
              className="btn btn-custom"
              onClick={handleSubmit}
              disabled={
                currentIsInvalid.isInvalid ||
                confirmNewIsInvalid.isInvalid ||
                newIsInvalid.isInvalid ||
                checkIsSubmitButtonDisabled()
              }
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangePasswordView;
