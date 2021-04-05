import React, { useDispatch, useEffect, useState } from "reactn";
import { BrowserRouter as Router } from "react-router-dom";
import { useTranslation } from "react-i18next";

import "./App.css";
import Routes from "./Routes";
import { setUserDetailReducer } from "./reducers";

const App = () => {
  const setGlobalUserDetail = useDispatch(setUserDetailReducer);
  setGlobalUserDetail();
  const { i18n } = useTranslation();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    i18n.changeLanguage(localStorage.getItem("lang") || "en");
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return <Router>{!isLoading ? <Routes /> : <h1>Loading...</h1>}</Router>;
};

export default App;
