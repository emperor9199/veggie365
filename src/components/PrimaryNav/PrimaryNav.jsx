import React, { useState, useEffect } from "react";
import { PrimaryNavContainer } from "./Styles";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import PersonIcon from "@material-ui/icons/Person";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Bagde from "@material-ui/core/Badge";
import { userLogout } from "../../redux/actions/userActions";
import SearchIcon from "@material-ui/icons/Search";
import UpdateIcon from "@material-ui/icons/Update";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import veggieLogo from "../../img/veggie-logo.svg";
import axios from "axios";
import "./PrimaryNav.css";

const PrimaryNav = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.userLoginReducer);
  const { cartItemsId } = useSelector((state) => state.addToCartReducer);
  const [profileOptions, setProfileOptions] = useState(false);
  const [products, setProducts] = useState([]);
  const [searchData,setSearchData] = useState([]);

  const authAxios = axios.create({
    baseURL: "https://dharm.ga/api",
    headers: {
      Authorization: `Bearer ${JSON.parse(localStorage.getItem("userToken"))}`,
    },
  });

  const fetchProducts = async () => {
    const { data } = await authAxios.get("/product");
    setProducts(data.product);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  let lab = true;
  const handleLogout = () => {
    dispatch(userLogout());
  };
  const handleSearch = (event) => {
      // console.log(event.target.value);
      const searched = products.filter((search) => search.product_name.includes(event.target.value));
      setSearchData(searched);
  }
  console.log(searchData);
  return (
    <PrimaryNavContainer>
      <div className="nav-logo">
        <Link to="/" style={{ textDecoration: "none", color: "black" }}>
          <img
            src={veggieLogo}
            alt="logo"
            style={{ width: "6vw", padding: ".5rem" }}
          />
        </Link>
      </div>
      <div className="nav-items">
        <div className="search-container search_con_vk">
          <input type="text" placeholder="Search Product..." onChange={(event) => handleSearch(event)}/>
          <button>
            <SearchIcon />
          </button>
          {/* searchData aa var ma result chhe so, have enu design krvu pdse. if length 0 then no match
          ne css file nikadi deje ne console check krje search kre etle khbr pdi jase */}
          {
            searchData.length === 0 ? <div className="search_resule">No Match Found</div> : searchData.map((ser,key) => {
              return(
                <div className="search_resule" key={key}>{ser.product_name}</div>
              )
            })
          }
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
            {Object.keys(user).length ? "Hello, " + user.user_name : "Login"}
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
