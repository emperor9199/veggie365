import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { userRegister } from "../../redux/actions/userActions";
import LoadingBox from "../../components/LoadingBox";
import ErrorBox from "../../components/ErrorBox";
import { RegisterContainer } from "./Style";

const RegistrationScreen = (props) => {
  const dispatch = useDispatch();
  const { loading, user, error } = useSelector(
    (state) => state.userRegistrationReducer
  );

  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignin = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Password and Confirm Password does not match");
    } else {
      dispatch(userRegister(name, mobile, email, password));
    }
  };

  useEffect(() => {
    if (Object.keys(user).length) {
      props.history.push("/");
    }
  }, [props.history, user]);

  return (
    <RegisterContainer>
      <form onSubmit={handleSignin}>
        {loading && <LoadingBox />}
        {error && <ErrorBox msg={error} />}
        <div className="form-container">
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="mobile">Mobile No</label>
            <input
              type="text"
              name="name"
              onChange={(e) => setMobile(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="confirm-password">Confirm Password</label>
            <input
              type="password"
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <div>
            <button type="submit" className="general-button">
              Register
            </button>
          </div>
          <Link to="/signin">
            <p>Already a user? Login</p>
          </Link>
        </div>
      </form>
    </RegisterContainer>
  );
};

export default RegistrationScreen;
