import React, { useState, useDispatch } from "reactn";
import { useHistory } from "react-router-dom";
import { REDIRECT_TIME } from "../../../../../../constants";
import { setUserDetailReducer } from "../../../../../../reducers";
import { signUp } from "../../../../../../services/apis";
import { SignUpResponseStatus, SignUpValues } from "../../../../signup.model";
import SignUpFormView from "./signupform.view";

interface SignUpFormProps {
  popupFunction?: () => void;
}

const SignUpForm: React.FC<SignUpFormProps> = ({ popupFunction }) => {
  const history = useHistory();
  const setGlobalUserDetail = useDispatch(setUserDetailReducer);
  const [validated, setValidated] = useState(false);
  const [confirmValid, setConfirmValid] = useState(false);
  const [confirmErrMess, setConfirmErrMess] = useState("Required!!");

  const [signUpValue, setSignUpValue] = useState<SignUpValues>({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [response, setResponse] = useState<SignUpResponseStatus>({
    status: "",
    msg: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    let { name, value } = event.target;
    setSignUpValue({ ...signUpValue, [name]: value });
  };

  const register = async () => {
    const responseData = await signUp({
      email: signUpValue.email,
      password: signUpValue.password,
    });
    const { status, message } = responseData;

    setResponse({
      status: status,
      msg: message,
    });

    if (status === "Success") {
      localStorage.setItem("USER_DATA", JSON.stringify(responseData));
      localStorage.setItem("AUTH_TOKEN", responseData.data.token);

      setGlobalUserDetail();
      if (popupFunction) {
        popupFunction();
      } else {
        setTimeout(() => {
          // redirect user to profile update page
          history.push("/dashboard/profile");
          // history.push("/");
        }, REDIRECT_TIME);
      }
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    console.log(signUpValue);
    event.preventDefault();
    event.stopPropagation();

    const form = event.currentTarget;

    if (form.password.value !== form.confirmPassword.value) {
      setConfirmValid(true);
      setConfirmErrMess("Password does not match");
    } else if (form.checkValidity() === false) {
      setConfirmErrMess("Required!!");
    } else if (form.password.value === form.confirmPassword.value) {
      setConfirmValid(false);
      register();
      setConfirmErrMess("Password Matched");
    }
    setConfirmValid(false);
    setValidated(true);
  };

  return (
    <SignUpFormView
      confirmErrMess={confirmErrMess}
      confirmValid={confirmValid}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      signUpValue={signUpValue}
      response={response}
      validated={validated}
    />
  );
};

export default SignUpForm;
