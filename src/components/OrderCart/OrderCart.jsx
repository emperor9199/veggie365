import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  addToCart,
  decreaseQty,
  orderPrices,
} from "../../redux/actions/cartActions";
import { CartContainer } from "./Styles";

const OrderCart = () => {
  const dispatch = useDispatch();

  const { cartItems, cartItemsId } = useSelector(
    (state) => state.addToCartReducer
  );

  const increaseItemQty = (product) => {
    dispatch(addToCart(product, product.p_id, product.unit_price, 1));
  };

  const decreaseItemQty = (productId) => {
    dispatch(decreaseQty(productId));
  };

  // order save
  const cart = useSelector((state) => state.addToCartReducer);
  const { user } = useSelector((state) => state.userLoginReducer);
  const history = useHistory();

  if (!Object.keys(user).length) {
    history.push("/login");
  }

  let { itemsPrice, deliveryPrice, taxPrice, totalPrice } = cart;

  itemsPrice = cartItemsId.reduce(
    (a, c) => a + cartItems[c].unit_price * cartItems[c].qty,
    0
  );

  deliveryPrice = itemsPrice > 100 ? 15 : 0;
  taxPrice = 0.05 * itemsPrice;
  totalPrice = itemsPrice + deliveryPrice + taxPrice;

  const handleOrderPrice = () => {
    dispatch(orderPrices(itemsPrice, deliveryPrice, taxPrice, totalPrice));
    history.push("/payment");
  };

  return (
    <>
      {cartItemsId.length === 0 ? (
        <div>Cart is Empty</div>
      ) : (
        <CartContainer>
          <div className="cart-container">
            <h2>My Orders</h2>
            <hr />
            {cartItemsId?.map((id) => {
              let item = cartItems[id];
              return (
                <div key={item.p_id} className="cart-inner-container">
                  <div className="cart-item-img">
                    <img src={item.img} alt="" />
                  </div>
                  <div className="cart-item-details">
                    <h3>{item.name}</h3>
                    <p>{item.about}</p>

                    <button onClick={() => decreaseItemQty(item.p_id)}>
                      -
                    </button>
                    <span>{item.qty}</span>
                    <button onClick={() => increaseItemQty(item)}>+</button>
                    <h3> Price: ₹{item.unit_price * item.qty} </h3>
                  </div>
                  <div className="cart-item-delivery-details">
                    <p>Delivery by Thu Jul 29</p>
                  </div>
                </div>
              );
            })}
            <button className="order-summary-btn">Continue</button>
          </div>
        </CartContainer>
      )}
    </>
  );
};

export default OrderCart;
