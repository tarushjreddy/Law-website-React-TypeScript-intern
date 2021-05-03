import React, { useState, useDispatch, useGlobal } from "reactn";
import { useHistory, useParams } from "react-router-dom";
import { setUserDetailReducer } from "../../../../../../reducers";

import LinkListPro from "./linklist.view";

const LinkListCon = () => {
  return <LinkListPro />;
};

export default LinkListCon;
