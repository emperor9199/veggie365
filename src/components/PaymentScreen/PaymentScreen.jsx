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

  const {
    // shippingAddress,
    // paymentMethod,
    cartItems,
    cartItemsId,
    itemsPrice,
    deliveryPrice,
    taxPrice,
    totalPrice,
  } = useSelector((state) => state.addToCartReducer);

  const { loading, error, success, orders } = useSelector(
    (state) => state.orderReducer
  );

  // if (!paymentMethod) {
  //   history.push("/payment");
  // }

  const handlePaymentMethod = (e) => {
    e.preventDefault();
    dispatch(savePaymentMethod(paymentMethod));

    // filter items for send data to backend
    let orderItems = cartItemsId.map((id) => cartItems[id]);
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
    dispatch(createOrder(placedOrder));
  };

  useEffect(() => {
    if (success) {
      // history.push(`/order/${orders[0].order_id}`);
      // history.push(`/your-order-his`);
      // dispatch({ type: ORDER_RESET });
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
            id="paypal"
            value="paypal"
            name="paymentMethod"
            onChange={(e) => setPaymentMethod(e.target.value)}
            defaultChecked
            required
          />
          PayPal
        </div>
        <br />
        <div className="payment-options">
          <input
            type="radio"
            id="cod"
            value="cod"
            name="paymentMethod"
            onChange={(e) => setPaymentMethod(e.target.value)}
            required
          />
          Cash on Delivery
        </div>
        <div className="payment-options">
          <button type="submit">Make Payment</button>
        </div>
      </PaymentContainer>
    </form>
  );
};

export default PaymentScreen;
