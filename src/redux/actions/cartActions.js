import {
  ADD_TO_CART,
  DECREASE_QTY,
  SAVE_SHIPPING_ADDRESS,
  SAVE_PAYMENT_METHOD,
  ORDER_PRICES,
} from "../constants/cartConstants";

export const addToCart =
  (product, pid, unit_price, qty) => (dispatch, getState) => {
    let localCartItems, localCartItemsId;
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

export const saveShippingAddress = (data) => async (dispatch) => {
  setTimeout(() => {
    localStorage.setItem("shippingAddress", JSON.stringify(data));
  }, 200);
  dispatch({ type: SAVE_SHIPPING_ADDRESS, payload: data });
};

export const savePaymentMethod = (data) => async (dispatch) => {
  setTimeout(() => {
    localStorage.setItem("paymentMethod", JSON.stringify(data));
  }, 200);

  dispatch({ type: SAVE_PAYMENT_METHOD, payload: data });
};

export const orderPrices =
  (itemsPrice, deliveryPrice, taxPrice, totalPrice) => (dispatch) => {
    setTimeout(() => {
      localStorage.setItem("itemsPrice", JSON.stringify(itemsPrice));
      localStorage.setItem("deliveryPrice", JSON.stringify(deliveryPrice));
      localStorage.setItem("taxPrice", JSON.stringify(taxPrice));
      localStorage.setItem("totalPrice", JSON.stringify(totalPrice));
    }, 300);

    dispatch({
      type: ORDER_PRICES,
      payload: { itemsPrice, deliveryPrice, taxPrice, totalPrice },
    });
  };
