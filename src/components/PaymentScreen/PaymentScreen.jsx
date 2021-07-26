import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { savePaymentMethod } from "../../redux/actions/cartActions";
import { PaymentContainer } from "./Styles";

const PaymentScreen = () => {
  const dispatch = useDispatch();
  const [paymentMethod, setPaymentMethod] = useState("paypal");

  const { shippingAddress } = useSelector((state) => state.addToCartReducer);
  const history = useHistory();

  // if (!Object.keys(shippingAddress).length) {
  //   history.push("/shipping");
  // }

  const handlePaymentMethod = (e) => {
    e.preventDefault();
    dispatch(savePaymentMethod(paymentMethod));
    // history.push("/order-summary");
  };

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
            checked
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
          COD
        </div>
        <div className="payment-options">
          <button type="submit">Make Payment</button>
        </div>
      </PaymentContainer>
    </form>
  );
};

export default PaymentScreen;
