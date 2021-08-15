import {
  USER_LOGIN_LOADING,
  USER_LOGIN_SUCCESSFUL,
  USER_LOGIN_ERROR,
  USER_REGISTRATION_LOADING,
  USER_REGISTRATION_SUCCESSFUL,
  USER_REGISTRATION_ERROR,
  USER_LOGOUT,
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
      payload: "invalid credentials",
    });
  }
};

export const userLogout = () => (dispatch) => {
  localStorage.removeItem("userToken");
  localStorage.removeItem("loggedUser");
  localStorage.removeItem("itemsPrice");
  localStorage.removeItem("deliveryPrice");
  localStorage.removeItem("taxPrice");
  localStorage.removeItem("totalPrice");
  localStorage.removeItem("orders");
  localStorage.removeItem("cartItems");
  localStorage.removeItem("cartItemsId");
  dispatch({ type: USER_LOGOUT });
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
  (name, mobile, email, password) => async (dispatch) => {
    try {
      const authAxios = axios.create({
        baseURL: "https://dharm.ga/api",
        headers: {
          Authorization: `Bearer ${JSON.parse(
            localStorage.getItem("userToken")
          )}`,
        },
      });

      await authAxios.patch("https://dharm.ga/api/user", {
        user_name: name,
        user_phone: Number(mobile),
        user_email: email,
        user_password: password,
      });
      dispatch({ type: USER_LOGIN_SUCCESSFUL });
    } catch (error) {}
  };
