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
    const {
      data: { token },
    } = await axios.post("https://dharm.ga/api/user/auth", {
      email: email,
      password: password,
    });

    // axios token check

    const authAxios = axios.create({
      baseURL: "https://dharm.ga/api",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const { data } = await authAxios.get("/user");

    localStorage.setItem("loggedUser", JSON.stringify(data));
    localStorage.setItem("userToken", JSON.stringify(token));

    dispatch({ type: USER_LOGIN_SUCCESSFUL, payload: JSON.stringify(data) });
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
      const {
        data: { status },
      } = await axios.post("https://dharm.ga/api/user", {
        user_name: name,
        user_phone: Number(mobile),
        user_email: email,
        user_password: password,
      });

      dispatch({ type: USER_REGISTRATION_SUCCESSFUL, payload: status });

      const {
        data: { token },
      } = await axios.post("https://dharm.ga/api/user/auth", {
        email: email,
        password: password,
      });

      // axios token check

      const authAxios = axios.create({
        baseURL: "https://dharm.ga/api",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const { data } = await authAxios.get("/user");

      localStorage.setItem("loggedUser", JSON.stringify(data));
      localStorage.setItem("userToken", JSON.stringify(token));

      dispatch({ type: USER_LOGIN_SUCCESSFUL, payload: JSON.stringify(data) });
      //dispatch({ type: USER_LOGIN_SUCCESSFUL, payload: data });
    } catch (error) {
      dispatch({
        type: USER_REGISTRATION_ERROR,
        payload: "user already exists",
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
