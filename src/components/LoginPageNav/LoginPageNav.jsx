import React from "react";
import "./LoginPageNav.css";

function LoginPageNav({ ProductionUrl }) {
  const url = window.location.href;
  const NewUrl = ProductionUrl + "/login";
  return (
    <div className="LoginPageNav_container">
      <div className="LoginPageNav_title">VEGGI 365</div>
      <div className="LoginPageNav_link">
        {url === NewUrl ? "Register" : "Login"}
      </div>
    </div>
  );
}

export default LoginPageNav;
