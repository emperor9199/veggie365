import React from "react";
import { PrimaryNavContainer } from "./Styles";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import FavoriteIcon from "@material-ui/icons/Favorite";
import PersonIcon from "@material-ui/icons/Person";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const PrimaryNav = () => {
  const { user } = useSelector((state) => state.userLoginReducer);

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
          <Link to="/login" className="nav-specific-link">
            <PersonIcon style={{ marginRight: ".3rem" }} />
            {Object.keys(user).length ? user.user_name : "Login"}
          </Link>
          <Link to="/" className="nav-specific-link">
            <FavoriteIcon style={{ marginRight: ".3rem" }} />
            Wishlist
          </Link>
          <Link to="/" className="nav-specific-link">
            <ShoppingCartIcon style={{ marginRight: ".3rem" }} />
            Cart
          </Link>
        </div>
      </div>
    </PrimaryNavContainer>
  );
};

export default PrimaryNav;
