import React from "react";
import { NavContainer, NavItems, NavLogo, NavSearchBar } from "./Styles";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import SearchIcon from "@material-ui/icons/Search";

const Navbar = ({ setToggle, toggle }) => {
  return (
    <NavContainer>
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
            <SearchIcon className="search-icon" />
          </div>
        </NavSearchBar>
        <div className="nav-links">
          {!toggle ? (
            <PermIdentityIcon className="nav-icon" />
          ) : (
            <p className="nav-icon">
              <PermIdentityIcon /> Login
            </p>
          )}
          {!toggle ? (
            <ShoppingCartIcon className="nav-icon" />
          ) : (
            <p className="nav-icon">
              <ShoppingCartIcon />
              Your Cart
            </p>
          )}
        </div>
      </NavItems>
    </NavContainer>
  );
};

export default Navbar;
