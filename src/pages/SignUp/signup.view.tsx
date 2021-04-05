import React from "react";

import LeftSide from "./components/LeftSide";
import RightSide from "./components/RightSide";

const SignUpView = () => {
  return (
    <div className="container-fluid h-100 d-flex flex-column">
      <div className="row h-100">
        <LeftSide />
        <RightSide />
      </div>
    </div>
  );
};

export default SignUpView;
