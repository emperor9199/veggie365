import React from "react";

const ErrorBox = ({ msg }) => {
  return (
    <div
      style={{
        color: "white",
        fontSize: "1.2rem",
        fontWeight: "bold",
        backgroundColor: "#EE3F3C",
        marginBottom: "1rem",
        padding: ".5rem 1rem",
        borderRadius: ".5rem",
      }}
    >
      {msg ? msg : "Error"}
    </div>
  );
};

export default ErrorBox;
