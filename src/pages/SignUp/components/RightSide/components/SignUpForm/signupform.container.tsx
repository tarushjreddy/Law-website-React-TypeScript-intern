import React, { useState, useDispatch } from "reactn";
import { useHistory } from "react-router-dom";
import { REDIRECT_TIME } from "../../../../../../constants";
import { setUserDetailReducer } from "../../../../../../reducers";
import { signUp, Otp } from "../../../../../../services/apis";
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
  const [handleClose, setShow] = useState(false);
  const [confirmErrMess, setConfirmErrMess] = useState("Required!!");

  const [signUpValue, setSignUpValue] = useState<SignUpValues>({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    password: "",
  });

  const [response, setResponse] = useState<SignUpResponseStatus>({
    status: "",
    msg: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    let { name, value } = event.target;
    console.log(name, value);
    setSignUpValue({ ...signUpValue, [name]: value });
  };

  const register = async () => {
    const responseData = await signUp({
      first_name: signUpValue.first_name,
      last_name: signUpValue.last_name,
      email: signUpValue.email,
      phone: signUpValue.phone,
      password: signUpValue.password,
    });
    const { status, message } = responseData;

    setResponse({
      status: status,
      msg: message,
    });
    console.log(status, message);
    if (status === "Success") {
      setShow(true);
    }
    // if (status === "Success") {
    //   localStorage.setItem("USER_DATA", JSON.stringify(responseData));
    //   localStorage.setItem("AUTH_TOKEN", responseData.data.token);

    //   setGlobalUserDetail();
    //   if (popupFunction) {
    //     popupFunction();
    //   } else {
    //     setTimeout(() => {
    //       // redirect user to profile update page
    //       history.push("/dashboard/profile");
    //       // history.push("/");
    //     }, REDIRECT_TIME);
    //   }
    // }
  };

  // const OtpIn = async () => {
  //   try {
  //     const OtpResponse = await Otp({
  //       email: loginValue.email,

  //       password: loginValue.password,
  //     });
  //     console.log("this is the login response", OtpResponse);
  //     const { status, message } = OtpResponse;

  //     setResponseotp({
  //       status: status,

  //       msg: message,
  //     });
  //     if (status === "Success") {
  //       setShow(true);
  //       console.log(handleClose);
  //     }
  //     // setShow(true);
  //     // console.log(handleClose);
  //   } catch (error) {}
  // };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    console.log(signUpValue);
    event.preventDefault();
    event.stopPropagation();

    const form = event.currentTarget;
    console.log(form);

    if (form.password.value !== form.confirmPassword.value) {
      setConfirmValid(true);
      setConfirmErrMess("Password does not match");
    } else if (form.checkValidity() === false) {
      setConfirmErrMess("Required!!");
    } else if (form.password.value === form.confirmPassword.value) {
      console.log("done");

      console.log(signUpValue);
      // setConfirmValid(false);
      register();
      // setConfirmErrMess("Password Matched");
    }
    // setConfirmValid(false);
    // setValidated(true);
  };

  return (
    <SignUpFormView
      confirmErrMess={confirmErrMess}
      confirmValid={confirmValid}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      handleShow={handleClose}
      signUpValue={signUpValue}
      response={response}
      validated={validated}
    />
  );
};

export default SignUpForm;
