import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import EmptyCart from "../../components/EmptyCart/EmptyCart";
import {
  addToCart,
  decreaseQty,
  orderPrices,
} from "../../redux/actions/cartActions";
import { CartContainer } from "./Style";

const CartScreen = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const dispatch = useDispatch();
  const [dataCounter, setDataCounter] = useState(false);

  // const {
  //   cartItems500,
  //   cartItemsId500,
  //   cartItems1,
  //   cartItemsId1,
  //   cartItems2,
  //   cartItemsId2,
  // } = useSelector((state) => state.addToCartReducer);

  const increaseItemQty = (product) => {
    // calcItemPrice();
    dispatch(
      addToCart(
        product,
        product.p_id,
        product.unit_price,
        product.unit_name,
        product.unit_id,
        1
      )
    );
  };

  const decreaseItemQty = (product) => {
    dispatch(
      decreaseQty(
        product.p_id,
        product.unit_price,
        product.unit_name,
        product.unit_id
      )
    );
  };

  // order save
  const cart = useSelector((state) => state.addToCartReducer);
  const { user } = useSelector((state) => state.userLoginReducer);
  const history = useHistory();

  if (!Object.keys(user).length) {
    history.push("/login");
  }

  const {
    itemsPrice,
    deliveryPrice,
    taxPrice,
    totalPrice,
    // cartUnitData,
    // cartUnitDataId,
  } = cart;

  var printtotal = itemsPrice;

  // var {
  //   shippingAddress,
  //   // paymentMethod,
  //   // cartItems500,
  //   // cartItemsId500,
  //   cartItems1,
  //   cartItemsId1,
  //   cartItems2,
  //   cartItemsId2,
  //   itemsPrice,
  //   deliveryPrice,
  //   taxPrice,
  //   totalPrice,
  //   cartUnitData,
  // } = useSelector((state) => state.addToCartReducer);

  var hereData = useSelector((state) => state.addToCartReducer);

  var localCartId = JSON.parse(localStorage.getItem("cartUnitDataId"));
  var localCardData = JSON.parse(localStorage.getItem("cartUnitData5"));
  var cartFinalId = JSON.parse(localStorage.getItem("cartFinalId"));
  // console.log(localCardData);

  var sumArr = [];
  var filledArr = [];
  var pushArr = [];
  var dataArr = [];

  localCardData?.map((item) => {
    if (hereData[item].length) {
      sumArr.push(hereData[item]);
    }
  });

  localCardData?.map((item) => {
    // itemsPrice += hereData[item].reduce(
    //   (a, c) => a + hereData[item][c].unit_price * hereData[item][c].qty,
    //   0
    // );
    // console.log(hereData[item]);
  });

  // var itemprice500 = cartItemsId500.reduce(
  //   (a, c) => a + cartItems500[c].unit_price * cartItems500[c].qty,
  //   0
  // );

  // var itemprice1 = cartItemsId1.reduce(
  //   (a, c) => a + cartItems1[c].unit_price * cartItems1[c].qty,
  //   0
  // );

  // var itemprice2 = cartItemsId2.reduce(
  //   (a, c) => a + cartItems2[c].unit_price * cartItems2[c].qty,
  //   0
  // );

  // itemsPrice = itemprice500 + itemprice1 + itemprice2;

  const handleOrderPrice = () => {
    dispatch(orderPrices(itemsPrice, deliveryPrice, taxPrice, totalPrice));
    history.push("/place-order");
  };

  var date = String(new Date());
  var todayDate = date.split(" ");
  todayDate = todayDate[0] + " " + todayDate[1] + " " + todayDate[2];

  var printCartData = [];

  localCardData?.map((item) => {
    for (let i in hereData[item]) {
      printCartData.push(hereData[item]);
    }
    // console.log(Object.keys(hereData[item]));
  });

  const sum = sumArr.reduce((a, b) => a + b, 0);
  console.log(pushArr);
  console.log(filledArr);
  console.log(printCartData);
  var itemSum = 0;

  // item price total

  // useEffect(() => {
  //   setTimeout(() => {
  //     calcItemPrice();
  //   }, 500);
  // }, []);

  // var it = 0;

  // const calcItemPrice = () => {
  //   sumArr?.map((itemOne) => {
  //     itemOne?.map((data) => {
  //       it += Number(data.unit_total);
  //       //        itemsPrice+= data.reduce(
  //       //   (a, c) => a + data.unit_price * cartItems1[c].qty,
  //       //   0
  //       // );
  //       // console.log(data, itemsPrice);
  //       console.log("it", it);
  //     });
  //     setTimeout(() => {
  //       localStorage.removeItem("itemsPrice");
  //       localStorage.setItem("itemsPrice", JSON.stringify(it));
  //     }, 700);
  //     deliveryPrice = 0;
  //     taxPrice = 0;
  //     totalPrice = itemsPrice + deliveryPrice + taxPrice;
  //   });
  // };

  var grandtotal = printtotal + taxPrice + deliveryPrice;

  return (
    <>
      {sumArr.length === 0 ? (
        <EmptyCart name="Cart" />
      ) : (
        <CartContainer>
          <div className="cart-left">
            {sumArr?.map((itemOne) => {
              return itemOne?.map((item) => {
                // itemSum += item.unit_total;

                return (
                  <div>
                    <div key={item.p_id} className="cart-inner-container">
                      <div className="cart-item-img">
                        <img src={item.img} alt="" />
                      </div>
                      <div className="cart-item-details">
                        <h3>{item.name}</h3>
                        <p>{item.about}</p>

                        <button onClick={() => decreaseItemQty(item)}>-</button>
                        <span>{item.qty}</span>
                        <button
                          onClick={() => {
                            increaseItemQty(item);
                          }}
                        >
                          +
                        </button>
                        <h3>
                          (₹{item.unit_price}/{item.unit_name})
                        </h3>

                        <h3> Price: ₹{item.unit_total} </h3>
                      </div>
                      <div className="cart-item-delivery-details">
                        <p>Delivery by {todayDate}</p>
                      </div>
                    </div>
                  </div>
                );
              });
            })}
          </div>
          <div className="cart-right">
            <h3>PRICE DETAILS</h3>
            <hr />
            <p style={{ fontWeight: "bold", color: "#797878" }}>
              Items Price :{" "}
              <span style={{ color: "green" }}> ₹{printtotal}</span>
            </p>
            <p style={{ fontWeight: "bold", color: "#797878" }}>
              Delivery Charges :{" "}
              <span style={{ color: "green" }}>
                {deliveryPrice === 0 ? "Free" : "₹" + deliveryPrice}
              </span>
            </p>
            <p style={{ fontWeight: "bold", color: "#797878" }}>
              Tax Price :{" "}
              <span style={{ color: "green" }}>
                {" "}
                {taxPrice === 0 ? "No Tax" : "₹" + taxPrice}
              </span>
            </p>
            <h3 style={{ fontWeight: "bold", color: "black" }}>
              Grand Total of {""}
              {sumArr.length}
              {/* {cartItemsId500.reduce((a, c) => a + cartItems500[c].qty, 0)} */}
              {""} items : ₹{grandtotal}
            </h3>
            {/* <p>
              Grand Total: (
              {cartItemsId.reduce((a, c) => a + cartItems[c].qty, 0)}
              items) : ₹
              {cartItemsId.reduce(
                (a, c) => a + cartItems[c].unit_price * cartItems[c].qty,
                0
              )}
            </p> */}
            <button className="place-order-btn" onClick={handleOrderPrice}>
              Place Order
            </button>
          </div>
        </CartContainer>
      )}
    </>
  );
};

export default CartScreen;
