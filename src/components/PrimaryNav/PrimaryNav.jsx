import React, { useState } from "react";
import { PrimaryNavContainer } from "./Styles";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import FavoriteIcon from "@material-ui/icons/Favorite";
import PersonIcon from "@material-ui/icons/Person";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Bagde from "@material-ui/core/Badge";
import { userLogout } from "../../redux/actions/userActions";
import SearchIcon from "@material-ui/icons/Search";
import UpdateIcon from "@material-ui/icons/Update";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

const PrimaryNav = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.userLoginReducer);
  const { cartItemsId } = useSelector((state) => state.addToCartReducer);
  const [profileOptions, setProfileOptions] = useState(false);

  const handleLogout = () => {
    dispatch(userLogout());
  };

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
          <button>
            <SearchIcon />
          </button>
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
                  ? "profile-options"
                  : "no-profile-options"
              }
            >
              <p
                style={{
                  borderBottom: "1px solid lightgray",
                  // textAlign: "center",
                }}
              >
                <UpdateIcon style={{ marginRight: "1rem" }} />
                Update Profile
              </p>
              <p
                style={{
                  borderBottom: "1px solid lightgray",
                  // textAlign: "center",
                }}
              >
                <ShoppingBasketIcon style={{ marginRight: "1rem" }} />
                Your Orders
              </p>
              <p onClick={handleLogout}>
                <ExitToAppIcon style={{ marginRight: "1rem" }} /> Logout Here
              </p>
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
