import React from "react";
import { useSelector } from "react-redux";

const YourOrderScreen = () => {
  const { orders } = useSelector((state) => state.orderReducer);

  return (
    <div>
      Your Orders
      {orders?.map((orderItem) => {
        return (
          <div key={orderItem.order_id}>
            <h1 style={{ fontSize: "2rem" }}>
              {orderItem.order_id} - ₹{orderItem.order_total}
            </h1>
          </div>
        );
      })}
    </div>
  );
};

export default YourOrderScreen;
