import React, { useEffect } from "react";
import bookCabImg from "../../img/book-cab.svg";
import { CabContainer } from "./Styles";

const CabScreen = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <CabContainer>
        <div className="cab-left">
          <img src={bookCabImg} alt="book-cab-img" style={{ width: "35vw" }} />
        </div>
        <form className="cab-right">
          <div className="sub-sec">
            <h1 style={{ marginBottom: "3rem" }}>Book a Cab</h1>
            <label htmlFor="address">Enter Address</label>
            <input type="text" />
          </div>
          <div className="sub-sec">
            <label htmlFor="pincode">Enter Pincode</label>
            <input type="text" />
          </div>
          <div className="sub-sec">
            <button>Book Cab</button>
          </div>
        </form>
      </CabContainer>
    </div>
  );
};

export default CabScreen;
