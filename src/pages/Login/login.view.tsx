import React from "react";

import LeftSide from "./components/LeftSide";
import RightSide from "./components/RightSide";

const LoginView = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <div>
        <LeftSide />
      </div>
    </div>
  );
};

export default LoginView;
