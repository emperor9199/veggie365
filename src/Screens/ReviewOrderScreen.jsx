import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createOrder } from "../redux/actions/orderActions";
// import { ORDER_RESET } from "../redux/constants/orderConstants";
import LoadingBox from "../components/LoadingBox";
import ErrorBox from "../components/ErrorBox";
import { useHistory } from "react-router-dom";

const ReviewOrderScreen = ({ expanded, setExpanded }) => {
  const dispatch = useDispatch();
  const {
    shippingAddress,
    // paymentMethod,
    cartItems,
    cartItemsId,
    itemsPrice,
    deliveryPrice,
    taxPrice,
    totalPrice,
  } = useSelector((state) => state.addToCartReducer);

  const { loading, error, success, orders } = useSelector(
    (state) => state.orderReducer
  );

  const history = useHistory();

  // if (!paymentMethod) {
  //   history.push("/payment");
  // }

  const handleOrders = (e) => {
    e.preventDefault();
    // filter items for send data to backend
    let orderItems = cartItemsId.map((id) => cartItems[id]);
    let itemArray = [];

    orderItems.map((item) => {
      let orderObj = {};
      orderObj["product_id"] = item.p_id;
      orderObj["product_price"] = item.unit_price;
      orderObj["price_unit_id"] = 2;
      orderObj["order_quantity"] = item.qty;
      itemArray.push(orderObj);
    });

    let placedOrder = {};
    placedOrder["total"] = Number(totalPrice);
    placedOrder["item"] = itemArray;
    dispatch(createOrder(placedOrder));
    setExpanded("panel3");
  };

  useEffect(() => {
    if (success) {
      history.push(`/order/${orders[0].order_id}`);
      // dispatch({ type: ORDER_RESET });
    }
  }, [orders, history, success]);

  return (
    <>
      <div>
        Shipping Address Details
        <div>
          <h3>Shipping Address</h3>
          <p>Full Name: {shippingAddress.fullName}</p>
          <p>Address: {shippingAddress.address}</p>
          <p>Postal Code: {shippingAddress.postalCode}</p>
        </div>
        {/* Payment Method Details
          <div>
            <h3>Shipping Address</h3>
            <p>Payment Method: {paymentMethod}</p>
          </div> */}
        Ordered Items
        <div>
          {cartItemsId?.map((id) => {
            let item = cartItems[id];
            return (
              <div key={item.p_id}>
                <img src={item.img} alt={item.name} />
                <div>
                  <h3>{item.name}</h3>
                  <p>{item.about}</p>
                  <h3> Price: ₹{item.unit_price * item.qty} </h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      Total Summary
      <div>
        <form onSubmit={handleOrders}>
          <p>Items Price: ₹{itemsPrice}</p>
          <p>Delivery Price: ₹{deliveryPrice}</p>
          <p>Tax Price: ₹{taxPrice}</p>
          <p style={{ fontWeight: "bold", color: "green" }}>
            Total Price: ₹{totalPrice}
          </p>
          <button type="submit">Place Order</button>
          {loading && <LoadingBox />}
          {error && <ErrorBox msg={error} />}
        </form>
      </div>
    </>
  );
};

export default ReviewOrderScreen;
