import React from "react";
import "./MyOrders.css";
import ProductOrder from "../ProductOrder/ProductOrder";
import CabOrders from "../CabOrders/CabOrders";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

function MyOrders() {
  const { user } = useSelector((state) => state.userLoginReducer);
  const history = useHistory();

  if (!Object.keys(user).length) {
    history.push("/login");
  }

  return (
    <div className="MyOrders_container">
      <div className="product_prders">
        <div className="starproducts_head_title">Your Orders</div>
        <div className="starproducts_line" />
        <ProductOrder />
      </div>
      <div className="cab_orders">
        <div className="starproducts_head_title">Cab Orders</div>
        <div className="starproducts_line" />
        <CabOrders />
      </div>
    </div>
  );
}

export default MyOrders;
