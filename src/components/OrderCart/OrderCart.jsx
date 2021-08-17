import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  addToCart,
  decreaseQty,
  orderPrices,
} from "../../redux/actions/cartActions";
import { CartContainer } from "./Styles";

const OrderCart = ({ expanded, setExpanded }) => {
  const dispatch = useDispatch();

  const {
    cartItems500,
    cartItemsId500,
    cartItems1,
    cartItemsId1,
    cartItems2,
    cartItemsId2,
  } = useSelector((state) => state.addToCartReducer);

  const increaseItemQty = (product) => {
    dispatch(
      addToCart(product, product.p_id, product.unit_price, product.unit_name, product.unit_id,1)
    );
  };

  const decreaseItemQty = (product) => {
    dispatch(decreaseQty(product.p_id, product.unit_price, product.unit_name));
  };

  // order save
  const cart = useSelector((state) => state.addToCartReducer);
  const { user } = useSelector((state) => state.userLoginReducer);
  const history = useHistory();

  if (!Object.keys(user).length) {
    history.push("/login");
  }

  let { itemsPrice, deliveryPrice, taxPrice, totalPrice } = cart;

  var itemprice500 = cartItemsId500.reduce(
    (a, c) => a + cartItems500[c].unit_price * cartItems500[c].qty,
    0
  );

  var itemprice1 = cartItemsId1.reduce(
    (a, c) => a + cartItems1[c].unit_price * cartItems1[c].qty,
    0
  );

  var itemprice2 = cartItemsId2.reduce(
    (a, c) => a + cartItems2[c].unit_price * cartItems2[c].qty,
    0
  );

  itemsPrice = itemprice500 + itemprice1 + itemprice2;

  deliveryPrice = 0;
  taxPrice = 0;
  totalPrice = itemsPrice + deliveryPrice + taxPrice;

  useEffect(() => {
    dispatch(orderPrices(itemsPrice, deliveryPrice, taxPrice, totalPrice));
  }, [itemsPrice, deliveryPrice, taxPrice, totalPrice, dispatch]);

  const handleOrderPrice = () => {
    setExpanded("panel3");
  };

  var date = String(new Date());
  var todayDate = date.split(" ");
  todayDate = todayDate[0] + " " + todayDate[1] + " " + todayDate[2];

  return (
    <>
      {cartItemsId500.length === 0 &&
      cartItemsId1.length === 0 &&
      cartItemsId2.length === 0 ? (
        <div>Cart is Empty</div>
      ) : (
        <CartContainer>
          <div className="cart-container">
            <h2>My Orders</h2>
            <hr />
            {cartItemsId500?.map((id) => {
              let item = cartItems500[id];
              return (
                <div key={item.p_id} className="cart-inner-container">
                  <div className="cart-item-img">
                    <img src={item.img} alt="" />
                  </div>
                  <div className="cart-item-details">
                    <h3>{item.name}</h3>
                    <p>{item.about}</p>

                    <button onClick={() => decreaseItemQty(item)}>-</button>
                    <span>{item.qty}</span>
                    <button onClick={() => increaseItemQty(item)}>+</button>
                    <h3>
                      (₹{item.unit_price}/{item.unit_name})
                    </h3>

                    <h3> Price: ₹{item.unit_total} </h3>
                  </div>
                  <div className="cart-item-delivery-details">
                    <p>Delivery by {todayDate}</p>
                  </div>
                </div>
              );
            })}

            {/* 1kg */}
            {cartItemsId1?.map((id) => {
              let item = cartItems1[id];
              return (
                <div key={item.p_id} className="cart-inner-container">
                  <div className="cart-item-img">
                    <img src={item.img} alt="" />
                  </div>
                  <div className="cart-item-details">
                    <h3>{item.name}</h3>
                    <p>{item.about}</p>

                    <button onClick={() => decreaseItemQty(item)}>-</button>
                    <span>{item.qty}</span>
                    <button onClick={() => increaseItemQty(item)}>+</button>
                    <h3>
                      (₹{item.unit_price}/{item.unit_name})
                    </h3>

                    <h3> Price: ₹{item.unit_total} </h3>
                  </div>
                  <div className="cart-item-delivery-details">
                    <p>Delivery by {todayDate}</p>
                  </div>
                </div>
              );
            })}

            {/* 2kg */}
            {cartItemsId2?.map((id) => {
              let item = cartItems2[id];
              return (
                <div key={item.p_id} className="cart-inner-container">
                  <div className="cart-item-img">
                    <img src={item.img} alt="" />
                  </div>
                  <div className="cart-item-details">
                    <h3>{item.name}</h3>
                    <p>{item.about}</p>

                    <button onClick={() => decreaseItemQty(item)}>-</button>
                    <span>{item.qty}</span>
                    <button onClick={() => increaseItemQty(item)}>+</button>
                    <h3>
                      (₹{item.unit_price}/{item.unit_name})
                    </h3>

                    <h3> Price: ₹{item.unit_total} </h3>
                  </div>
                  <div className="cart-item-delivery-details">
                    <p>Delivery by {todayDate}</p>
                  </div>
                </div>
              );
            })}
            <button className="order-summary-btn" onClick={handleOrderPrice}>
              Continue
            </button>
          </div>
        </CartContainer>
      )}
    </>
  );
};

export default OrderCart;
