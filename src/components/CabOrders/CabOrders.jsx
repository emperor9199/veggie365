import React, { useState, useEffect } from "react";
import axios from "axios";
import EmptyOrders from "../EmptyOrders/EmptyOrders";
import cab from "../../img/cab.svg";
import "./CabOrders.css";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

function CabOrders() {
  const [orders, setOrders] = useState([]);
  const userr = JSON.parse(localStorage.getItem("loggedUser"));
  const { user } = useSelector((state) => state.userLoginReducer);
  const history = useHistory();

  if (!Object.keys(user).length) {
    history.push("/login");
  }

  const authAxios = axios.create({
    baseURL: "https://dharm.ga/api",
    headers: {
      Authorization: `Bearer ${JSON.parse(localStorage.getItem("userToken"))}`,
    },
  });

  const fetchProducts = async () => {
    const { data } = await authAxios.get("/caborder");
    setOrders(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  let myOrder = orders.filter((ord) => ord.user_id === userr[0].user_id);

  const checkStatus = (sta) => {
    if (sta === 0) {
      return "Order Pending";
    } else if (sta === 1) {
      return "Order Accepted";
    } else if (sta === 2) {
      return "Out For the Delivery";
    } else if (sta === 3) {
      return "Deliverd";
    } else if (sta === 4) {
      return "Cancelled";
    }
  };
  return (
    <div>
      {myOrder.length === 0 ? (
        <EmptyOrders lab="cab" />
      ) : (
        myOrder.map((cabo, key) => {
          return (
            <div className="caborder_card" key={key}>
              <div className="caborder_cab_img">
                <img src={cab} alt="cab" className="caborder_cab_img_data" />
              </div>
              <div className="caborder_cab_body">
                <div className="myorder_id">Order Id: {cabo.cab_order_id}</div>
                <div className="caborder_cab_body_add">
                  <div className="myorder_delivery_add">Delivery Address </div>
                  <div className="myorder_delivery_add_data">
                    {cabo.user_address + " " + cabo.user_pincode}
                  </div>
                </div>
                <div className="myorder_card_body_title">
                  Order Status: {checkStatus(cabo.cab_order_status)}
                </div>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
}

export default CabOrders;
