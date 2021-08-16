import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch, useSelector } from "react-redux";
import { userUpdate } from "../../redux/actions/userActions";
import LoadingBox from "../../components/LoadingBox";
import ErrorBox from "../../components/ErrorBox";
import { useHistory } from "react-router-dom";
import * as yup from "yup";

function UpdateForm(props) {
  const { user } = useSelector((state) => state.userLoginReducer);
  console.log(user);
  const Contactno = /^[6-9]\d{9}$/;
  // const userData = JSON.parse(localStorage.getItem("loggedUser"));
  const userPassword = user.user_password;

  const schema = yup.object().shape({
    FirstName: yup.string().required("First Name is Required").max(10),
    LastName: yup.string().required("Last Name is Required").max(10),
    Email: yup.string().email(),
    Contactno: yup.string().matches(Contactno, "Contact No is Not Valid"),
    Password: yup
      .string()
      .required("Password is Required")
      .matches(userPassword, "Not valid Password"),
    ConfirmPass: yup
      .string()
      .required("Confirm Password is Required")
      .min(6)
      .max(12),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  let historyTwo = useHistory();

  const FullName = user.user_name;
  const FirstName = FullName.split(" ")[0];
  const LastName = FullName.split(" ")[1];

  const dispatch = useDispatch();
  //   const { userID } = useSelector((state) => state.userLoginReducer);
  //   if (!Object.keys(userID).length) {
  //     historyTwo.push("/login");
  //   }

  const { loading, newUser } = useSelector(
    (state) => state.userRegistrationReducer
  );

  const handleSignup = (data) => {
    var fullName = data.FirstName + " " + data.LastName;
    dispatch(
      userUpdate(fullName, data.Contactno, data.Email, data.ConfirmPass)
    );

    historyTwo.push("/");
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  //   useEffect(() => {
  //     if (Object.keys(user).length) {
  //       historyTwo.push("/");
  //     }
  //   }, [props.history, user]);

  return (
    <div className="LoginPageForm_container common_flex">
      <div className="signupform_container">
        <div className="loginfrom_title common_flex">Update Profile</div>
        {loading && <LoadingBox />}
        {newUser && <ErrorBox msg={newUser} />}
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
                    defaultValue={FirstName}
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
                    defaultValue={LastName}
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
                    value={user.user_email}
                    disabled
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
                    value={user.user_phone}
                    disabled
                  />
                  <span className="error_msg">{errors.Contactno?.message}</span>
                </div>
              </div>
            </div>

            <div className="signupform_field">
              <div className="sec1">
                <div className="login_form_fields">
                  <label htmlFor="Password" className="form_label">
                    Old Password
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
                    New Password
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
                value="Update"
              />
            </div>
          </form>
        </div>
        {/* <div className="loginform_or_label common_flex">OR</div>
        <Link to="/login" style={{ textDecoration: "none" }}>
          <div className="signupform_external_btn common_flex">Login</div>
        </Link> */}
      </div>
    </div>
  );
}

export default UpdateForm;
