import React, { useState, useDispatch } from "reactn";
import { useHistory } from "react-router-dom";

import { setUserDetailReducer } from "../../../../../../reducers";
import {
  LoginResponseStatus,
  LoginValues,
  otpValues,
  LoginResponseOTPStatus,
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
  const [result, setresult] = useState("");
  const [loginValue, setLoginValue] = useState<LoginValues>({
    email: "",
    password: "",
    mobile: "",
  });
  const [otpValue, setotpValue] = useState<otpValues>({
    email: "",
    password: "",
  });
  const [response, setResponse] = useState<LoginResponseStatus>({
    status: "",
    msg: "",
  });
  const [responseotp, setResponseotp] = useState<LoginResponseOTPStatus>({
    status: "",
    msg: "",
  });

  console.log("tarush", loginValue);
  const signIn = async () => {
    try {
      console.log("login values message", loginValue);
      const loginResponse = await login({
        email: loginValue.email,

        password: loginValue.password,
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
      } else console.log("error");
    } catch (error) {
      setResponse({
        status: "Fail",
        msg: "Invalid user",
      });
    }
  };
  const OtpIn = async () => {
    try {
      const OtpResponse = await Otp({
        email: otpValue.email,

        password: otpValue.password,
      });
      console.log("this is the login response", OtpResponse);

      // setResponseotp({
      //   status: statusone,
      //   msg: messageone,
      // });
    } catch (error) {}
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    const form = event.currentTarget;
    console.log("login form===", form);
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    event.preventDefault();
    setValidated(true);
    // signIn();
    OtpIn();
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    let { name, value } = event.target;
    setLoginValue({ ...loginValue, [name]: value });
  };

  return (
    <LoginFormView
      handleSubmit={handleSubmit}
      validated={validated}
      loginValue={loginValue}
      handleChange={handleChange}
      response={response}
    />
  );
};

export default LoginForm;
