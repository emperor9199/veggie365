import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import CheckoutStatus from "../components/CheckoutStatus/CheckoutStatus";
import { savePaymentMethod } from "../redux/actions/cartActions";

const PaymentScreen = (props) => {
  const dispatch = useDispatch();
  const [paymentMethod, setPaymentMethod] = useState("paypal");

  const { shippingAddress } = useSelector((state) => state.addToCartReducer);

  if (!Object.keys(shippingAddress).length) {
    props.history.push("/shipping");
  }

  const handlePaymentMethod = (e) => {
    e.preventDefault();
    dispatch(savePaymentMethod(paymentMethod));
    props.history.push("/order-summary");
  };

  return (
    <>
      <CheckoutStatus step1 step2 />
      <div>
        <h1 style={{ textAlign: "center", marginTop: "2rem" }}>
          Payment Method
        </h1>
        <form onSubmit={handlePaymentMethod}>
          <div>
            <input
              type="radio"
              id="paypal"
              value="paypal"
              name="paymentMethod"
              onChange={(e) => setPaymentMethod(e.target.value)}
              checked
              required
            />
            PayPal
            <br />
            <input
              type="radio"
              id="stripe"
              value="stripe"
              name="paymentMethod"
              onChange={(e) => setPaymentMethod(e.target.value)}
              required
            />
            Stripe
            <br />
            <input
              type="radio"
              id="cod"
              value="cod"
              name="paymentMethod"
              onChange={(e) => setPaymentMethod(e.target.value)}
              required
            />
            COD
            <button
              type="submit"
              className="general-button"
              style={{ marginTop: "1rem" }}
            >
              Pay
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default PaymentScreen;
