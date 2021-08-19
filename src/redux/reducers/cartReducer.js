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

// console.log(newLocalOne);
console.log(newLocalKeys);

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

// console.log(newArr);
var latestArr = Object.fromEntries(newArr);

latestArr = {
  ...latestArr,
  // maru: { ...latestArr },
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

// console.log(initialState);

// for (const [key, value] of newArr.entries()) {
//   latestArr.push({ key: value });
// }
// console.log(latestArr);

/*

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

*/

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

      var blankArr = [];

      // state.cartUnitDataId?.map((item) => {
      //   blankArr.push({ [`${item}`]: state[item] });
      // });

      // state.cartIdNew = blankArr;

      // setTimeout(() => {
      //   localStorage.setItem("cartIdNew", JSON.stringify(blankArr));
      // }, 600);

      // setTimeout(() => {
      localStorage.setItem("cartUnitData5", JSON.stringify(newLocalKeyss));
      // localStorage.setItem("cartUnitDataId", JSON.stringify(newLocalValuess));
      // localStorage.setItem("cartFinalId", JSON.stringify(local));
      // }, 500);
      state.cartUnitData = newLocalKeys;

      localStorage.setItem("newLocalKeys", JSON.stringify(newLocalKeys));

      // state.dummy = action.payload;

      return;
    }

    // case ADD_TO_CART: {
    //   const { p_id, qty, unit_price, unit_name } = action.payload;

    //   state.cartItems2[p_id] = action.payload;
    //   state.cartItemsId2.push(p_id);
    // }

    case ADD_TO_CART: {
      const { p_id, qty, unit_price, unit_name, unit_id } = action.payload;

      var unitID = `cartItems${unit_id}`;
      var unitIDTwo = `cartItemsId${unit_id}`;

      // state.itemsPrice = JSON.parse(localStorage.getItem("itemsPrice"));

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
      // var unitIDTwo = `cartItemsId${unit_id}`;

      // state.itemsPrice = JSON.parse(localStorage.getItem("itemsPrice"));

      Object.keys(initialState)?.map((i) => {
        if (i === unitID) {
          if (state[i].length) {
            var foundData = state[i]?.find((item) => item.p_id === pid);

            if (foundData !== undefined) {
              if (foundData.qty === 1) {
                // delete state[i]?.find((item) => item.p_id === pid);
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

      // Object.keys(initialState)?.map((i) => {
      //   if (i === unitID) {
      //     var stateCartData = [];

      //     const foundData = state[i]?.find((item) => item.p_id === pid);

      //     if (foundData !== undefined) {
      //       if (foundData.qty === 1) {
      //         delete state[i]?.find((item) => item.p_id === pid);
      //       } else {
      //         foundData.qty = foundData.qty - 1;
      //         foundData.unit_total = foundData.unit_total - unitPrice;
      //       }
      //     }
      //   }
      // });

      // // Object.keys(initialState)?.map((i) => {
      // //   if (i === unitID) {
      // //     if (state[i].qty === 1) {
      // //       delete state[i];
      // //       return;
      // //     }

      // //     // decrease qty
      // //     state[i].qty = state[i].qty - 1;
      // //     // decrease price
      // //     state[i].unit_total = state[i].unit_total - unitPrice;
      // //   }
      // // });

      // // if (unitName === "500 Gm") {
      // //   if (state.cartItems500[pid].qty === 1) {
      // //     // delete item object from cartItems
      // //     delete state.cartItems500[pid];

      // //     // delete id from cartItemsId Array
      // //     const index = state.cartItemsId500.findIndex(
      // //       (itemId) => itemId === pid
      // //     );
      // //     if (index !== -1) state.cartItemsId500.splice(index, 1);
      // //     state.cartItemsId500.splice(pid, 1);
      // //     return;
      // //   }

      // //   // decrease qty
      // //   state.cartItems500[pid].qty = state.cartItems500[pid].qty - 1;
      // //   // decrease price
      // //   state.cartItems500[pid].unit_total =
      // //     state.cartItems500[pid].unit_total - unitPrice;
      // // } else if (unitName === "1 kg") {
      // //   if (state.cartItems1[pid].qty === 1) {
      // //     // delete item object from cartItems
      // //     delete state.cartItems1[pid];

      // //     // delete id from cartItemsId Array
      // //     const index = state.cartItemsId1.findIndex(
      // //       (itemId) => itemId === pid
      // //     );
      // //     if (index !== -1) state.cartItemsId1.splice(index, 1);
      // //     state.cartItemsId1.splice(pid, 1);
      // //     return;
      // //   }

      // //   // decrease qty
      // //   state.cartItems1[pid].qty = state.cartItems1[pid].qty - 1;
      // //   // decrease price
      // //   state.cartItems1[pid].unit_total =
      // //     state.cartItems1[pid].unit_total - unitPrice;
      // // } else if (unitName === "૨ કિલો ") {
      // //   if (state.cartItems2[pid].qty === 1) {
      // //     // delete item object from cartItems
      // //     delete state.cartItems2[pid];

      // //     // delete id from cartItemsId Array
      // //     const index = state.cartItemsId2.findIndex(
      // //       (itemId) => itemId === pid
      // //     );
      // //     if (index !== -1) state.cartItemsId2.splice(index, 1);
      // //     state.cartItemsId2.splice(pid, 1);
      // //     return;
      // //   }

      // //   // decrease qty
      // //   state.cartItems2[pid].qty = state.cartItems2[pid].qty - 1;
      // //   // decrease price
      // //   state.cartItems2[pid].unit_total =
      // //     state.cartItems2[pid].unit_total - unitPrice;
      // // }

      // // if (state.cartItems[pid].qty === 1) {
      // //   // delete item object from cartItems
      // //   delete state.cartItems[pid];

      // //   // delete id from cartItemsId Array
      // //   const index = state.cartItemsId.findIndex((itemId) => itemId === pid);
      // //   if (index !== -1) state.cartItemsId.splice(index, 1);
      // //   state.cartItemsId.splice(pid, 1);
      // //   return;
      // // }

      // // // decrease qty
      // // state.cartItems[pid].qty = state.cartItems[pid].qty - 1;
      // // // decrease price
      // // state.cartItems[pid].unit_total =
      // //   state.cartItems[pid].unit_total - unitPrice;

      // state.cartUnitData?.map((cartdata) => {
      //   localStorage.setItem(`${cartdata}`, JSON.stringify(state[cartdata]));
      // });

      // state.cartUnitDataId?.map((cartdata) => {
      //   localStorage.setItem(`${cartdata}`, JSON.stringify(state[cartdata]));
      // });

      return;
    }

    case CART_EMPTY: {
      JSON.parse(localStorage.getItem("cartUnitData5"))?.map((cartdata) => {
        localStorage.setItem(`${cartdata}`, JSON.stringify(state[cartdata]));
      });

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
