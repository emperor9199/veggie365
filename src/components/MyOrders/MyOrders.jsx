import React, { useState, useEffect } from 'react';
import axios from "axios";
import "./MyOrders.css";

function MyOrders() {

    const [orders, setOrders] = useState([]);
  const [productPrice, setProductPrice] = useState([]);

  const authAxios = axios.create({
    baseURL: "https://dharm.ga/api",
    headers: {
      Authorization: `Bearer ${JSON.parse(localStorage.getItem("userToken"))}`,
    },
  });

  const fetchProducts = async () => {
    const { data } = await authAxios.get("/user");
    const { orderData } = await authAxios.get("/order");
    const { soloorderData } = await authAxios.get("/order");

    setOrders(data.product);
    setProductPrice(data.price);
  };

  useEffect(() => {
    fetchProducts();
  }, []);


    return (
        <div className="MyOrders_container">
            <div className="myorder_cont">
                <div className="myorder_card">
                    <div className="myorder_img">
                        <img className="myorder_img_data" src="https://media.starquik.com/catalog/product/SQ101373.jpg" alt="myorder" />
                    </div>
                    <div className="myorder_order_info">
                        <div className="myorder_product_name">Onion</div>
                        <div className="myorder_product_cat">Root Vegetable</div>
                        <div className="myorder_product_cat">Qty: 500g</div>
                        <div className="myorder_product_price">MRP: ₹50.00</div>
                        <div className="myorder_product_status">Orders Status: Cancel</div>
                    </div>
                    <div className="myorder_address">
                        <div className="myorder_product_name">Delivery Address</div>
                        <div className="myorder_product_price">Vishw Kadu</div>
                        <div className="myorder_user_address">12/382, Krishndham 2, NR. Sharanam 12, Vejalpur, Ahmedabad-380015</div>
                        <div className="myorder_user_no"><span className="myorder_product_price">Phone No: </span>8128347277</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyOrders
