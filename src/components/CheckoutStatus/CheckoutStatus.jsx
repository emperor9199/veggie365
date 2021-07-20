import React from "react";
import { CheckoutContainer } from "./Styled";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import RadioButtonCheckedIcon from "@material-ui/icons/RadioButtonChecked";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";

const CheckoutStatus = () => {
  return (
    <CheckoutContainer>
      <span>Shipping</span>
      <span>Payment</span>
      <span>Review</span>
    </CheckoutContainer>
  );
};

export default CheckoutStatus;
