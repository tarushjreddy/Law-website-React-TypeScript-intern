import React, { useState, useDispatch, useGlobal } from "reactn";
import { useHistory, useParams } from "react-router-dom";
import { setUserDetailReducer } from "../../../../../../reducers";

import LinkListView from "./linklist.view";
interface Params {
  page: string;
}

const LinkList = () => {
  const [show, setShow] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const { page = "" } = useParams<Params>();
  const history = useHistory();
  const setGlobalUserDetail = useDispatch(setUserDetailReducer);
  const user = useGlobal("userDetail")[0];
  const dashboardSender = () => {
    history.push("/dashboard");
  };

  const profileSender = () => {
    history.push("/dashboard/profile");
  };

  const handleClose = () => {
    setShow(false);
    setGlobalUserDetail();
    if (!localStorage.getItem("AUTH_TOKEN")) {
      history.push("/");
    }
  };

  const logoutHandler = () => {
    setShow(true);
  };

  const confirmLogout = () => {
    localStorage.removeItem("AUTH_TOKEN");
    localStorage.removeItem("USER_DATA");
    setShowSuccess(true);
  };

  return (
    <LinkListView
      page={page}
      logoutHandler={logoutHandler}
      confirmLogout={confirmLogout}
      dashboardSender={dashboardSender}
      profileSender={profileSender}
      handleClose={handleClose}
      show={show}
      showSuccess={showSuccess}
      isProfileUpdated={!(user.mobile === "" || user.name === "")}
    />
  );
};

export default LinkList;
