import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "./SignUpPageForm.css";

const Contactno = /^[6-9]\d{9}$/;
const schema = yup.object().shape({
  FirstName: yup.string().required("First Name is Required").max(10),
  LastName: yup.string().required("Last Name is Required").max(10),
  Email: yup.string().email().required("Email is Required"),
  Contactno: yup
    .string()
    .required("Contat No is Required")
    .matches(Contactno, "Contact No is Not Valid"),
  Password: yup.string().required("Password is Required").min(8).max(12),
  ConfirmPass: yup
    .string()
    .oneOf([yup.ref("Password"), null], "Passwords must match"),
});

function SignUpPageForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const handleSignup = (data) => {
    console.log("data", data);
  };

  return (
    <div className="LoginPageForm_container common_flex">
      <div className="signupform_container">
        <div className="loginfrom_title common_flex">Register</div>
        <div className="loginform_form">
          <form onSubmit={handleSubmit(handleSignup)}>
            <div className="signupform_field">
              <div className="sec1">
                <div className="login_form_fields">
                  <label htmlFor="Name" className="form_label">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="FirstName"
                    id="FirstName"
                    placeholder="Enter First Name"
                    className="Signupform_input"
                    {...register("FirstName")}
                  />
                  <span className="error_msg">{errors.FirstName?.message}</span>
                </div>
              </div>
              <div className="sec2">
                <div className="login_form_fields">
                  <label htmlFor="Name" className="form_label">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="Last Name"
                    id="LastName"
                    placeholder="Enter Last Name"
                    className="Signupform_input"
                    {...register("LastName")}
                  />
                  <span className="error_msg">{errors.LastName?.message}</span>
                </div>
              </div>
            </div>

            <div className="signupform_field">
              <div className="sec1">
                <div className="login_form_fields">
                  <label htmlFor="Email" className="form_label">
                    Email
                  </label>
                  <input
                    type="text"
                    name="Email"
                    id="Email"
                    placeholder="Enter Email"
                    className="Signupform_input"
                    {...register("Email")}
                  />
                  <span className="error_msg">{errors.Email?.message}</span>
                </div>
              </div>
              <div className="sec2">
                <div className="login_form_fields">
                  <label htmlFor="Contactno" className="form_label">
                    Contact No
                  </label>
                  <input
                    type="text"
                    name="Contactno"
                    id="Contactno"
                    placeholder="Enter Contact No"
                    className="Signupform_input"
                    {...register("Contactno")}
                  />
                  <span className="error_msg">{errors.Contactno?.message}</span>
                </div>
              </div>
            </div>

            <div className="signupform_field">
              <div className="sec1">
                <div className="login_form_fields">
                  <label htmlFor="Password" className="form_label">
                    Password
                  </label>
                  <input
                    type="password"
                    name="Password"
                    id="Password"
                    placeholder="Enter Password"
                    className="Signupform_input"
                    {...register("Password")}
                  />
                  <span className="error_msg">{errors.Password?.message}</span>
                </div>
              </div>
              <div className="sec2">
                <div className="login_form_fields">
                  <label htmlFor="ConfirmPass" className="form_label">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    name="ConfirmPass"
                    id="ConfirmPass"
                    placeholder="Enter Confirm Password"
                    className="Signupform_input"
                    {...register("ConfirmPass")}
                  />
                  <span className="error_msg">
                    {errors.ConfirmPass?.message}
                  </span>
                </div>
              </div>
            </div>

            <div
              className="login_form_fields"
              style={{ marginBottom: ".3rem" }}
            >
              <input
                type="submit"
                className="signupform_input_btn common_flex"
                value="Sign Up"
              />
            </div>
          </form>
        </div>
        <div className="loginform_or_label common_flex">OR</div>
        <div className="signupform_external_btn common_flex">Login</div>
      </div>
    </div>
  );
}

export default SignUpPageForm;
