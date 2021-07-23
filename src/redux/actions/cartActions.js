import { ADD_TO_CART, DECREASE_QTY } from "../constants/cartConstants";
// import axios from "axios";

export const addToCart =
  (product, pid, unit_price, qty) => (dispatch, getState) => {
    let localCartItems, localCartItemsId;

    // increase milliseconds if localstorage have some issuues
    setTimeout(() => {
      const {
        addToCartReducer: { cartItems, cartItemsId },
      } = getState();

      localCartItems = cartItems;
      localCartItemsId = cartItemsId;
    }, 200);

    dispatch({
      type: ADD_TO_CART,
      payload: {
        p_id: pid,
        name: product.product_name,
        about: product.product_about,
        img: product.product_img,
        fresh_till: product.product_fresh_till,
        unit_price: unit_price,
        qty: qty,
      },
    });

    setTimeout(() => {
      localStorage.setItem("cartItems", JSON.stringify(localCartItems));
      localStorage.setItem("cartItemsId", JSON.stringify(localCartItemsId));
    }, 200);
  };

export const decreaseQty = (productId) => (dispatch, getState) => {
  let localCartItems, localCartItemsId;

  // increase milliseconds if localstorage have some issuues
  setTimeout(() => {
    const {
      addToCartReducer: { cartItems, cartItemsId },
    } = getState();

    localCartItems = cartItems;
    localCartItemsId = cartItemsId;
  }, 200);

  setTimeout(() => {
    localStorage.setItem("cartItems", JSON.stringify(localCartItems));
    localStorage.setItem("cartItemsId", JSON.stringify(localCartItemsId));
  }, 200);
  dispatch({
    type: DECREASE_QTY,
    payload: productId,
  });
};

// export const saveShippingAddress = (data) => async (dispatch) => {
//   dispatch({ type: SAVE_SHIPPING_ADDRESS, payload: data });
// };

// export const savePaymentMethod = (data) => async (dispatch) => {
//   dispatch({ type: SAVE_PAYMENT_METHOD, payload: data });
// };
