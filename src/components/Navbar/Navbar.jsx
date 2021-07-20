import React, { useState } from "react";
import { NavContainer, NavItems, NavLogo, NavSearchBar } from "./Styles";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import SearchIcon from "@material-ui/icons/Search";
import BallotIcon from "@material-ui/icons/Ballot";
import ContactSupportIcon from "@material-ui/icons/ContactSupport";

const Navbar = ({ setToggle, toggle, path }) => {
  const [showColor, setShowColor] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 310) {
      setShowColor(true);
    } else {
      setShowColor(false);
    }
  };
  window.addEventListener("scroll", changeBackground);

  return (
    <NavContainer
      className={!path ? "show-color" : showColor ? "show-color" : ""}
    >
      <NavLogo>
        <h2>VEGGI</h2>
        <label html="check">
          <input
            type="checkbox"
            id="check"
            onChange={() => setToggle(!toggle)}
          />
          <span></span>
          <span></span>
          <span></span>
        </label>
      </NavLogo>
      <NavItems className={toggle ? "show" : ""}>
        <NavSearchBar>
          <div className="search-input">
            <input type="text" />
            <SearchIcon style={{ color: "#1e6f5c" }} />
          </div>
        </NavSearchBar>
        <div className="nav-links">
          {!toggle ? (
            <p className="nav-icon">Products</p>
          ) : (
            <p className="nav-icon">
              <BallotIcon />
              <span style={{ marginLeft: ".5rem" }}>Products</span>
            </p>
          )}
          {!toggle ? (
            <p className="nav-icon">About Us</p>
          ) : (
            <p className="nav-icon">
              <ContactSupportIcon />
              <span style={{ marginLeft: ".5rem" }}>About Us</span>
            </p>
          )}
          {!toggle ? (
            <PermIdentityIcon className="nav-icon" />
          ) : (
            <p className="nav-icon">
              <PermIdentityIcon />
              <span style={{ marginLeft: ".5rem" }}>Login</span>
            </p>
          )}
          {!toggle ? (
            <ShoppingCartIcon className="nav-icon" />
          ) : (
            <p className="nav-icon">
              <ShoppingCartIcon />
              <span style={{ marginLeft: ".5rem" }}>Your Cart</span>
            </p>
          )}
        </div>
      </NavItems>
    </NavContainer>
  );
};

export default Navbar;
