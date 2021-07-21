import React from "react";

const ErrorBox = ({ msg }) => {
  return <div style={{ color: "red" }}>{msg ? msg : "Error"}</div>;
};

export default ErrorBox;
