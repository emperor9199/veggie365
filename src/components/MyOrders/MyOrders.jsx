import React from "react";
import "./MyOrders.css";
import ProductOrder from "../ProductOrder/ProductOrder";
import CabOrders from "../CabOrders/CabOrders";

function MyOrders() {
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
