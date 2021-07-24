import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  decreaseQty,
  orderPrices,
} from "../redux/actions/cartActions";

const CartScreen = (props) => {
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

  if (!Object.keys(user).length) {
    props.history.push("/login");
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
    props.history.push("/shipping");
  };

  return (
    <>
      <h3>Cart Items</h3>
      <div>
        <div>
          {cartItemsId.length === 0 ? (
            <div>Cart is Empty</div>
          ) : (
            <div>
              {cartItemsId?.map((id) => {
                let item = cartItems[id];
                console.log(item);
                return (
                  <div key={item.p_id}>
                    <div>
                      <h3>
                        {item.p_id}-{item.name}
                      </h3>
                      <button onClick={() => decreaseItemQty(item.p_id)}>
                        -
                      </button>
                      <span>{item.qty}</span>
                      <button onClick={() => increaseItemQty(item)}>+</button>
                      <p>{item.about}</p>
                      <h3> Price: ${item.unit_price * item.qty} </h3>
                      <hr />
                    </div>
                  </div>
                );
              })}
              <div>
                Grand Total: (
                {cartItemsId.reduce((a, c) => a + cartItems[c].qty, 0)}
                items) : $
                {cartItemsId.reduce(
                  (a, c) => a + cartItems[c].unit_price * cartItems[c].qty,
                  0
                )}
                <button className="general-button" onClick={handleOrderPrice}>
                  Proceed to Checkout
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CartScreen;
