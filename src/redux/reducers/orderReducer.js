import {
  ORDER_CREATE_REQUEST,
  ORDER_CREATE_FAIL,
  ORDER_CREATE_SUCCESS,
  ORDER_RESET,
  // ORDER_RESET,
} from "../constants/orderConstants";
import produce from "immer";

const initialState = {
  loading: false,
  orders: localStorage.getItem("orders")
    ? JSON.parse(localStorage.getItem("orders"))
    : [],
  error: false,
  success: false,
};

export const orderReducer = produce((state = initialState, action) => {
  switch (action.type) {
    case ORDER_CREATE_REQUEST: {
      state.loading = true;
      return;
    }

    case ORDER_CREATE_SUCCESS: {
      state.loading = false;
      state.orders = action.payload;
      state.success = true;
      state.error = false;
      return;
    }

    case ORDER_CREATE_FAIL: {
      state.loading = false;
      state.error = action.payload;
      state.success = false;
      return;
    }

    case ORDER_RESET: {
      state.loading = false;
      state.error = false;
      state.success = false;
      state.orders = [];
      return;
    }

    default:
      return state;
  }
});
