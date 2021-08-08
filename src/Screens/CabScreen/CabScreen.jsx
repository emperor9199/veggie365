import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import bookCabImg from "../../img/book-cab.svg";
import { bookCab } from "../../redux/actions/cabActions";
import { CabContainer } from "./Styles";

const CabScreen = () => {
  const dispatch = useDispatch();

  const [userAddress, setUserAddress] = useState("");
  const [pincode, setPincode] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleBookCab = (e) => {
    e.preventDefault();
    dispatch(
      bookCab({ user_address: userAddress, user_pincode: Number(pincode) })
    );
  };

  return (
    <div>
      <CabContainer>
        <div className="cab-left">
          <img src={bookCabImg} alt="book-cab-img" style={{ width: "35vw" }} />
        </div>
        <form className="cab-right" onSubmit={handleBookCab}>
          <div className="sub-sec">
            <h1 style={{ marginBottom: "3rem" }}>Book a Cab</h1>
            <label htmlFor="address">Enter Address</label>
            <input
              type="text"
              onChange={(e) => setUserAddress(e.target.value)}
            />
          </div>
          <div className="sub-sec">
            <label htmlFor="pincode">Enter Pincode</label>
            <input type="text" onChange={(e) => setPincode(e.target.value)} />
          </div>
          <div className="sub-sec">
            <button type="submit">Book Cab</button>
          </div>
        </form>
      </CabContainer>
    </div>
  );
};

export default CabScreen;
