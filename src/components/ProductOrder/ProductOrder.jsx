import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cancelOrder } from "../../redux/actions/orderActions";
import axios from "axios";

function ProductOrder() {
  const [orders, setOrders] = useState([]);
  const [soloorder, setSoloprder] = useState([]);

  const { savedAddress } = useSelector((state) => state.addToCartReducer);

  const user = JSON.parse(localStorage.getItem("loggedUser"));
  const dispatch = useDispatch();

  const authAxios = axios.create({
    baseURL: "https://dharm.ga/api",
    headers: {
      Authorization: `Bearer ${JSON.parse(localStorage.getItem("userToken"))}`,
    },
  });

  const fetchProducts = async () => {
    const { data } = await authAxios.get("/order/all");
    setOrders(data.orderdata);
    setSoloprder(data.orderitem);
  };

  const handleCancel = (oid) => {
    dispatch(cancelOrder(oid));
    window.location.reload();
    checkStatus(4);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  let myOrder = orders.filter((ord) => ord.user_id === user[0].user_id);

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

  console.log(savedAddress);
  return myOrder.map((ord, key) => {
    return (
      <div className="myorder_card" key={key}>
        <div className="myorder_card_head">
          <div className="myorder_add">
            <div className="myorder_delivery_add">Delivery Address </div>
            <div className="myorder_delivery_add_data">
              12/982, Amar Heights,Setllite, Ahmedabad-380015
            </div>
          </div>
          <div className="myorder_id">Order Id: {ord.order_id}</div>
        </div>
        <hr />
        {soloorder
          .filter((solo) => solo.order_id === ord.order_id)
          .map((solod, key) => {
            return (
              <div key={key} className="myorder_card_body_con">
                <div className="myorder_card_body">
                  <div className="myorder_card_body_img">
                    <img
                      src={solod.product_img}
                      alt={solod.product_img}
                      className="myorder_card_body_img"
                    />
                  </div>
                  <div className="myorder_card_body_con">
                    <div
                      className="myorder_card_body_title"
                      style={{ marginBottom: ".3rem" }}
                    >
                      {solod.product_name}
                    </div>
                    <div
                      className="myorder_id"
                      style={{ marginBottom: ".3rem" }}
                    >
                      Unit: {solod.price_unit_name}
                    </div>
                    <div
                      className="myorder_card_body_qty"
                      style={{ marginBottom: ".3rem" }}
                    >
                      Total QTY: {solod.order_quantity}
                    </div>
                    <div className="myorder_card_body_price">
                      Price: {solod.product_price}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        <div className="myorder_delivery_footer">
          <div className="myorder_card_body_title">
            Total: {ord.order_total}
          </div>
          <div className="myorder_card_body_title">
            Status: {checkStatus(ord.order_status)}
            {ord.order_status === 0 ? (
              <div
                className="myorder_cancel_btn"
                onClick={() => handleCancel(ord.order_id)}
              >
                Cancel
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    );
  });
}

export default ProductOrder;
