import React, { useState } from "react";
import { SecondaryNavContainer } from "./Style";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import { Link } from "react-router-dom";

const SecondaryNav = ({ setToggle, toggle }) => {
  const [show, setShow] = useState(false);
  const [dropDownItem, setDropDownItem] = useState(false);

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
        <Link to="/" style={{ textDecoration: "none", color: "white" }}>
          <p>Home</p>
        </Link>
        <Link to="/" style={{ textDecoration: "none", color: "white" }}>
          <p>Products</p>
        </Link>
        <Link
          to="/place-order"
          style={{ textDecoration: "none", color: "white" }}
        >
          <p>Your Orders</p>
        </Link>
        <span
          onClick={() => setDropDownItem(!dropDownItem)}
          className="about-us-p"
        >
          <span style={{ display: "flex", alignItems: "center" }}>
            About Us
            <ArrowDropDownIcon />
          </span>
          <div className={dropDownItem ? "inner-item-active" : "inner-item"}>
            <p>About</p>
            <p>Contact</p>
          </div>
        </span>
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
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            <p
              onClick={() => setToggle(!toggle)}
              style={{ fontSize: "1.3rem" }}
            >
              Home
            </p>
          </Link>
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            <p
              onClick={() => setToggle(!toggle)}
              style={{ fontSize: "1.3rem" }}
            >
              Products
            </p>
          </Link>
          <Link
            to="/place-order"
            style={{ textDecoration: "none", color: "white" }}
          >
            <p
              onClick={() => setToggle(!toggle)}
              style={{ fontSize: "1.3rem" }}
            >
              Your Orders
            </p>
          </Link>
          <Link
            to="/aboutus"
            style={{ textDecoration: "none", color: "white" }}
          >
            <p
              onClick={() => setToggle(!toggle)}
              style={{ fontSize: "1.3rem" }}
            >
              About Us
            </p>
          </Link>
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            <p
              onClick={() => setToggle(!toggle)}
              style={{ fontSize: "1.3rem" }}
            >
              Contact Us
            </p>
          </Link>
        </div>
      </div>
    </SecondaryNavContainer>
  );
};

export default SecondaryNav;
