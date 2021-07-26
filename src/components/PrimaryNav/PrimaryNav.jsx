import React, { useState } from "react";
import { PrimaryNavContainer } from "./Styles";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import FavoriteIcon from "@material-ui/icons/Favorite";
import PersonIcon from "@material-ui/icons/Person";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Bagde from "@material-ui/core/Badge";

const PrimaryNav = () => {
  const { user } = useSelector((state) => state.userLoginReducer);
  const { cartItemsId } = useSelector((state) => state.addToCartReducer);
  const [profileOptions, setProfileOptions] = useState(false);

  return (
    <PrimaryNavContainer>
      <div className="nav-logo">
        <Link to="/" style={{ textDecoration: "none", color: "black" }}>
          <h1>VEGGI 365</h1>
        </Link>
      </div>
      <div className="nav-items">
        <div className="search-container">
          <input type="text" placeholder="Search Product..." />
          <button>Search</button>
        </div>
        <div className="nav-links">
          <Link
            to={Object.keys(user).length ? "" : "/login"}
            className="user-profile"
            onClick={() => {
              Object.keys(user).length && setProfileOptions(!profileOptions);
            }}
          >
            <PersonIcon style={{ marginRight: ".3rem" }} />
            {Object.keys(user).length ? user.user_name : "Login"}
            <div
              className={
                Object.keys(user).length
                  ? profileOptions
                    ? "profile-options"
                    : "no-profile-options"
                  : "no-profile-options"
              }
            >
              <p
                style={{
                  borderBottom: "1px solid lightgray",
                  textAlign: "center",
                }}
              >
                Update Profile
              </p>
              <p
                style={{
                  borderBottom: "1px solid lightgray",
                  textAlign: "center",
                }}
              >
                Your Orders
              </p>
              <p>Logout</p>
            </div>
          </Link>
          <Link to="/" className="nav-specific-link">
            <FavoriteIcon style={{ marginRight: ".3rem" }} />
            Wishlist
          </Link>
          <Link
            to={Object.keys(user).length ? "/cart" : "/login"}
            className="nav-specific-link"
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
      </div>
    </PrimaryNavContainer>
  );
};

export default PrimaryNav;
