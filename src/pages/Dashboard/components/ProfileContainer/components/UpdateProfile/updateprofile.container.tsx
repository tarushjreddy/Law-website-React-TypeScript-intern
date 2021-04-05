import React, { useState, useGlobal, useDispatch } from "reactn";
import { setUserDetailReducer } from "../../../../../../reducers";
import { updateUserProfile } from "../../../../../../services/apis";

import {
  LoginResponseSuccess,
  UpdateProfileValues,
} from "../../../../../../services/models";
import UpdateProfileView from "./updateprofile.view";

const UpdateProfile = () => {
  const { email, mobile, name } = useGlobal("userDetail")[0];
  const setGlobalUserDetail = useDispatch(setUserDetailReducer);

  const [updateProfileValue, setUpdateProfileValue] = useState<
    UpdateProfileValues
  >({
    name: name,
    email: email,
    mobile: mobile,
    address: "",
    typeOfSector: "",
    commerialRegister: "",
  });

  const [responseMessage, setResponseMessage] = useState("");

  const [nameIsInvalid, setNameIsInvalid] = useState({
    isInvalid: false,
    msg: "",
  });

  const [addressIsInvalid, setAddressIsInvalid] = useState({
    isInvalid: false,
    msg: "",
  });
  const [typeOfSectorIsInvalid, setTypeOfSectorIsInvalid] = useState({
    isInvalid: false,
    msg: "",
  });

  const [commerialRegisterIsInvalid, setCommerialRegisterIsInvalid] = useState({
    isInvalid: false,
    msg: "",
  });

  const [mobileIsInvalid, setMobileIsInvalid] = useState({
    isInvalid: false,
    msg: "",
  });

  const isNumber = (val: string) => !isNaN(Number(val));

  const handleSubmit = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    event.preventDefault();
    // console.log("VALUE : ", updateProfileValue);

    (async () => {
      const responseData = await updateUserProfile(updateProfileValue);
      console.log("Response Data : ", responseData);

      const { status, message } = responseData;

      setResponseMessage(message);

      setTimeout(() => {
        setResponseMessage("");
      }, 5000);

      if (status === "Success") {
        const USER_DATA: LoginResponseSuccess = JSON.parse(
          localStorage.getItem("USER_DATA") || "{}"
        );

        USER_DATA.data.user.name = responseData.data.name;
        USER_DATA.data.user.email = responseData.data.email;
        USER_DATA.data.user.phone = responseData.data.phone;

        localStorage.setItem("USER_DATA", JSON.stringify(USER_DATA));

        setGlobalUserDetail();
      } else console.log("error");
    })();
  };

  const checkIsSubmitButtonDisabled = () => {
    if (!updateProfileValue.name || !updateProfileValue.mobile) return true;

    return false;
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    let { name, value } = event.target;
    if (value === "" && name === "name") {
      setNameIsInvalid({
        isInvalid: true,
        msg: "Required!",
      });
    } else if (value !== "" && name === "name") {
      setNameIsInvalid({
        isInvalid: false,
        msg: "",
      });
    }
    if (value === "" && name === "mobile") {
      setMobileIsInvalid({
        isInvalid: true,
        msg: "Required!",
      });
    } else if (name === "mobile" && (!isNumber(value) || value.length < 9)) {
      setMobileIsInvalid({
        isInvalid: true,
        msg: "Invalid number!",
      });
    } else if (value.length >= 10 && name === "mobile") {
      setMobileIsInvalid({
        isInvalid: false,
        msg: "",
      });
    }
    if (value === "" && name === "address") {
      setAddressIsInvalid({
        isInvalid: true,
        msg: "Required!",
      });
    } else if (value !== "" && name === "address") {
      setAddressIsInvalid({
        isInvalid: false,
        msg: "",
      });
    }

    if (value === "" && name === "typeOfSector") {
      setTypeOfSectorIsInvalid({
        isInvalid: true,
        msg: "Required!",
      });
    } else if (value !== "" && name === "typeOfSector") {
      setTypeOfSectorIsInvalid({
        isInvalid: false,
        msg: "",
      });
    }

    if (value === "" && name === "commerialRegister") {
      setCommerialRegisterIsInvalid({
        isInvalid: true,
        msg: "Required!",
      });
    } else if (value !== "" && name === "commerialRegister") {
      setCommerialRegisterIsInvalid({
        isInvalid: false,
        msg: "",
      });
    }

    setUpdateProfileValue({ ...updateProfileValue, [name]: value });
  };

  return (
    <UpdateProfileView
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      updateProfileValue={updateProfileValue}
      responseMessage={responseMessage}
      nameIsInvalid={nameIsInvalid}
      mobileIsInvalid={mobileIsInvalid}
      addressIsInvalid={addressIsInvalid}
      typeOfSectorIsInvalid={typeOfSectorIsInvalid}
      commerialRegisterIsInvalid={commerialRegisterIsInvalid}
      checkIsSubmitButtonDisabled={checkIsSubmitButtonDisabled}
    />
  );
};

export default UpdateProfile;
