import React from "react";
import { PrimaryNavContainer } from "./Styles";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import FavoriteIcon from "@material-ui/icons/Favorite";
import PersonIcon from "@material-ui/icons/Person";

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
          <p>
            <PersonIcon style={{ marginRight: ".3rem" }} />
            Login
          </p>
          <p>
            <FavoriteIcon style={{ marginRight: ".3rem" }} />
            Wishlist
          </p>
          <p>
            <ShoppingCartIcon style={{ marginRight: ".3rem" }} />
            Cart
          </p>
        </div>
      </div>
    </PrimaryNavContainer>
  );
};

export default PrimaryNav;
