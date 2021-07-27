import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveShippingAddress } from "../../redux/actions/cartActions";
import { useHistory } from "react-router-dom";
import { ShippingContainer } from "./Styles";
import axios from "axios";

const ShippingScreen = ({ expanded, setExpanded }) => {
  const dispatch = useDispatch();
  const { shippingAddress } = useSelector((state) => state.addToCartReducer);
  const { user } = useSelector((state) => state.userLoginReducer);
  const [selectedAddress, setSelectedAddress] = useState("home");
  const history = useHistory();

  if (!Object.keys(user).length) {
    history.push("/login");
  }

  useEffect(() => {
    dispatch(saveShippingAddress(selectedAddress));
  }, []);

  setTimeout(() => {
    setAddress(shippingAddress.user_address_name);
    setPincode(shippingAddress.pincode);
  }, 250);

  const [fullName, setFullName] = useState(user.user_name);
  const [mobile, setMobile] = useState(user.user_phone);
  const [pincode, setPincode] = useState();
  const [city, setCity] = useState("cityName");
  const [address, setAddress] = useState();

  const handleRadio = (e) => {
    setSelectedAddress(e.target.value);
    dispatch(saveShippingAddress(selectedAddress));
  };

  const handleShippingAddress = (e) => {
    e.preventDefault();
    //dispatch(saveShippingAddress(selectedAddress));

    setExpanded("panel2");
    // props.history.push("/payment");
  };

  return (
    <form onSubmit={handleShippingAddress}>
      <ShippingContainer>
        <div className="form-section">
          <div>
            <label htmlFor="fullName">Your Name</label>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="mobile">Mobile no</label>
            <input
              type="text"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="form-section">
          <div>
            <label htmlFor="pincode">Pincode</label>
            <input
              type="text"
              value={pincode}
              onChange={(e) => setPincode(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="city">City</label>
            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="form-address-section">
          <div>
            <label htmlFor="address">Address</label>
            <br />
            <textarea
              cols={40}
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="choose-address">
          <input
            type="radio"
            id="home"
            name="address_type"
            value="home"
            onChange={handleRadio}
            checked={selectedAddress === "home" ? true : false}
          />
           <label htmlFor="home">Home</label>
          <input
            type="radio"
            id="work"
            name="address_type"
            value="work"
            onChange={handleRadio}
            checked={selectedAddress === "work" ? true : false}
          />
           <label htmlFor="work">Work</label>
          <input
            type="radio"
            id="other"
            name="address_type"
            value="other"
            onChange={handleRadio}
            checked={selectedAddress === "other" ? true : false}
          />
           <label htmlFor="other">Other</label>
          <br />
        </div>

        <div className="continue-shipping-btn">
          <button type="submit">Continue</button>
        </div>
      </ShippingContainer>
    </form>
  );
};

export default ShippingScreen;
