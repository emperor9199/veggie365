import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import {
  MainNav,
  SearchBoxStyle,
  SearchContainer,
  SearchInner,
} from "./Styles";

function SearchBox({ lab }) {
  const [products, setProducts] = useState([]);
  const [searchData, setSearchData] = useState([]);
  const [focus, setFocus] = useState(false);
  const [txt, setTxt] = useState("Search Something");

  useEffect(() => {
    const authAxios = axios.create({
      baseURL: "https://dharm.ga/api",
      headers: {
        Authorization: `Bearer ${JSON.parse(
          localStorage.getItem("userToken")
        )}`,
      },
    });

    const fetchProducts = async () => {
      const { data } = await authAxios.get("/product");
      setProducts(data.product);
    };
    fetchProducts();
  }, []);

  const handleSearch = (event) => {
    // console.log(event.target.value);
    const searched = products.filter((search) =>
      search.product_name
        .toLowerCase()
        .includes(event.target.value.toLowerCase())
    );
    setSearchData(searched);
    if (event.target.value === "") {
      setSearchData([]);
      setTxt("Search Something");
    } else if (searchData.length === 0) {
      setTxt("No match Found");
    }
    // else if(event.target.value !== ""){
    //   setFocus(true)
    // }
  };
  const handleOnblur = (event) => {
    if (event.target.value === "") {
      setFocus(false);
    }
  };

  return (
    <SearchBoxStyle className={lab === "mobile" ? "mobile" : ""}>
      <SearchContainer className={lab === "mobile" ? "mobile" : ""}>
        {/* <div className="search-container"> */}
        <SearchInner className={lab === "mobile" ? "mobile" : ""}>
          {/* <div className="search-inner"> */}
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
          {/* </div> */}
        </SearchInner>

        {/* <div className={lab ? "vk" : "vk1"} style={{display : !focus && "none"}}> */}
        <MainNav
          className={
            focus
              ? lab === "mobile"
                ? "mobile"
                : lab === "secondary"
                ? "secondary"
                : ""
              : "hide"
          }
        >
          {/* searchData aa var ma result chhe so, have enu design krvu pdse. if length 0 then no match
          ne css file nikadi deje ne console check krje search kre etle khbr pdi jase */}
          {searchData.length === 0 && focus ? (
            <div className="search_resule">{txt}</div>
          ) : (
            searchData.slice(0, 5).map((ser, key) => {
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
                    <div className="ser_name">
                      <img
                        src={ser.product_cover_img}
                        alt={ser.product_name}
                        className="search_resule_img"
                      />
                    </div>
                    <div className="ser_name">{ser.product_name}</div>
                  </Link>
                </div>
              );
            })
          )}
        </MainNav>
        {/* </div> */}
      </SearchContainer>
      {/* </div> */}
    </SearchBoxStyle>
  );
}

export default SearchBox;
