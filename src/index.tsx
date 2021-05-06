import React, { Suspense } from "react";
import ReactDOM from "react-dom";

// import "bootstrap/dist/css/bootstrap.min.css";
import "./i18n";

import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const lang = localStorage.getItem("lang") || "en";

const rtlCss =
  "https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.rtl.min.css";
const rtlIntegrity =
  "sha384-mUkCBeyHPdg0tqB6JDd+65Gpw5h/l8DKcCTV2D2UpaMMFd7Jo8A+mDAosaWgFBPl";

const ltrCss =
  "https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css";
// "https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css";

const ltrIntegrity =
  "sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2";
// "sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1";

const link: HTMLLinkElement | null = document.querySelector(
  "link#bootstrapCss"
);

if (link) {
  if (lang === "en") {
    document.documentElement.dir = "ltr";
    document.documentElement.lang = "en";
    link.href = ltrCss;
    link.integrity = ltrIntegrity;
  } else if (lang === "ar") {
    document.documentElement.dir = "rtl";
    document.documentElement.lang = "ar";
    link.href = rtlCss;
    link.integrity = rtlIntegrity;
  }
}

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<h1></h1>}>
      <App />
    </Suspense>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
