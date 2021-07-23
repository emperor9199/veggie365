import React from "react";
import LoginPageCover from "../LoginPageCover/LoginPageCover";
import LoginPageForm from "../LoginPageForm/LoginPageForm";
import SignUpPageForm from "../SignUpPageForm/SignUpPageForm";
import LoginPageNav from "../LoginPageNav/LoginPageNav";
import "./LoginPage.css";

function LoginPage() {
  const url = window.location.href;
  const ProductionUrl = url.includes("http://localhost:3000")
    ? "http://localhost:3000"
    : "https://veggi.netlify.app";

  const renderForm = () => {
    if (url === `${ProductionUrl}/login`) {
      return <LoginPageForm />;
    } else if (url === `${ProductionUrl}/signup`) {
      return <SignUpPageForm />;
    }
  };
  return (
    <div className="Loginpage_container">
      <div className="loginpage_navbar">
        <LoginPageNav ProductionUrl={ProductionUrl} />
      </div>
      <div className="loginpage_content">
        <div className="loginpage_cover">
          <LoginPageCover ProductionUrl={ProductionUrl} />
        </div>
        <div className="loginpg_form_container">{renderForm()}</div>
      </div>
    </div>
  );
}

export default LoginPage;
