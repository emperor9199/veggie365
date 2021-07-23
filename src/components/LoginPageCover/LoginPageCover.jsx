import React from 'react';
import loginIcon from "../../img/loginIcon.svg";
import signup from "../../img/signup.svg"
import "./LoginPageCover.css";

function LoginPageCover({ProductionUrl}) {
    const url = window.location.href;
    const NewUrl = ProductionUrl+"/login";
    return (
        <div className="LoginPageCover_container">
            <img className="loginpage_cover_img" src={url === NewUrl ? loginIcon : signup} alt="loginpage_cover" />
        </div>
    )
}

export default LoginPageCover
