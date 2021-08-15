import {
  ADD_TO_CART,
  DECREASE_QTY,
  SAVE_PAYMENT_METHOD,
  CART_EMPTY,
  ORDER_PRICES,
  ADD_SHIPPING_ADDRESS,
  UPDATE_SHIPPING_ADDRESS,
  SAVE_SHIPPING_ADDRESS,
} from "../constants/cartConstants";
import produce from "immer";

const initialState = {
  // cartItems: localStorage.getItem("cartItems")
  //   ? JSON.parse(localStorage.getItem("cartItems"))
  //   : {},
  // cartItemsId: localStorage.getItem("cartItemsId")
  //   ? JSON.parse(localStorage.getItem("cartItemsId"))
  //   : [],
  cartItems500: localStorage.getItem("cartItems500")
    ? JSON.parse(localStorage.getItem("cartItems500"))
    : {},
  cartItemsId500: localStorage.getItem("cartItemsId500")
    ? JSON.parse(localStorage.getItem("cartItemsId500"))
    : [],
  cartItems1: localStorage.getItem("cartItems1")
    ? JSON.parse(localStorage.getItem("cartItems1"))
    : {},
  cartItemsId1: localStorage.getItem("cartItemsId1")
    ? JSON.parse(localStorage.getItem("cartItemsId1"))
    : [],
  cartItems2: localStorage.getItem("cartItems2")
    ? JSON.parse(localStorage.getItem("cartItems2"))
    : {},
  cartItemsId2: localStorage.getItem("cartItemsId2")
    ? JSON.parse(localStorage.getItem("cartItemsId2"))
    : [],

  paymentMethod: localStorage.getItem("paymentMethod")
    ? JSON.parse(localStorage.getItem("paymentMethod"))
    : "",
  // itemsPrice: localStorage.getItem("itemsPrice")
  //   ? localStorage.getItem("itemsPrice")
  //   : 0,
  // deliveryPrice: localStorage.getItem("deliveryPrice")
  //   ? localStorage.getItem("deliveryPrice")
  //   : 0,
  // taxPrice: localStorage.getItem("taxPrice")
  //   ? localStorage.getItem("taxPrice")
  //   : 0,
  // totalPrice: localStorage.getItem("totalPrice")
  //   ? localStorage.getItem("totalPrice")
  //   : 0,
  itemsPrice: 0,
  deliveryPrice: 0,
  taxPrice: 0,
  totalPrice: 0,
  shippingAddress: [],
  savedAddress: {},
};

export const addToCartReducer = produce((state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const { p_id, qty, unit_price, unit_name } = action.payload;

      if (unit_name === "500 Gm") {
        if (state.cartItems500[p_id]) {
          state.cartItems500[p_id].qty = state.cartItems500[p_id].qty + qty;
          state.cartItems500[p_id].unit_total =
            state.cartItems500[p_id].unit_total + unit_price;
        } else {
          state.cartItems500[p_id] = action.payload;
          state.cartItemsId500.push(p_id);
        }
      } else if (unit_name === "1 kg") {
        if (state.cartItems1[p_id]) {
          state.cartItems1[p_id].qty = state.cartItems1[p_id].qty + qty;
          state.cartItems1[p_id].unit_total =
            state.cartItems1[p_id].unit_total + unit_price;
        } else {
          state.cartItems1[p_id] = action.payload;
          state.cartItemsId1.push(p_id);
        }
      } else if (unit_name === "૨ કિલો ") {
        if (state.cartItems2[p_id]) {
          state.cartItems2[p_id].qty = state.cartItems2[p_id].qty + qty;
          state.cartItems2[p_id].unit_total =
            state.cartItems2[p_id].unit_total + unit_price;
        } else {
          state.cartItems2[p_id] = action.payload;
          state.cartItemsId2.push(p_id);
        }
      }
      // if (
      //   state.cartItems[p_id] &&
      //   state.cartItems[p_id].unit_name === unit_name
      // ) {
      //   state.cartItems[p_id].qty = state.cartItems[p_id].qty + qty;
      //   state.cartItems[p_id].unit_total =
      //     state.cartItems[p_id].unit_total + unit_total;
      //   return;
      // } else {
      //   state.cartItems[p_id] = action.payload;
      //   state.cartItemsId.push(p_id);
      //   return;
      // }
      // state.itemPrice = state.itemPrice + unit_price;

      // return;
      // }

      // console.log(action.payload);
      // state.cartItems[p_id] = action.payload;
      // state.cartItemsId.push(p_id);
      // return;

      // var exist = state.cartItemsId.find((item) => item === p_id);

      // if (exist) {
      //   state.cartItems[p_id].qty = state.cartItems[p_id].qty + qty;
      //   state.cartItems[p_id].unit_total =
      //     state.cartItems[p_id].unit_total + unit_price;
      // } else {
      //   state.cartItems[p_id] = action.payload;
      //   state.cartItemsId.push(p_id);
      // }

      return;
    }

    case DECREASE_QTY: {
      const { pid, unitPrice, unitName } = action.payload;

      if (unitName === "500 Gm") {
        if (state.cartItems500[pid].qty === 1) {
          // delete item object from cartItems
          delete state.cartItems500[pid];

          // delete id from cartItemsId Array
          const index = state.cartItemsId500.findIndex(
            (itemId) => itemId === pid
          );
          if (index !== -1) state.cartItemsId500.splice(index, 1);
          state.cartItemsId500.splice(pid, 1);
          return;
        }

        // decrease qty
        state.cartItems500[pid].qty = state.cartItems500[pid].qty - 1;
        // decrease price
        state.cartItems500[pid].unit_total =
          state.cartItems500[pid].unit_total - unitPrice;
      } else if (unitName === "1 kg") {
        if (state.cartItems1[pid].qty === 1) {
          // delete item object from cartItems
          delete state.cartItems1[pid];

          // delete id from cartItemsId Array
          const index = state.cartItemsId1.findIndex(
            (itemId) => itemId === pid
          );
          if (index !== -1) state.cartItemsId1.splice(index, 1);
          state.cartItemsId1.splice(pid, 1);
          return;
        }

        // decrease qty
        state.cartItems1[pid].qty = state.cartItems1[pid].qty - 1;
        // decrease price
        state.cartItems1[pid].unit_total =
          state.cartItems1[pid].unit_total - unitPrice;
      } else if (unitName === "૨ કિલો ") {
        if (state.cartItems2[pid].qty === 1) {
          // delete item object from cartItems
          delete state.cartItems2[pid];

          // delete id from cartItemsId Array
          const index = state.cartItemsId2.findIndex(
            (itemId) => itemId === pid
          );
          if (index !== -1) state.cartItemsId2.splice(index, 1);
          state.cartItemsId2.splice(pid, 1);
          return;
        }

        // decrease qty
        state.cartItems2[pid].qty = state.cartItems2[pid].qty - 1;
        // decrease price
        state.cartItems2[pid].unit_total =
          state.cartItems2[pid].unit_total - unitPrice;
      }

      // if (state.cartItems[pid].qty === 1) {
      //   // delete item object from cartItems
      //   delete state.cartItems[pid];

      //   // delete id from cartItemsId Array
      //   const index = state.cartItemsId.findIndex((itemId) => itemId === pid);
      //   if (index !== -1) state.cartItemsId.splice(index, 1);
      //   state.cartItemsId.splice(pid, 1);
      //   return;
      // }

      // // decrease qty
      // state.cartItems[pid].qty = state.cartItems[pid].qty - 1;
      // // decrease price
      // state.cartItems[pid].unit_total =
      //   state.cartItems[pid].unit_total - unitPrice;
      return;
    }

    case CART_EMPTY: {
      state.cartItems500 = {};
      state.cartItemsId500 = [];
      state.cartItems1 = {};
      state.cartItemsId1 = [];
      state.cartItems2 = {};
      state.cartItemsId2 = [];

      return;
    }

    case ADD_SHIPPING_ADDRESS: {
      state.shippingAddress = action.payload;
      return;
    }

    case UPDATE_SHIPPING_ADDRESS: {
      state.shippingAddress = action.payload;
      return;
    }

    case SAVE_SHIPPING_ADDRESS: {
      state.savedAddress = action.payload;
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
