import React from "react";

import LeftSide from "./components/LeftSide";
import RightSide from "./components/RightSide";

const SignUpView = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: "20px",
      }}
    >
      <div>
        <RightSide />
      </div>
    </div>
  );
};

export default SignUpView;
