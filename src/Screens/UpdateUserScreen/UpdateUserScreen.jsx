import React, { useState } from "react";
import {  useSelector } from "react-redux";
import { Link } from "react-router-dom";
import LoadingBox from "../../components/LoadingBox";
import ErrorBox from "../../components/ErrorBox";
import { UpdateContainer } from "./Style";

const UpdateUserScreen = (props) => {
  const { loading, user, error } = useSelector(
    (state) => state.userLoginReducer
  );

  console.log(user);
  const [name, setName] = useState(user.user_name);
  const [mobile, setMobile] = useState(user.user_phone);
  const [email, setEmail] = useState(user.user_email);
  const [password, setPassword] = useState(user.user_password);

  const handleSignin = (e) => {
    // e.preventDefault();
    // if (password !== confirmPassword) {
    //   alert("Password and Confirm Password does not match");
    // } else {
    //   dispatch(userUpdate(name, mobile, email, password));
    // }
  };

  //   useEffect(() => {
  //     if (Object.keys(user).length) {
  //       props.history.push("/");
  //     }
  //   }, [props.history, user]);

  return (
    <UpdateContainer>
      <form onSubmit={handleSignin}>
        {loading && <LoadingBox />}
        {error && <ErrorBox msg={error} />}
        <div className="form-container">
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="mobile">Mobile No</label>
            <input
              type="text"
              name="name"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div>
            <button type="submit" className="general-button">
              Update User
            </button>
          </div>
          <Link to="/">
            <p>Go back</p>
          </Link>
        </div>
      </form>
    </UpdateContainer>
  );
};

export default UpdateUserScreen;
