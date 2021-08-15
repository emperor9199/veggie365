import React, { useState } from "react";
import { PrimaryNavContainer } from "./Styles";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import PersonIcon from "@material-ui/icons/Person";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Bagde from "@material-ui/core/Badge";
import { userLogout } from "../../redux/actions/userActions";
// import SearchIcon from "@material-ui/icons/Search";
import UpdateIcon from "@material-ui/icons/Update";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import veggieLogo from "../../img/veggie-logo.svg";
// import axios from "axios";
import SearchBox from "../SearchBox/SearchBox";
// import "./PrimaryNav.css";

const PrimaryNav = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.userLoginReducer);
  const { cartItemsId500, cartItemsId1, cartItemsId2 } = useSelector(
    (state) => state.addToCartReducer
  );
  const [profileOptions, setProfileOptions] = useState(false);
  // const [products, setProducts] = useState([]);
  // const [searchData, setSearchData] = useState([]);
  // const [focus, setFocus] = useState(false);
  // const [term, setTerm] = useState("");
  // const [txt, setTxt] = useState("Search Something");

  // const authAxios = axios.create({
  //   baseURL: "https://dharm.ga/api",
  //   headers: {
  //     Authorization: `Bearer ${JSON.parse(localStorage.getItem("userToken"))}`,
  //   },
  // });

  // const fetchProducts = async () => {
  //   const { data } = await authAxios.get("/product");
  //   setProducts(data.product);
  // };

  // useEffect(() => {
  //   fetchProducts();
  // }, []);

  // let lab = true;
  const handleLogout = () => {
    dispatch(userLogout());
  };
  // const handleSearch = (event) => {
  //   // console.log(event.target.value);
  //   setTerm(event.target.value);
  //   const searched = products.filter((search) =>
  //     search.product_name
  //       .toLowerCase()
  //       .includes(event.target.value.toLowerCase())
  //   );
  //   setSearchData(searched);
  //   if (event.target.value === "") {
  //     setSearchData([]);
  //     setTxt("Search Something");
  //   } else if (searchData.length === 0) {
  //     setTxt("No match Found");
  //   }
  //   // else if(event.target.value !== ""){
  //   //   setFocus(true)
  //   // }
  // };
  // const handleOnblur = (event) => {
  //   if (event.target.value === "") {
  //     setFocus(false);
  //   }
  // };

  // console.log(searchData);
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
        <div className="primary_serach_box">
          <SearchBox />
        </div>

        {/* <div className="search-container">
          <div className="search-inner">
            <input
              type="text"
              placeholder="Search Product..."
              onChange={(event) => handleSearch(event)}
              onFocus={() => setFocus(true)}
              onBlur={(event) => handleOnblur(event)}
            />
            <button>
              <SearchIcon />
            </button>
          </div>
          <div className="vk" style={{display : !focus && "none"}}>
            {searchData.length === 0 && focus? (
              <div className="search_resule">{txt}</div>
            ) : (
              searchData.slice(0,5).map((ser, key) => {
                return (
                  <div className="search_resule" key={key}>
                    <Link
                      to={`/product/${ser.product_id}`}
                      onClick={() => {
                        window.location.replace(`/product/${ser.product_id}`);
                      }}
                      style={{ textDecoration: "none", color: "black" }}
                      className="link_class"
                    >
                      <div className="ser_name"><img src={ser.product_cover_img} alt={ser.product_name} className="search_resule_img"/></div>
                      <div className="ser_name">{ser.product_name}</div>
                    </Link>
                  </div>
                );
              })
            )}
          </div>
        </div> */}
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
                <Link
                  to="/update-profile"
                  style={{
                    textDecoration: "none",
                    color: "black",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <UpdateIcon style={{ marginRight: "1rem" }} />
                  Update Profile
                </Link>
              </p>

              <p
                style={{
                  borderBottom: "1px solid lightgray",
                  // textAlign: "center",
                }}
              >
                <Link
                  to="/your-order-his"
                  style={{
                    textDecoration: "none",
                    color: "black",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <ShoppingBasketIcon style={{ marginRight: "1rem" }} />
                  Your Orders
                </Link>
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
              badgeContent={
                cartItemsId500.length +
                cartItemsId1.length +
                cartItemsId2.length
              }
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
