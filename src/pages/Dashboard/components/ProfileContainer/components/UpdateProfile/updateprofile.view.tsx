import React from "react";

import { Alert, Form, Row, Col, Button } from "react-bootstrap";

import { UpdateProfileValues } from "../../../../../../services/models";
import InputField from "../ChangePassword/components/InputField";

interface UpdateProfileViewProps {
  handleSubmit: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement & HTMLInputElement>
  ) => void;
  updateProfileValue: UpdateProfileValues;
  responseMessage: string;
  nameIsInvalid: {
    isInvalid: boolean;
    msg: string;
  };
  mobileIsInvalid: {
    isInvalid: boolean;
    msg: string;
  };
  addressIsInvalid: {
    isInvalid: boolean;
    msg: string;
  };
  typeOfSectorIsInvalid: {
    isInvalid: boolean;
    msg: string;
  };
  commerialRegisterIsInvalid: {
    isInvalid: boolean;
    msg: string;
  };
  checkIsSubmitButtonDisabled: () => boolean;
}

const UpdateProfileView: React.FC<UpdateProfileViewProps> = ({
  handleSubmit,
  handleChange,
  updateProfileValue,
  responseMessage,
  nameIsInvalid,
  mobileIsInvalid,
  addressIsInvalid,
  typeOfSectorIsInvalid,
  commerialRegisterIsInvalid,
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
              label="Name"
              type="text"
              error={nameIsInvalid.isInvalid}
              helperText={nameIsInvalid.msg}
              name="name"
              value={updateProfileValue.name}
              onChange={handleChange}
            />

            <InputField
              label="Email"
              type="text"
              error={false}
              helperText=""
              name="email"
              value={updateProfileValue.email}
              onChange={handleChange}
              disabled={true}
            />

            <InputField
              label="Phone No."
              type="text"
              error={mobileIsInvalid.isInvalid}
              helperText={mobileIsInvalid.msg}
              name="mobile"
              value={updateProfileValue.mobile}
              onChange={handleChange}
            />
            <InputField
              label="Type of Sector"
              type="text"
              error={typeOfSectorIsInvalid.isInvalid}
              helperText={typeOfSectorIsInvalid.msg}
              name="typeOfSector"
              value={updateProfileValue.typeOfSector}
              onChange={handleChange}
            />
            <InputField
              label="Commercial Register/ ID Number"
              type="text"
              error={commerialRegisterIsInvalid.isInvalid}
              helperText={commerialRegisterIsInvalid.msg}
              name="commerialRegister"
              value={updateProfileValue.commerialRegister}
              onChange={handleChange}
            />
            <InputField
              label="Address"
              type="text"
              error={addressIsInvalid.isInvalid}
              helperText={addressIsInvalid.msg}
              name="address"
              value={updateProfileValue.address}
              onChange={handleChange}
            />
          </Form>
          <div className="mt-5 mr-5 mb-2 text-center">
            <button
              className="btn btn-custom"
              onClick={handleSubmit}
              disabled={
                nameIsInvalid.isInvalid ||
                mobileIsInvalid.isInvalid ||
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

export default UpdateProfileView;
