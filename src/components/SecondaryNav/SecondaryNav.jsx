import React, { useState } from "react";
import { SecondaryNavContainer } from "./Style";

const SecondaryNav = ({ setToggle, toggle }) => {
  const [show, setShow] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 55) {
      setShow(true);
    } else {
      setShow(false);
    }
  };
  window.addEventListener("scroll", changeBackground);

  return (
    <SecondaryNavContainer className={show ? "active" : ""}>
      <div className="nav-items">
        <p>Home</p>
        <p>About Us</p>
        <p>Products</p>
        <p>Contact</p>
        <div className={show ? "search-container" : "not-show"}>
          <input type="text" placeholder="Search Product..." />
          <button>Search</button>
        </div>
      </div>
      <div className="s-logo">All Catagories</div>

      {/* mobile view */}
      <div className="mobile-nav-container">
        <div className="mobile-nav-logo">
          <h1>VEGGIE 365</h1>
          <button onClick={() => setToggle(!toggle)}>
            {toggle ? "X" : "☰"}
          </button>
        </div>
        <div
          className={toggle ? "mobile-nav-items " : "mobile-nav-items-no-show"}
        >
          <div className="mobile-search-container">
            <input type="text" placeholder="Search Product..." />
            <button>Search</button>
          </div>
          <p style={{ fontSize: "1.3rem" }}>Home</p>
          <p style={{ fontSize: "1.3rem" }}>About Us</p>
          <p style={{ fontSize: "1.3rem" }}>Products</p>
          <p style={{ fontSize: "1.3rem" }}>Contact</p>
        </div>
      </div>
    </SecondaryNavContainer>
  );
};

export default SecondaryNav;
