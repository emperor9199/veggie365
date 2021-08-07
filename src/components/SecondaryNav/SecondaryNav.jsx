import React, { useState } from "react";
import { SecondaryNavContainer } from "./Style";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import Bagde from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useSelector } from "react-redux";

const SecondaryNav = ({ setToggle, toggle }) => {
  const [show, setShow] = useState(false);
  const [dropDownItem, setDropDownItem] = useState(false);
  const { user } = useSelector((state) => state.userLoginReducer);
  const { cartItemsId } = useSelector((state) => state.addToCartReducer);

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
          to="/your-order-his"
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
          <button>
            <SearchIcon />
          </button>
        </div>
        <Link
          to={Object.keys(user).length ? "/cart" : "/login"}
          style={{
            color: "white",
            textDecoration: "none",
            marginRight: "2rem",
          }}
          className="cart-icon-secondary"
        >
          <Bagde
            badgeContent={cartItemsId.length}
            color="error"
            style={{
              cursor: "pointer",
              marginRight: ".5rem",
            }}
          >
            <ShoppingCartIcon style={{ marginRight: ".3rem" }} />
          </Bagde>
          Cart
        </Link>
      </div>
      <div className="s-logo">
        All Catagories
        <div className="sub-cata">
          <ul>
            <li>Vegeis</li>
            <li>Fruits</li>
            <li>Tomato</li>
            <li>Banana</li>
            <li>Apple</li>
          </ul>
        </div>
      </div>
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
            <button>
              <SearchIcon />
            </button>
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
