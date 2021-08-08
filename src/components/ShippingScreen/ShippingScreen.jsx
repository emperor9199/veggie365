import React, { useEffect, useState } from "react";
import "./shippingStyle.css";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import axios from "axios";
import {
  addShippingAddress,
  updateShippingAddress,
} from "../../redux/actions/cartActions";

var val = "";

const ShippingScreen = ({ expanded, setExpanded }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.userLoginReducer);
  const history = useHistory();

  if (!Object.keys(user).length) {
    history.push("/login");
  }

  const [fullName, setFullName] = useState(
    user.user_name ? user.user_name : ""
  );
  const [mobile, setMobile] = useState(user.user_phone ? user.user_phone : "");
  const [pincode, setPincode] = useState(null);
  const [city, setCity] = useState("Rajkot");
  const [address, setAddress] = useState("");
  const [userAddressId, setUserAddressId] = useState(null);
  const [findAddress, setFindAddress] = useState(null);

  const fetchAddressData = async (a_type) => {
    val = a_type;

    const authAxios = axios.create({
      baseURL: "https://dharm.ga/api",
      headers: {
        Authorization: `Bearer ${JSON.parse(
          localStorage.getItem("userToken")
        )}`,
      },
    });

    const { data } = await authAxios.get("/useraddress");

    const findAddr = data?.find((item) => item.user_address_name === a_type);

    if (findAddr !== undefined) {
      setFindAddress(findAddr);
      localStorage.setItem("foundAddr", true);
      setPincode(findAddr.pincode);
      setAddress(findAddr.full_address);
      setUserAddressId(findAddr.user_address_id);
    } else {
      setFindAddress(null);
      setPincode("");
      setAddress("");
      setUserAddressId(null);
      localStorage.removeItem("foundAddr");
    }
  };

  useEffect(() => {
    fetchAddressData("home");
  }, []);

  useEffect(() => {
    fetchAddressData("home");
  }, [expanded === "panel1"]);

  const handleShippingAddress = (e) => {
    e.preventDefault();

    if (val === "other") {
      setPincode(pincode);
      setAddress(address);

      const other_address = {
        user_id: user.user_id,
        user_address_name: "other",
        full_address: address,
        city_name: "Rajkot",
        pincode: Number(pincode),
      };

      localStorage.setItem("shippingAddress", JSON.stringify(other_address));
    }

    if (val === "home" && (localStorage.getItem("foundAddr") || findAddress)) {
      dispatch(updateShippingAddress(userAddressId, val, address, pincode)); // update address
      localStorage.removeItem("foundAddr");
    } else if (val === "home") {
      dispatch(addShippingAddress(val, address, pincode)); // add new address
      localStorage.removeItem("foundAddr");
    }

    setExpanded("panel2");
  };

  return (
    <form className="shipping-container" onSubmit={handleShippingAddress}>
      <div className="first-sec">
        <div className="sub-sec">
          <label htmlFor="fullname">FullName</label>
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </div>
        <div className="sub-sec">
          <label htmlFor="mobile">Mobile No</label>
          <input
            type="text"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            required
          />
        </div>
      </div>
      <div className="second-sec">
        <div className="sub-sec">
          <label htmlFor="pincode">Pincode</label>
          <input
            type="text"
            value={pincode}
            onChange={(e) => setPincode(e.target.value)}
            required
          />
        </div>
        <div className="sub-sec">
          <label htmlFor="city">City</label>
          <input type="text" value={city} required disabled />
        </div>
      </div>
      <div className="third-sec">
        <div className="last-sub-sec">
          <label htmlFor="address">Address</label>
          <textarea
            type="text"
            rows="3"
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
          onChange={(e) => fetchAddressData(e.target.value)}
          checked={val === "home" ? true : false}
        />
         <label htmlFor="home">Home</label>
        <input
          type="radio"
          id="other"
          name="address_type"
          value="other"
          onChange={(e) => fetchAddressData(e.target.value)}
          checked={val === "other" ? true : false}
        />
         <label htmlFor="other">Other</label>
        <br />
      </div>

      <div className="continue-shipping-btn">
        <button type="submit">Continue</button>
      </div>
    </form>
  );
};

export default ShippingScreen;
