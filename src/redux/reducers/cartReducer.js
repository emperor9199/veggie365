import {
  ADD_TO_CART,
  DECREASE_QTY,
  SAVE_SHIPPING_ADDRESS,
  SAVE_PAYMENT_METHOD,
  CART_EMPTY,
  ORDER_PRICES,
} from "../constants/cartConstants";
import produce from "immer";

const initialState = {
  cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : {},
  cartItemsId: localStorage.getItem("cartItemsId")
    ? JSON.parse(localStorage.getItem("cartItemsId"))
    : [],

  paymentMethod: localStorage.getItem("paymentMethod")
    ? JSON.parse(localStorage.getItem("paymentMethod"))
    : "",
  itemsPrice: localStorage.getItem("itemsPrice")
    ? localStorage.getItem("itemsPrice")
    : 0,
  deliveryPrice: localStorage.getItem("deliveryPrice")
    ? localStorage.getItem("deliveryPrice")
    : 0,
  taxPrice: localStorage.getItem("taxPrice")
    ? localStorage.getItem("taxPrice")
    : 0,
  totalPrice: localStorage.getItem("totalPrice")
    ? localStorage.getItem("totalPrice")
    : 0,
};

export const addToCartReducer = produce((state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const { p_id, qty } = action.payload;

      if (state.cartItems[p_id]) {
        state.cartItems[p_id].qty = state.cartItems[p_id].qty + qty;
        return;
      }

      state.cartItems[p_id] = action.payload;
      state.cartItemsId.push(p_id);
      return;
    }

    case DECREASE_QTY: {
      const p_id = action.payload;

      if (state.cartItems[p_id].qty === 1) {
        // delete item object from cartItems
        delete state.cartItems[p_id];

        // delete id from cartItemsId Array
        const index = state.cartItemsId.findIndex((itemId) => itemId === p_id);
        if (index !== -1) state.cartItemsId.splice(index, 1);
        state.cartItemsId.splice(p_id, 1);
        return;
      }

      // decrease qty
      state.cartItems[p_id].qty = state.cartItems[p_id].qty - 1;
      return;
    }

    case CART_EMPTY: {
      state.cartItems = {};
      state.cartItemsId = [];
      return;
    }

    case SAVE_PAYMENT_METHOD: {
      state.paymentMethod = action.payload;
      return;
    }

    case ORDER_PRICES: {
      state.itemsPrice = action.payload.itemsPrice;
      state.deliveryPrice = action.payload.deliveryPrice;
      state.taxPrice = action.payload.taxPrice;
      state.totalPrice = action.payload.totalPrice;
      return;
    }

    default:
      return state;
  }
});
