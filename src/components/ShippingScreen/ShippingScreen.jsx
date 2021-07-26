import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveShippingAddress } from "../../redux/actions/cartActions";
import { useHistory } from "react-router-dom";
import { ShippingContainer } from "./Styles";

const ShippingScreen = ({ expanded, setExpanded }) => {
  const dispatch = useDispatch();
  const { shippingAddress } = useSelector((state) => state.addToCartReducer);
  const { user } = useSelector((state) => state.userLoginReducer);
  const history = useHistory();

  // if (!Object.keys(user).length) {
  //   history.push("/login");
  // }

  const [fullName, setFullName] = useState(shippingAddress.fullName);
  const [mobile, setMobile] = useState(shippingAddress.mobile);
  const [pincode, setPincode] = useState(shippingAddress.pincode);
  const [city, setCity] = useState(shippingAddress.city);
  const [address, setAddress] = useState(shippingAddress.address);

  const handleShippingAddress = (e) => {
    e.preventDefault();
    dispatch(
      saveShippingAddress({
        fullName,
        mobile,
        pincode,
        city,
        address,
      })
    );

    setExpanded("panel2");
    // props.history.push("/payment");
  };

  return (
    <form onSubmit={handleShippingAddress}>
      <ShippingContainer>
        <div className="form-section">
          <div>
            <label htmlFor="fullName">Full name</label>
            <input
              type="text"
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="mobile">Mobile no</label>
            <input
              type="text"
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
              onChange={(e) => setPincode(e.target.value)}
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
        </div>
        <div className="form-address-section">
          <div>
            <label htmlFor="address">Address</label>
            <br />
            <textarea
              cols={40}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="continue-shipping-btn">
          <button type="submit">Continue</button>
        </div>
      </ShippingContainer>
    </form>
  );
};

export default ShippingScreen;
