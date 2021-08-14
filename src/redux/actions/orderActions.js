import {
  ORDER_CREATE_REQUEST,
  ORDER_CREATE_SUCCESS,
  ORDER_CREATE_FAIL,
} from "../constants/orderConstants";
import { CART_EMPTY } from "../constants/cartConstants";

import axios from "axios";

export const createOrder = (order) => async (dispatch) => {
  dispatch({ type: ORDER_CREATE_REQUEST });

  try {
    const authAxios = axios.create({
      baseURL: "https://dharm.ga/api",
      headers: {
        Authorization: `Bearer ${JSON.parse(
          localStorage.getItem("userToken")
        )}`,
      },
    });

    await authAxios.post("/order", order);

    const { data } = await authAxios.get("/order");

    setTimeout(() => {
      localStorage.setItem("orders", JSON.stringify(data));
    }, 200);

    dispatch({ type: ORDER_CREATE_SUCCESS, payload: data });
    dispatch({ type: CART_EMPTY });
    localStorage.removeItem("cartItems");
    localStorage.removeItem("cartItemsId");
    localStorage.removeItem("itemsPrice");
    localStorage.removeItem("deliveryPrice");
    localStorage.removeItem("taxPrice");
    localStorage.removeItem("totalPrice");
    localStorage.removeItem("shippingAddress");
    localStorage.removeItem("paymentMethod");
  } catch (error) {
    dispatch({
      type: ORDER_CREATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const cancelOrder = (oid) => async () => {
  try {
    const authAxios = axios.create({
      baseURL: "https://dharm.ga/api",
      headers: {
        Authorization: `Bearer ${JSON.parse(
          localStorage.getItem("userToken")
        )}`,
      },
    });

    await authAxios.patch("https://dharm.ga/api/order/cancel", {
      order_id: oid,
    });
  } catch (e) {}
};
