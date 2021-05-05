import React, { useState, useDispatch } from "reactn";
import { useHistory } from "react-router-dom";

import { setUserDetailReducer } from "../../../../../../reducers";
import {
  LoginResponseStatus,
  LoginValues,
  otpValues,
  LoginResponseOTPStatus,
  LoginPhoneValues,
} from "../../../../login.model";
import { login, Otp } from "../../../../../../services/apis";
import LoginFormView from "./loginform.view";
import { REDIRECT_TIME } from "../../../../../../constants";

interface LoginFormProps {
  popupFunction?: () => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ popupFunction }) => {
  const history = useHistory();
  const setGlobalUserDetail = useDispatch(setUserDetailReducer);
  const [validated, setValidated] = useState(false);
  const [phonenumber, setphonenumber] = useState("");
  const [handleClose, setShow] = useState(false);

  const [loginValue, setLoginValue] = useState<LoginValues>({
    email: "",
    password: "",
  });
  const [otpValue, setotpValue] = useState<otpValues>({
    otp: "",
  });
  const [response, setResponse] = useState<LoginResponseStatus>({
    status: "",

    msg: "",
  });
  const [responseotp, setResponseotp] = useState<LoginResponseOTPStatus>({
    status: "",

    msg: "",
  });

  const signIn = async (event: React.MouseEvent<HTMLButtonElement>) => {
    try {
      const loginResponse = await login({
        phone: phonenumber,
        code: "123456",
      });
      console.log("this is the login response", loginResponse);

      const { status, message } = loginResponse;

      setResponse({
        status: "status",
        msg: "message",
      });
      // setResponseotp({
      //   status: statusone,
      //   msg: messageone,
      // });
      console.log(status);
      if (status === "Success") {
        localStorage.setItem("USER_DATA", JSON.stringify(loginResponse));
        localStorage.setItem("AUTH_TOKEN", loginResponse.data.token);

        setGlobalUserDetail();
        if (popupFunction) {
          popupFunction();
        } else {
          setTimeout(() => {
            history.push("/");
          }, REDIRECT_TIME);
        }
      } else {
        setResponse({
          status: "Wrong OTP",
          msg: "Invalid user",
        });
      }
    } catch (error) {
      setResponse({
        status: "Wrong OTP",
        msg: "Invalid user",
      });
    }
  };

  const OtpIn = async () => {
    try {
      const OtpResponse = await Otp({
        email: loginValue.email,

        password: loginValue.password,
      });
      // console.log(OtpResponse.data[1]);
      console.log("this is the login response", OtpResponse);
      const { status, message } = OtpResponse;
      if (loginValue.email === "" || loginValue.password === "") {
        setResponseotp({
          status: "no cred",

          msg: "anoe",
        });
      } else {
        setResponseotp({
          status: status,

          msg: message,
        });
      }

      if (status === "Success") {
        setShow(true);
        const message = OtpResponse.data;
        // setphonenumber({
        //   message: message,

        //   phone: phone,
        // });
        console.log("this is the phone", message);
        let car = Object.values(message);
        console.log(car[1]);
        setphonenumber(car[1]);
      }
      // setShow(true);
      // console.log(handleClose);
    } catch (error) {}
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    const form = event.currentTarget;
    console.log("login form===", form);
    console.log(loginValue);

    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    event.preventDefault();
    setValidated(false);
    // // signIn();
    OtpIn();
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    let { name, value } = event.target;
    console.log(name, value);
    setLoginValue({ ...loginValue, [name]: value });
  };

  const handleChangeOTP = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    let { name, value } = event.target;
    console.log(name, value);
    setotpValue({ ...otpValue, [name]: value });
    console.log(otpValue.otp);
  };

  return (
    <LoginFormView
      handleSubmit={handleSubmit}
      validated={validated}
      SignIn={signIn}
      loginValue={loginValue}
      handleShow={handleClose}
      handleChange={handleChange}
      handleChangeOTP={handleChangeOTP}
      responseotp={responseotp}
      response={response}
    />
  );
};

export default LoginForm;
