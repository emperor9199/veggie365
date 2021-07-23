import React from "react";
import { useSelector } from "react-redux";

const PaymentScreen = () => {
  const { shippingAddress } = useSelector((state) => state.addToCartReducer);
  console.log(shippingAddress);
  return (
    <div>
      Payment Screen
      <h3>{shippingAddress.fullName}</h3>
    </div>
  );
};

export default PaymentScreen;
