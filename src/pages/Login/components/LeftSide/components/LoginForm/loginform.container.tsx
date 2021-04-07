import React, { useState, useDispatch } from "reactn";
import { useHistory } from "react-router-dom";

import { setUserDetailReducer } from "../../../../../../reducers";
import { LoginResponseStatus, LoginValues } from "../../../../login.model";
import { login } from "../../../../../../services/apis";
import LoginFormView from "./loginform.view";
import { REDIRECT_TIME } from "../../../../../../constants";

interface LoginFormProps {
  popupFunction?: () => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ popupFunction }) => {
  const history = useHistory();
  const setGlobalUserDetail = useDispatch(setUserDetailReducer);
  const [validated, setValidated] = useState(false);
  const [loginValue, setLoginValue] = useState<LoginValues>({
    email: "",
    password: "",
    mobile: "",
  });
  const [response, setResponse] = useState<LoginResponseStatus>({
    status: "",
    msg: "",
  });

  const signIn = async () => {
    try {
      const loginResponse = await login({
        email: loginValue.email,
        password: loginValue.password,
      });
      console.log(loginResponse);
      const { status, message } = loginResponse;

      setResponse({
        status: status,
        msg: message,
      });

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

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    const form = event.currentTarget;
    console.log("login form===", form);
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    event.preventDefault();
    setValidated(true);
    signIn();
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
