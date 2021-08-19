import {
  ORDER_CREATE_REQUEST,
  ORDER_CREATE_SUCCESS,
  ORDER_CREATE_FAIL,
  ORDER_RESET,
} from "../constants/orderConstants";
import { CART_EMPTY } from "../constants/cartConstants";

import axios from "axios";

export const createOrder = (order, payment) => async (dispatch) => {
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

    // check id either cash or razorpay
    const response = await authAxios.post("/order", order);

    if (order.payment === 1) {
      localStorage.removeItem("order_id");
      localStorage.setItem("order_id", response.data.payment.id);
      localStorage.setItem("order_id_second", response.data.order_id);
    } else {
      localStorage.removeItem("order_id");
      localStorage.removeItem("order_id_second");
    }

    const { data } = await authAxios.get("/order");

    setTimeout(() => {
      localStorage.setItem("orders", JSON.stringify(data));
    }, 200);

    dispatch({ type: ORDER_CREATE_SUCCESS, payload: data });
    const paymentResponse = await authAxios.post("/order/payment", payment);
    dispatch({ type: CART_EMPTY });

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
