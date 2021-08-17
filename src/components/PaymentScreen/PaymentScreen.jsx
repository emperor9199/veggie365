import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { savePaymentMethod } from "../../redux/actions/cartActions";
import { createOrder } from "../../redux/actions/orderActions";
import { ORDER_RESET } from "../../redux/constants/orderConstants";
import { PaymentContainer } from "./Styles";
import cardIcon from "../../img/card-2.png";
import upiIcon from "../../img/upi.png";
import paytmIcon from "../../img/paytm.png";
import phonepayIcon from "../../img/phonepay.png";
import rsIcon from "../../img/rs.jpg";

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
    const orderAddress = shippingAddress?.find(
      (item) =>
        item.user_address_name === localStorage.getItem("user_address_ref")
    );

    placedOrder["user_address_id"] = orderAddress.user_address_id;

    if (paymentMethod === "razorpay") {
      placedOrder["payment"] = 1;

      // integration of razorpay
      var options = {
        key: "rzp_test_mCQYP1VXS2KYbo", // Enter the Key ID generated from the Dashboard
        // key_secret: "Zj6I7kFH6JTbJy7tEDrVLl0p",
        amount: placedOrder["total"] * 100,
        currency: "INR",
        name: "Veggie",
        description: "Test Transaction",
        image: "https://example.com/your_logo",
        order_id: localStorage.getItem("order_id"),
        // callback_url: "https://eneqd3r9zrjok.x.pipedream.net/",
        handler: function (response) {
          const orderAddress = shippingAddress?.find(
            (item) =>
              item.user_address_name ===
              localStorage.getItem("user_address_ref")
          );

          placedOrder["user_address_id"] = orderAddress.user_address_id;
          dispatch(createOrder(placedOrder));
        },
        prefill: {
          name: "Veggie User",
          email: "veggie.user@example.com",
          contact: "9999999999",
        },
        notes: {
          address: "Razorpay Corporate Office",
        },
        theme: {
          color: "#3399cc",
        },
      };

      var rzp1 = new window.Razorpay(options);
      rzp1.open();

      rzp1.on("payment.failed", function (response) {
        alert(response.error.description);
      });
    } else {
      dispatch(createOrder(placedOrder));
    }

    // history.push(`/your-order-his`);

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

  useEffect(() => {
    if (success) {
      history.push(`/your-order-his`);
      dispatch({ type: ORDER_RESET });
    }
  }, [orders, history, success]);

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
          <div className="pay-icon">
            <div className="icon-one">Cash on Delivery</div>
            <div className="icon-two">
              <img src={rsIcon} alt="rs" className="rsIcon" />
            </div>
          </div>
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
          <div className="pay-icon">
            <div className="icon-one">RazorPay</div>
            <div className="icon-two">
              <img src={cardIcon} alt="card" className="cardImg" />
              <img src={upiIcon} alt="upi" className="upiImg" />
              <img src={paytmIcon} alt="paytm" className="paytmImg" />
              <img src={phonepayIcon} alt="phonepay" className="phonepayImg" />
            </div>
          </div>
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
