import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { ShippingContainer } from "./Styles";
import axios from "axios";
import {
  addShippingAddress,
  updateShippingAddress,
} from "../../redux/actions/cartActions";
// var val = "";
var addressType = [];

const ShippingScreen = ({ expanded, setExpanded }) => {
  const dispatch = useDispatch();
  const radioRef = useRef();
  const { user } = useSelector((state) => state.userLoginReducer);
  const history = useHistory();

  if (!Object.keys(user).length) {
    history.push("/login");
  }

  const [fullName, setFullName] = useState(
    user.user_name ? user.user_name : ""
  );
  const [mobile, setMobile] = useState(user.user_phone ? user.user_phone : "");
  const [pincode, setPincode] = useState();
  const [city, setCity] = useState("Rajkot");
  const [address, setAddress] = useState("");
  const [userAddressId, setUserAddressId] = useState();
  const [findAddress, setFindAddress] = useState();

  const fetchAddressData = async () => {
    const authAxios = axios.create({
      baseURL: "https://dharm.ga/api",
      headers: {
        Authorization: `Bearer ${JSON.parse(
          localStorage.getItem("userToken")
        )}`,
      },
    });

    const { data } = await authAxios.get("/useraddress");
    data?.map((item) => {
      addressType.push(item.user_address_name);
    });

    console.log("data address" + data + "val:" + radioRef.current.value);

    const findAddr = data?.find(
      (item) => item.user_address_name === radioRef.current.value
    );
    console.log("findAddr" + findAddr + "val" + radioRef.current.value);

    if (findAddr !== undefined) {
      setFindAddress(findAddr);
      localStorage.setItem("foundAddr", true);
      setPincode(findAddr.pincode);
      setAddress(findAddr.full_address);
      setUserAddressId(findAddr.user_address_id);
    } else {
      localStorage.setItem("foundAddr", false);
    }
  };

  useEffect(() => {
    fetchAddressData();
  }, [radioRef]);

  // useEffect(() => {
  //   handleRadio("home");
  //   fetchAddressData();
  // }, []);

  // const handleRadio = (addr) => {
  //   val = addr;
  // };

  const handleShippingAddress = (e) => {
    e.preventDefault();

    console.log(localStorage.getItem("foundAddr"));

    if (localStorage.getItem("foundAddr") === "yes") {
      dispatch(
        updateShippingAddress(
          userAddressId,
          radioRef.current.value,
          address,
          pincode
        )
      ); // update address
      localStorage.removeItem("foundAddr");
    } else {
      dispatch(addShippingAddress(radioRef.current.value, address, pincode)); // add new address
      localStorage.removeItem("foundAddr");
    }

    setExpanded("panel2");
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
              // onChange={(e) => setCity(e.target.value)}
              required
              disabled
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
            // onChange={(e) => handleRadio(e.target.value)}
            ref={radioRef}
            defaultChecked
          />
           <label htmlFor="home">Home</label>
          <input
            type="radio"
            id="work"
            name="address_type"
            value="work"
            // onChange={(e) => handleRadio(e.target.value)}
            ref={radioRef}
          />
           <label htmlFor="work">Work</label>
          <input
            type="radio"
            id="other"
            name="address_type"
            value="other"
            // onChange={(e) => handleRadio(e.target.value)}
            ref={radioRef}
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
