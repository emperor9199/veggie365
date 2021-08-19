import React, { useState } from "react";
import { SecondaryNavContainer } from "./Style";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import { Link } from "react-router-dom";
import Bagde from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import axios from "axios";
import SearchBox from "../SearchBox/SearchBox";
// import veggieLogo from "../../img/veggie-logo.svg";
import PersonIcon from "@material-ui/icons/Person";
import { userLogout } from "../../redux/actions/userActions";

const SecondaryNav = ({ setToggle, toggle }) => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [dropDownItem, setDropDownItem] = useState(false);
  const [cata, setCata] = useState();
  const { user } = useSelector((state) => state.userLoginReducer);
  // const { cartItemsId500, cartItemsId1, cartItemsId2 } = useSelector(
  //   (state) => state.addToCartReducer
  // );

  var hereData = useSelector((state) => state.addToCartReducer);

  var localCartId = JSON.parse(localStorage.getItem("cartUnitDataId"));
  var localCardData = JSON.parse(localStorage.getItem("cartUnitData5"));
  var cartFinalId = JSON.parse(localStorage.getItem("cartFinalId"));
  // console.log(localCardData);

  var sumArr = [];
  var filledArr = [];
  var pushArr = [];
  var dataArr = [];

  localCardData?.map((item) => {
    if (hereData[item].length) {
      hereData[item]?.map((item2) => {
        sumArr.push(hereData[item]);
      });
    }
  });

  const changeBackground = () => {
    if (window.scrollY >= 55) {
      setShow(true);
    } else {
      setShow(false);
    }
  };
  window.addEventListener("scroll", changeBackground);

  useEffect(() => {
    const fetchCata = async () => {
      const authAxios = axios.create({
        baseURL: "https://dharm.ga/api",
        headers: {
          Authorization: `Bearer ${JSON.parse(
            localStorage.getItem("userToken")
          )}`,
        },
      });

      const { data } = await authAxios.get(
        "https://dharm.ga/api/product/category"
      );

      setCata(data);
    };
    fetchCata();
  }, []);

  const handleLogout = () => {
    dispatch(userLogout());
  };

  return (
    <SecondaryNavContainer className={show ? "active" : ""}>
      <div className="nav-items">
        <Link to="/" style={{ textDecoration: "none", color: "white" }}>
          <p>Home</p>
        </Link>
        {/* <Link to="/" style={{ textDecoration: "none", color: "white" }}>
          <p>Products</p>
        </Link> */}
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
            <p>
              <Link
                to="/aboutus"
                style={{ textDecoration: "none", color: "#fff" }}
              >
                About
              </Link>
            </p>
            <p>Contact</p>
          </div>
        </span>
        <div className={show ? "search-container" : "not-show"}>
          {/* <input type="text" placeholder="Search Product..." />
          <button>
            <SearchIcon />
          </button> */}
          <div className="primary_serach_box">
            <SearchBox lab="secondary" />
          </div>
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
            badgeContent={sumArr.length}
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
            {cata?.map((item, index) => {
              return (
                <Link
                  to={`/products/${item.category_id}/${item.category_name}`}
                  style={{
                    textDecoration: "none",
                    color: "black",
                  }}
                  key={index}
                >
                  <li className="cata">{item.category_name}</li>
                </Link>
              );
            })}
          </ul>
        </div>
      </div>
      {/* mobile view */}
      <div className="mobile-nav-container">
        <div className="mobile-nav-logo">
          {/* <h3>VEGGIE 365</h3> */}
          <div className="upper">
            <button onClick={() => setToggle(!toggle)}>
              {toggle ? "X" : "☰"}
            </button>

            {/* <Link to="/">
              <img
                src={veggieLogo}
                alt="logo"
                style={{ width: "11vw", padding: ".5rem" }}
              />
            </Link> */}
            <Link to="/" style={{ textDecoration: "none", color: "white" }}>
              <h2>VEGGIE-365</h2>
            </Link>
            {/* cart */}
            <div className="mobile-right">
              <Link
                to={Object.keys(user).length ? "/update-profile" : "/login"}
                style={{
                  textDecoration: "none",
                  color: "white",
                  marginRight: ".5rem",
                }}
              >
                <PersonIcon style={{ marginRight: ".3rem", fontSize: 28 }} />
              </Link>

              <Link
                to={Object.keys(user).length ? "/cart" : "/login"}
                className="nav-specific-link"
                style={{ textDecoration: "none", color: "white" }}
              >
                <Bagde
                  badgeContent={sumArr.length}
                  color="error"
                  style={{
                    cursor: "pointer",
                    marginRight: ".5rem",
                  }}
                >
                  <ShoppingCartIcon style={{ marginRight: ".3rem" }} />
                </Bagde>
              </Link>
            </div>
          </div>
          <div className="down">
            <div
              className="mobile-search-container"
              style={{ marginTop: ".7rem", width: "100%" }}
            >
              <SearchBox lab="mobile" />
            </div>
          </div>
        </div>
        <div
          className={toggle ? "mobile-nav-items " : "mobile-nav-items-no-show"}
        >
          {/* hide */}

          {/* <div className="mobile-search-container">
            <SearchBox lab="mobile" />
          </div> */}
          <div>
            {Object.keys(user).length ? (
              <p style={{ fontSize: "1.8rem" }}>Hello, {user.user_name}</p>
            ) : (
              <Link
                to="/login"
                style={{ textDecoration: "none", color: "white" }}
              >
                <p
                  style={{
                    fontSize: "1.3rem",
                  }}
                  onClick={() => setToggle(!toggle)}
                >
                  Login
                </p>
              </Link>
            )}
          </div>

          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            <p
              onClick={() => setToggle(!toggle)}
              style={{
                fontSize: "1.3rem",
                borderBottom: "1px solid white",
                margin: "0 5rem",
              }}
            >
              Home
            </p>
          </Link>
          {/* <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            <p
              onClick={() => setToggle(!toggle)}
              style={{ fontSize: "1.3rem" }}
            >
              Products
            </p>
          </Link> */}
          <Link
            to="/your-order-his"
            style={{ textDecoration: "none", color: "white" }}
          >
            <p
              onClick={() => setToggle(!toggle)}
              style={{
                fontSize: "1.3rem",
                borderBottom: "1px solid white",
                margin: "0 5rem",
                marginTop: "1rem",
              }}
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
              style={{
                fontSize: "1.3rem",
                borderBottom: "1px solid white",
                margin: "0 5rem",
                marginTop: "1rem",
              }}
            >
              About Us
            </p>
          </Link>
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            <p
              onClick={() => setToggle(!toggle)}
              style={{
                fontSize: "1.3rem",
                borderBottom: "1px solid white",
                margin: "0 5rem",
                marginTop: "1rem",
              }}
            >
              Contact Us
            </p>
          </Link>
          {Object.keys(user).length ? (
            <Link to="/" style={{ textDecoration: "none", color: "white" }}>
              <p
                onClick={() => {
                  setToggle(!toggle);
                  handleLogout();
                }}
                style={{
                  fontSize: "1.3rem",
                  borderBottom: "1px solid white",
                  margin: "0 5rem",
                  marginTop: "1rem",
                }}
              >
                Logout
              </p>
            </Link>
          ) : (
            ""
          )}
        </div>
      </div>
    </SecondaryNavContainer>
  );
};

export default SecondaryNav;
