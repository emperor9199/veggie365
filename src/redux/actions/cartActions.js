import {
  ADD_TO_CART,
  DECREASE_QTY,
  SAVE_PAYMENT_METHOD,
  ORDER_PRICES,
  ADD_SHIPPING_ADDRESS,
  UPDATE_SHIPPING_ADDRESS,
  SAVE_SHIPPING_ADDRESS,
} from "../constants/cartConstants";
import axios from "axios";

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

export const addShippingAddress =
  (val, address, pincode) => async (dispatch) => {
    try {
      const authAxios = axios.create({
        baseURL: "https://dharm.ga/api",
        headers: {
          Authorization: `Bearer ${JSON.parse(
            localStorage.getItem("userToken")
          )}`,
        },
      });

      await authAxios.post("/useraddress", {
        address: [
          {
            user_address_name: val,
            full_address: address,
            city_name: "Rajkot",
            pincode: pincode,
          },
        ],
      });

      // set in localStorage

      setTimeout(async () => {
        const authAxiosTwo = axios.create({
          baseURL: "https://dharm.ga/api",
          headers: {
            Authorization: `Bearer ${JSON.parse(
              localStorage.getItem("userToken")
            )}`,
          },
        });

        const { data } = await authAxiosTwo.get("/useraddress");
        const filterAddress = data?.find(
          (item) =>
            item.user_address_name === localStorage.getItem("user_address_ref")
        );
        dispatch({ type: ADD_SHIPPING_ADDRESS, payload: data });
        dispatch({ type: SAVE_SHIPPING_ADDRESS, payload: filterAddress });

        // localStorage.setItem("shippingAddress", JSON.stringify(data[0]));
      }, 200);
    } catch (err) {
      alert(err.message);
    }
  };

// export const updateShippingAddress =
//   (userAddressId, val, address, pincode) => async (dispatch) => {
//     try {
//       const authAxios = axios.create({
//         baseURL: "https://dharm.ga/api",
//         headers: {
//           Authorization: `Bearer ${JSON.parse(
//             localStorage.getItem("userToken")
//           )}`,
//         },
//       });

//       await authAxios.patch("/useraddress", {
//         user_address_id: userAddressId,
//         user_address_name: val,
//         full_address: address,
//         pincode: pincode,
//         city_name: "Rajkot",
//       });

//       // set in localStorage

//       setTimeout(async () => {
//         const authAxiosTwo = axios.create({
//           baseURL: "https://dharm.ga/api",
//           headers: {
//             Authorization: `Bearer ${JSON.parse(
//               localStorage.getItem("userToken")
//             )}`,
//           },
//         });

//         const { data } = await authAxiosTwo.get("/useraddress");
//         const filterAddress = data?.find(
//           (item) =>
//             item.user_address_name === localStorage.getItem("user_address_ref")
//         );

//         dispatch({ type: UPDATE_SHIPPING_ADDRESS, payload: data });
//         dispatch({ type: SAVE_SHIPPING_ADDRESS, payload: filterAddress });
//       }, 200);
//     } catch (err) {
//       alert(err);
//     }
//   };

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

export const addComment = (productId, commentText) => async (dispatch) => {
  try {
    const authAxios = axios.create({
      baseURL: "https://dharm.ga/api",
      headers: {
        Authorization: `Bearer ${JSON.parse(
          localStorage.getItem("userToken")
        )}`,
      },
    });

    await authAxios.post("/comment", {
      product_id: productId,
      comment: commentText,
    });
  } catch (err) {
    alert(err);
  }
};
