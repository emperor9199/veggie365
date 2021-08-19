import {
  ADD_TO_CART,
  DECREASE_QTY,
  SAVE_PAYMENT_METHOD,
  CART_EMPTY,
  ORDER_PRICES,
  ADD_SHIPPING_ADDRESS,
  UPDATE_SHIPPING_ADDRESS,
  SAVE_SHIPPING_ADDRESS,
  CREATE_CART_ARRAY,
} from "../constants/cartConstants";
import produce from "immer";

const local = JSON.parse(localStorage.getItem("cartUnitData"));
var newLocalOne = [];

var newLocalKeys = [];
var newLocalValues = [];

local?.map((item) => {
  newLocalOne.push({
    item: `cartItems${item}`,
    id: `cartItemsId${item}`,
  });

  newLocalKeys.push(`cartItems${item}`);
  newLocalValues.push(`cartItemsId${item}`);
});

// setTimeout(() => {
localStorage.setItem("cartUnitData2", JSON.stringify(newLocalKeys));
// }, 1000);

var newArr = new Map();

newLocalOne?.map((data) => {
  newArr.set(
    data.item,
    localStorage.getItem(data.item)
      ? JSON.parse(localStorage.getItem(data.item))
      : []
  );
  newArr.set(
    data.id,
    localStorage.getItem(data.id)
      ? JSON.parse(localStorage.getItem(data.id))
      : []
  );
});

var latestArr = Object.fromEntries(newArr);

latestArr = {
  ...latestArr,
  cartUnitData: localStorage.getItem("cartUnitData5")
    ? JSON.parse(localStorage.getItem("cartUnitData5"))
    : newLocalKeys,
  cartUnitDataId: localStorage.getItem("cartUnitDataId")
    ? JSON.parse(localStorage.getItem("cartUnitDataId"))
    : newLocalValues,
  cartOnlyId: localStorage.getItem("cartOnlyId")
    ? JSON.parse(localStorage.getItem("cartOnlyId"))
    : local,
  cartIdNew: localStorage.getItem("cartIdNew") ? JSON.parse("cartIdNew") : [],
  paymentMethod: localStorage.getItem("paymentMethod")
    ? JSON.parse(localStorage.getItem("paymentMethod"))
    : "",
  itemsPrice: localStorage.getItem("itemsPrice")
    ? JSON.parse(localStorage.getItem("itemsPrice"))
    : 0,
  deliveryPrice: 0,
  taxPrice: 0,
  totalPrice: 0,
  shippingAddress: [],
  savedAddress: {},
};

const initialState = latestArr;

export const addToCartReducer = produce((state = initialState, action) => {
  switch (action.type) {
    case CREATE_CART_ARRAY: {
      window.onload = function () {
        if (!localStorage.justOnce) {
          localStorage.setItem("justOnce", "true");
          setTimeout(() => {
            window.location.reload();
          }, 500);
        }
      };

      var newLocalKeyss = [];
      var newLocalValuess = [];

      local?.map((item) => {
        newLocalKeyss.push(`cartItems${item}`);
        newLocalValuess.push(`cartItemsId${item}`);
      });

      localStorage.setItem("cartUnitData5", JSON.stringify(newLocalKeyss));
      state.cartUnitData = newLocalKeys;

      localStorage.setItem("newLocalKeys", JSON.stringify(newLocalKeys));

      return;
    }

    case ADD_TO_CART: {
      const { p_id, qty, unit_price, unit_name, unit_id } = action.payload;

      var unitID = `cartItems${unit_id}`;

      Object.keys(initialState)?.map((i) => {
        if (i === unitID) {
          if (state[i].length) {
            const foundData = state[i]?.find((item) => item.p_id === p_id);

            if (foundData !== undefined) {
              foundData.qty = foundData.qty + 1;
              foundData.unit_total = foundData.unit_total + unit_price;
            } else {
              state[i].push({ ...action.payload });
            }
          } else {
            state[i].push({ ...action.payload });
          }
        }
      });

      // setTimeout(() => {
      JSON.parse(localStorage.getItem("cartUnitData5"))?.map((cartdata) => {
        localStorage.setItem(`${cartdata}`, JSON.stringify(state[cartdata]));
      });

      // state.itemsPrice = itemtotal;
      // }, 1000);

      var tt = 0;

      JSON.parse(localStorage.getItem("cartUnitData5"))?.map((item) => {
        state[item]?.map((item2) => {
          tt = tt + item2.unit_total;
        });
      });

      state.itemsPrice = tt;
      localStorage.removeItem("itemsPrice");
      localStorage.setItem("itemsPrice", JSON.stringify(tt));

      return;
    }

    case DECREASE_QTY: {
      const { pid, unitPrice, unitName, unitId } = action.payload;

      // decrease qty

      var unitID = `cartItems${unitId}`;
      Object.keys(initialState)?.map((i) => {
        if (i === unitID) {
          if (state[i].length) {
            var foundData = state[i]?.find((item) => item.p_id === pid);

            if (foundData !== undefined) {
              if (foundData.qty === 1) {
                state[i] = state[i].filter((item) => item.qty !== 1);
              } else {
                foundData.qty = foundData.qty - 1;
                foundData.unit_total = foundData.unit_total - unitPrice;
              }
            }
          }
        }
      });

      // setTimeout(() => {
      JSON.parse(localStorage.getItem("cartUnitData5"))?.map((cartdata) => {
        localStorage.setItem(`${cartdata}`, JSON.stringify(state[cartdata]));
      });

      // state.itemsPrice = itemtotal;
      // }, 1000);

      var tt = 0;

      JSON.parse(localStorage.getItem("cartUnitData5"))?.map((item) => {
        state[item]?.map((item2) => {
          tt = tt + item2.unit_total;
        });
      });

      state.itemsPrice = tt;
      localStorage.removeItem("itemsPrice");
      localStorage.setItem("itemsPrice", JSON.stringify(tt));

      return;
    }

    case CART_EMPTY: {
      // JSON.parse(localStorage.getItem("cartUnitData5"))?.map((cartdata) => {
      //   localStorage.setItem(`${cartdata}`, JSON.stringify(state[cartdata]));
      // });
      JSON.parse(localStorage.getItem("cartUnitData5"))?.map((item) => {
        localStorage.removeItem(`${item}`);
      });
      localStorage.removeItem("itemsPrice");
      localStorage.removeItem("deliveryPrice");
      localStorage.removeItem("taxPrice");
      localStorage.removeItem("totalPrice");
      localStorage.removeItem("shippingAddress");
      localStorage.removeItem("paymentMethod");

      JSON.parse(localStorage.getItem("cartUnitData5"))?.map((data) => {
        state[data] = [];
      });

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
