import React from "react";

const root = {
  margin: "3%",
  width: "97%",
  height: "auto",
  padding: "0%",
};

const LoadingView = ({ text = "Loading..." }) => {
  return (
    <div style={root}>
      <div className="shadow p-3 mb-2 bg-white rounded">{text}</div>
    </div>
  );
};

export default LoadingView;
