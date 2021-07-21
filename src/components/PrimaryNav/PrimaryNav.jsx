import React from "react";
import { PrimaryNavContainer } from "./Styles";

const PrimaryNav = () => {
  return (
    <PrimaryNavContainer>
      <div className="nav-logo">
        <h1>VEGGI 365</h1>
      </div>
      <div className="nav-items">
        <div className="search-container">
          <input type="text" placeholder="Search Product..." />
          <button>Search</button>
        </div>
        <div className="nav-links">
          <p>Login</p>
          <p>My Account</p>
          <p>Wishlist</p>
          <p>Cart</p>
        </div>
      </div>
    </PrimaryNavContainer>
  );
};

export default PrimaryNav;
