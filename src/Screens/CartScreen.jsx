import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart, decreaseQty } from "../redux/actions/cartActions";

const CartScreen = () => {
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
                  <div key={item.p_id} className="cart-container">
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
              <div className="checkout-container">
                Grand Total: (
                {cartItemsId.reduce((a, c) => a + cartItems[c].qty, 0)}
                items) : $
                {cartItemsId.reduce(
                  (a, c) => a + cartItems[c].unit_price * cartItems[c].qty,
                  0
                )}
                <Link to="/shipping">
                  <button
                    className="general-button"
                    style={{ marginTop: "1rem" }}
                  >
                    Proceed to Checkout
                  </button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CartScreen;
