import React, { useState } from "reactn";
import { changePassword } from "../../../../../../services/apis";

import { ChangePasswordValues } from "../../../../../../services/models";
import ChangePasswordView from "./changepassword.view";

const ChangePassword = () => {
  const defaultChangePasswordValues: ChangePasswordValues = {
    current: "",
    new: "",
    confirmNew: "",
  };

  const [changePasswordValue, setChangePasswordValue] = useState<
    ChangePasswordValues
  >(defaultChangePasswordValues);

  const [responseMessage, setResponseMessage] = useState("");
  const [currentIsInvalid, setCurrentIsInvalid] = useState({
    isInvalid: false,
    msg: "",
  });
  const [newIsInvalid, setNewIsInvalid] = useState({
    isInvalid: false,
    msg: "",
  });

  const [confirmNewIsInvalid, setConfirmNewIsInvalid] = useState({
    isInvalid: false,
    msg: "",
  });

  const handleSubmit = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    event.preventDefault();
    console.log("VALUE : ", changePasswordValue);

    (async () => {
      const responseData = await changePassword(changePasswordValue);
      // console.log("Response Data : ", responseData);

      const { message } = responseData;

      setResponseMessage(message);
      setChangePasswordValue(defaultChangePasswordValues);

      setTimeout(() => {
        setResponseMessage("");
      }, 5000);
    })();
  };

  const handleChange1 = (event: React.ChangeEvent<HTMLInputElement>): void => {
    let value = event.target.value;
    setChangePasswordValue({ ...changePasswordValue, current: value });
    if (value === "") {
      setCurrentIsInvalid({
        isInvalid: true,
        msg: "Required!!",
      });
    } else {
      setCurrentIsInvalid({
        isInvalid: false,
        msg: "",
      });
    }
  };

  const handleChange2 = (event: React.ChangeEvent<HTMLInputElement>): void => {
    let value = event.target.value;
    setChangePasswordValue((prev) => {
      prev.new = value;
      checkCurrentPassValidity();
      return prev;
    });
    if (value === "") {
      setNewIsInvalid({
        isInvalid: true,
        msg: "Required!!",
      });
    } else if (changePasswordValue.confirmNew !== value) {
      setNewIsInvalid({
        isInvalid: false,
        msg: "",
      });
      setConfirmNewIsInvalid({
        isInvalid: true,
        msg: "Password not match.",
      });
    } else {
      setConfirmNewIsInvalid({
        isInvalid: false,
        msg: "",
      });
      setNewIsInvalid({
        isInvalid: false,
        msg: "",
      });
    }
  };

  const checkCurrentPassValidity = () => {
    if (
      changePasswordValue.new &&
      changePasswordValue.confirmNew &&
      !changePasswordValue.current
    ) {
      setCurrentIsInvalid({
        isInvalid: true,
        msg: "Required!!",
      });
    }
  };

  const checkIsSubmitButtonDisabled = () => {
    if (
      !changePasswordValue.current ||
      !changePasswordValue.new ||
      !changePasswordValue.confirmNew
    )
      return true;

    return false;
  };

  const handleChange3 = (event: React.ChangeEvent<HTMLInputElement>): void => {
    let value = event.target.value;
    setChangePasswordValue((prev) => {
      prev.confirmNew = value;
      checkCurrentPassValidity();
      return prev;
    });
    if (value === "") {
      setConfirmNewIsInvalid({
        isInvalid: true,
        msg: "Required!!",
      });
    } else if (changePasswordValue.new !== value) {
      setConfirmNewIsInvalid({
        isInvalid: true,
        msg: "Password not match.",
      });
    } else {
      setConfirmNewIsInvalid({
        isInvalid: false,
        msg: "",
      });
      setNewIsInvalid({
        isInvalid: false,
        msg: "",
      });
    }
  };

  return (
    <ChangePasswordView
      handleChange1={handleChange1}
      handleChange2={handleChange2}
      handleChange3={handleChange3}
      handleSubmit={handleSubmit}
      changePasswordValue={changePasswordValue}
      responseMessage={responseMessage}
      currentIsInvalid={currentIsInvalid}
      newIsInvalid={newIsInvalid}
      confirmNewIsInvalid={confirmNewIsInvalid}
      checkIsSubmitButtonDisabled={checkIsSubmitButtonDisabled}
    />
  );
};

export default ChangePassword;
