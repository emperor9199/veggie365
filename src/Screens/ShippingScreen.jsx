import React, { useState } from "react";
import CheckoutStatus from "../components/CheckoutStatus/CheckoutStatus";
import { useDispatch, useSelector } from "react-redux";
import { saveShippingAddress } from "../redux/actions/cartActions";
import { Link } from "react-router-dom";

const ShippingScreen = (props) => {
  const dispatch = useDispatch();
  const { shippingAddress } = useSelector((state) => state.addToCartReducer);
  const { user } = useSelector((state) => state.userLoginReducer);

  if (!Object.keys(user).length) {
    props.history.push("/login");
  }

  const [fullName, setFullName] = useState(shippingAddress.fullName);
  const [address, setAddress] = useState(shippingAddress.address);
  const [city, setCity] = useState(shippingAddress.city);
  const [postalCode, setPostalCode] = useState(shippingAddress.postalCode);
  const [country, setCountry] = useState(shippingAddress.country);

  const handleShippingAddress = (e) => {
    e.preventDefault();
    dispatch(
      saveShippingAddress({ fullName, address, city, postalCode, country })
    );
    props.history.push("/payment");
  };

  return (
    <div className="shipping-screen-container">
      <CheckoutStatus step1 />
      <h1 style={{ textAlign: "center", marginTop: "2rem" }}>
        Shipping Details
      </h1>
      <form onSubmit={handleShippingAddress}>
        <div className="form-container">
          <div>
            <label htmlFor="fullName">Full name</label>
            <input
              type="text"
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="address">Address</label>
            <input
              type="text"
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="city">City</label>
            <input
              type="text"
              onChange={(e) => setCity(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="postalCode">Postal Code</label>
            <input
              type="text"
              onChange={(e) => setPostalCode(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="country">Country</label>
            <input
              type="text"
              onChange={(e) => setCountry(e.target.value)}
              required
            />
          </div>
          <div>
            <button type="submit" className="general-button">
              Continue
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ShippingScreen;
