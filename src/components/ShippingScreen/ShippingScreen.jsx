import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { ShippingContainer } from "./Styles";
import axios from "axios";

var val = "";

const ShippingScreen = ({ expanded, setExpanded }) => {
  var showAddr;

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
  const [pincode, setPincode] = useState(0);
  const [city, setCity] = useState("cityName");
  const [address, setAddress] = useState("");

  const handleRadio = async (addr) => {
    val = addr;
    console.log("SA:" + addr);

    //fetch address if present
    const authAxios = axios.create({
      baseURL: "https://dharm.ga/api",
      headers: {
        Authorization: `Bearer ${JSON.parse(
          localStorage.getItem("userToken")
        )}`,
      },
    });

    const { data } = await authAxios.get("/useraddress");
    showAddr = data.find((address) => address.user_address_name === val);

    if (showAddr !== undefined) {
      setAddress(showAddr.user_address_name);
      setPincode(showAddr.pincode);
    } else {
      setAddress("");
      setPincode(0);
    }
  };

  useEffect(() => {
    handleRadio("home");
  }, []);

  const handleShippingAddress = async (e) => {
    e.preventDefault();
    if (showAddr === undefined) {
      try {
        const authAxios = axios.create({
          baseURL: "https://dharm.ga/api",
          headers: {
            Authorization: `Bearer ${JSON.parse(
              localStorage.getItem("userToken")
            )}`,
          },
        });

        const status = await authAxios.post("/useraddress", {
          address: [
            {
              user_address_name: val,
              full_address: address,
              pincode: 331133,
            },
          ],
        });
      } catch (err) {
        console.log(err);
      }
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
            onChange={(e) => handleRadio(e.target.value)}
            defaultChecked
          />
           <label htmlFor="home">Home</label>
          <input
            type="radio"
            id="work"
            name="address_type"
            value="work"
            onChange={(e) => handleRadio(e.target.value)}
          />
           <label htmlFor="work">Work</label>
          <input
            type="radio"
            id="other"
            name="address_type"
            value="other"
            onChange={(e) => handleRadio(e.target.value)}
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
