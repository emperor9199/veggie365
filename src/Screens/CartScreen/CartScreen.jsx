import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import EmptyCart from "../../components/EmptyCart/EmptyCart";
import {
  addToCart,
  decreaseQty,
  orderPrices,
} from "../../redux/actions/cartActions";
import { CartContainer } from "./Style";

const CartScreen = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
    console.log(product);
    dispatch(
      addToCart(product, product.p_id, product.unit_price, product.unit_name,product.unit_id, 1)
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

  var { itemsPrice, deliveryPrice, taxPrice, totalPrice } = cart;

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

  const handleOrderPrice = () => {
    dispatch(orderPrices(itemsPrice, deliveryPrice, taxPrice, totalPrice));
    history.push("/place-order");
  };

  var date = String(new Date());
  var todayDate = date.split(" ");
  todayDate = todayDate[0] + " " + todayDate[1] + " " + todayDate[2];

  return (
    <>
      {cartItemsId500.length === 0 &&
      cartItemsId1.length === 0 &&
      cartItemsId2.length === 0 ? (
        <EmptyCart name="Cart" />
      ) : (
        <CartContainer>
          <div className="cart-left">
            <h2>My Cart</h2>
            <hr />
            {cartItemsId500?.map((id, index) => {
              let item = cartItems500[id];
              return (
                <div key={index} className="cart-inner-container">
                  <div className="cart-item-img">
                    <img src={item.img} alt="" />
                  </div>
                  <div className="cart-item-details">
                    <h3>{item.name}</h3>
                    <p style={{color:"#636363"}}>{item.about}</p>

                    <button onClick={() => decreaseItemQty(item)}>-</button>
                    <span>{item.qty}</span>
                    <button onClick={() => increaseItemQty(item)}>+</button>
                    {/* <h3> Price: ₹{item.unit_price * item.qty} </h3> */}
                    <h3 style={{fontSize:"1rem",color:"#636363",margin:0,marginBottom:".3rem",padding:0,paddingTop:"1rem"}}>
                      (₹{item.unit_price}/{item.unit_name})
                    </h3>

                    <h3 style={{fontSize:"1.5rem",margin:0,padding:0}}>Price: ₹{item.unit_total}</h3>
                  </div>
                  <div className="cart-item-delivery-details">
                    <p>Delivery by {todayDate}</p>
                  </div>
                </div>
              );
            })}

            {/* 1kg */}
            {cartItemsId1?.map((id, index) => {
              let item = cartItems1[id];
              return (
                <div key={index} className="cart-inner-container">
                  <div className="cart-item-img">
                    <img src={item.img} alt="" />
                  </div>
                  <div className="cart-item-details">
                    <h3>{item.name}</h3>
                    <p style={{color:"#636363"}}>{item.about}</p>

                    <button onClick={() => decreaseItemQty(item)}>-</button>
                    <span>{item.qty}</span>
                    <button onClick={() => increaseItemQty(item)}>+</button>
                    {/* <h3> Price: ₹{item.unit_price * item.qty} </h3> */}
                    <h3 style={{fontSize:"1rem",color:"#636363",margin:0,marginBottom:".3rem",padding:0,paddingTop:"1rem"}}>
                      (₹{item.unit_price}/{item.unit_name})
                    </h3>

                    <h3>Price: ₹{item.unit_total}</h3>
                  </div>
                  <div className="cart-item-delivery-details">
                    <p>Delivery by {todayDate}</p>
                  </div>
                </div>
              );
            })}

            {/* 2 kg */}

            {cartItemsId2?.map((id, index) => {
              let item = cartItems2[id];
              return (
                <div key={index} className="cart-inner-container">
                  <div className="cart-item-img">
                    <img src={item.img} alt="" />
                  </div>
                  <div className="cart-item-details">
                    <h3>{item.name}</h3>
                    <p style={{color:"#636363"}}>{item.about}</p>
                    <button onClick={() => decreaseItemQty(item)}>-</button>
                    <span>{item.qty}</span>
                    <button onClick={() => increaseItemQty(item)}>
                      +
                    </button>{" "}
                    <h3 style={{fontSize:"1rem",color:"#636363",margin:0,marginBottom:".3rem",padding:0,paddingTop:"1rem"}}>
                      (₹{item.unit_price}/{item.unit_name})
                    </h3>
                    {/* <h3> Price: ₹{item.unit_price * item.qty} </h3> */}
                    <h3>Price: ₹{item.unit_total}</h3>
                  </div>
                  <div className="cart-item-delivery-details">
                    <p>Delivery by {todayDate}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="cart-right">
            <h3>PRICE DETAILS</h3>
            <hr />
            <p style={{ fontWeight: "bold" ,color:"#797878"}}>
              Items Price :{" "}
              <span style={{ color: "green" }}> ₹{itemsPrice}</span>
            </p>
            <p style={{ fontWeight: "bold" ,color:"#797878"}}>
              Delivery Charges :{" "}
              <span style={{ color: "green" }}>
                {deliveryPrice === 0 ? "Free" : "₹" + deliveryPrice}
              </span>
            </p>
            <p style={{ fontWeight: "bold" ,color:"#797878"}}>
              Tax Price :{" "}
              <span style={{ color: "green" }}>
                {" "}
                {taxPrice === 0 ? "No Tax" : "₹" + taxPrice}
              </span>
            </p>
            <h3 style={{ fontWeight: "bold", color: "black" }}>
              Grand Total of {""}
              {cartItemsId500.reduce((a, c) => a + cartItems500[c].qty, 0)}
              {""} items : ₹{totalPrice}
            </h3>
            {/* <p>
              Grand Total: (
              {cartItemsId.reduce((a, c) => a + cartItems[c].qty, 0)}
              items) : ₹
              {cartItemsId.reduce(
                (a, c) => a + cartItems[c].unit_price * cartItems[c].qty,
                0
              )}
            </p> */}
            <button className="place-order-btn" onClick={handleOrderPrice}>
              Place Order
            </button>
          </div>
        </CartContainer>
      )}
    </>
  );
};

export default CartScreen;
