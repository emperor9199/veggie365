import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { savePaymentMethod } from "../../redux/actions/cartActions";
import { createOrder } from "../../redux/actions/orderActions";
import { PaymentContainer } from "./Styles";

const PaymentScreen = () => {
  const dispatch = useDispatch();
  const [paymentMethod, setPaymentMethod] = useState("cod");

  // const { shippingAddress } = useSelector((state) => state.addToCartReducer);
  const history = useHistory();

  // if (!Object.keys(shippingAddress).length) {
  //   history.push("/shipping");
  // }

  //order confirmed

  var {
    shippingAddress,
    // paymentMethod,
    cartItems500,
    cartItemsId500,
    cartItems1,
    cartItemsId1,
    cartItems2,
    cartItemsId2,
    itemsPrice,
    deliveryPrice,
    taxPrice,
    totalPrice,
  } = useSelector((state) => state.addToCartReducer);

  const { loading, error, success, orders } = useSelector(
    (state) => state.orderReducer
  );

  var itemprice500 = cartItemsId500.reduce(
    (a, c) => a + cartItems500[c].unit_price * cartItems500[c].qty,
    0
  );

  var itemprice1 = cartItemsId1.reduce(
    (a, c) => a + cartItems1[c].unit_price * cartItems1[c].qty,
    0
  );

  var itemprice2 = cartItemsId2.reduce(
    (a, c) => a + cartItems2[c].unit_price * cartItems2[c].qty,
    0
  );

  itemsPrice = itemprice500 + itemprice1 + itemprice2;

  deliveryPrice = 0;
  taxPrice = 0;
  totalPrice = itemsPrice + deliveryPrice + taxPrice;

  if (!paymentMethod) {
    history.push("/payment");
  }

  const handlePaymentMethod = (e) => {
    e.preventDefault();
    dispatch(savePaymentMethod(paymentMethod));

    let orderItems500 = cartItemsId500.map((id) => cartItems500[id]);
    let orderItems1 = cartItemsId1.map((id) => cartItems1[id]);
    let orderItems2 = cartItemsId2.map((id) => cartItems2[id]);

    let orderItems = [...orderItems500, ...orderItems1, ...orderItems2];

    console.log(orderItems);
    let itemArray = [];

    orderItems.map((item) => {
      let orderObj = {};
      orderObj["product_id"] = item.p_id;
      orderObj["product_price"] = item.unit_price;
      orderObj["price_unit_id"] = 2;
      orderObj["order_quantity"] = item.qty;
      itemArray.push(orderObj);
    });

    let placedOrder = {};
    placedOrder["total"] = Number(totalPrice);
    placedOrder["item"] = itemArray;

    // fetch user_address_id

    const orderAddress = shippingAddress?.find(
      (item) =>
        item.user_address_name === localStorage.getItem("user_address_ref")
    );

    placedOrder["user_address_id"] = orderAddress.user_address_id;
    dispatch(createOrder(placedOrder));
    history.push(`/your-order-his`);

    // filter items for send data to backend
    // let orderItems = cartItemsId.map((id) => cartItems[id]);
    // let itemArray = [];

    // orderItems.map((item) => {
    //   let orderObj = {};
    //   orderObj["product_id"] = item.p_id;
    //   orderObj["product_price"] = item.unit_price;
    //   orderObj["price_unit_id"] = 2;
    //   orderObj["order_quantity"] = item.qty;
    //   itemArray.push(orderObj);
    // });

    // let placedOrder = {};
    // placedOrder["total"] = Number(totalPrice);
    // placedOrder["item"] = itemArray;
    // dispatch(createOrder(placedOrder));
  };

  // useEffect(() => {
  // if (success) {
  // history.push(`/order/${orders[0].order_id}`);
  // history.push(`/your-order-his`);
  // dispatch({ type: ORDER_RESET });
  // }
  // }, [orders, history, success]);

  // const handlePaymentMethod = (e) => {
  //   e.preventDefault();
  //   dispatch(savePaymentMethod(paymentMethod));
  //   // history.push("/order-summary");
  // };

  return (
    <form onSubmit={handlePaymentMethod}>
      <PaymentContainer>
        <div className="payment-options">
          <input
            type="radio"
            id="cod"
            value="cod"
            name="paymentMethod"
            onChange={(e) => setPaymentMethod(e.target.value)}
            defaultChecked
            // required
          />
          Cash on Delivery
        </div>
        <br />
        <div className="payment-options">
          <input
            type="radio"
            id="razorpay"
            value="razorpay"
            name="paymentMethod"
            onChange={(e) => setPaymentMethod(e.target.value)}
            // required
          />
          RazorPay
        </div>
        <br />
        <div className="payment-options">
          <button type="submit">Make Payment</button>
        </div>
      </PaymentContainer>
    </form>
  );
};

export default PaymentScreen;
