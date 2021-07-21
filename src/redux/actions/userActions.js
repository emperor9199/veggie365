import {
  USER_LOGIN_LOADING,
  USER_LOGIN_SUCCESSFUL,
  USER_LOGIN_ERROR,
  USER_REGISTRATION_LOADING,
  USER_REGISTRATION_SUCCESSFUL,
  USER_REGISTRATION_ERROR,
  USER_LOGOUT,
  USER_UPDATE_SUCCESSFUL,
  USER_UPDATE_ERROR,
  USER_UPDATE_LOADING,
} from "../constants/userConstants";
import axios from "axios";

export const userLogin = (email, password) => async (dispatch) => {
  dispatch({ type: USER_LOGIN_LOADING });

  try {
    const { data } = await axios.post(
      "https://veggi365.thestarttodaytech-tst.com/api/user/auth",
      {
        user_email: email,
        user_password: password,
      }
    );

    console.log(data);

    dispatch({ type: USER_LOGIN_SUCCESSFUL, payload: data });
  } catch (error) {
    dispatch({
      type: USER_LOGIN_ERROR,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const userLogout = () => {
  return {
    type: USER_LOGOUT,
  };
};

export const userRegister =
  (name, mobile, email, password) => async (dispatch) => {
    dispatch({ type: USER_REGISTRATION_LOADING });

    try {
      const { data } = await axios.post(
        "https://veggi365.thestarttodaytech-tst.com/api/user/",
        {
          user_name: name,
          user_phone: Number(mobile),
          user_email: email,
          user_password: password,
        }
      );

      dispatch({ type: USER_REGISTRATION_SUCCESSFUL, payload: data });
      dispatch({ type: USER_LOGIN_SUCCESSFUL, payload: data });
    } catch (error) {
      dispatch({
        type: USER_REGISTRATION_ERROR,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const userUpdate =
  (id, name, mobile, email, password) => async (dispatch) => {
    dispatch({ type: USER_UPDATE_LOADING });

    try {
      const { data } = await axios.patch(
        `https://veggi365.thestarttodaytech-tst.com/api/user/${id}`,
        {
          user_name: name,
          user_phone: Number(mobile),
          user_email: email,
          user_password: password,
        }
      );

      dispatch({ type: USER_UPDATE_SUCCESSFUL, payload: data });
      dispatch({ type: USER_LOGIN_SUCCESSFUL, payload: data });
    } catch (error) {
      dispatch({
        type: USER_UPDATE_ERROR,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
