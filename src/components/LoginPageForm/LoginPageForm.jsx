import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { userLogin } from "../../redux/actions/userActions";
import LoadingBox from "../../components/LoadingBox";
import ErrorBox from "../../components/ErrorBox";
import * as yup from "yup";
import "./LoginPageForm.css";

const schema = yup.object().shape({
  Email: yup.string().email().required(),
  Password: yup.string().required().min(3).max(12),
});

function LoginPageForm(props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  let history = useHistory();

  const dispatch = useDispatch();
  const { loading, user, error } = useSelector(
    (state) => state.userLoginReducer
  );

  const handleLogin = (data) => {
    dispatch(userLogin(data.Email, data.Password));
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (Object.keys(user).length) {
      history.push("/");
    }
  }, [history, user]);
  return (
    <div className="LoginPageForm_container common_flex">
      <div className="loginform_container">
        <div className="loginfrom_title common_flex">Login To Veggi365</div>
        {loading && <LoadingBox />}
        {error && <ErrorBox msg={error} />}
        <div className="loginform_form">
          <form onSubmit={handleSubmit(handleLogin)} noValidate>
            <div className="login_form_fields">
              <label htmlFor="Email" className="form_label">
                Email
              </label>
              <input
                type="text"
                name="Email"
                id="Email"
                placeholder="Email ID"
                className="loginform_input"
                {...register("Email", {
                  required: true,
                  pattern: /^[A-Za-z]+$/i,
                })}
              />
              <span className="error_msg">{errors.Email?.message}</span>
            </div>
            <div className="login_form_fields">
              <label htmlFor="Password" className="form_label">
                Password
              </label>
              <input
                type="password"
                name="Password"
                id="Password"
                placeholder="Password"
                className="loginform_input"
                {...register("Password", {
                  required: true,
                  minLength: 8,
                  maxLength: 12,
                })}
              />
              <span className="error_msg">{errors.Password?.message}</span>
            </div>
            <div className="login_form_fields_extra">
              <div
                className="forgot_password_field loginform_or_label"
                style={{ marginRight: ".9rem", cursor: "pointer" }}
              >
                Forgot Password
              </div>
            </div>
            <div
              className="login_form_fields"
              style={{ marginBottom: ".3rem" }}
            >
              <input
                type="submit"
                className="loginform_input_btn common_flex"
                value="Login"
              />
            </div>
          </form>
        </div>
        <div className="loginform_or_label common_flex">OR</div>
        <Link to="/signup" style={{ textDecoration: "none" }}>
          <div className="loginform_external_btn common_flex">
            Create Account
          </div>
        </Link>
      </div>
    </div>
  );
}

export default LoginPageForm;
