import React, { useState, useEffect } from "react";
import StarIcon from "@material-ui/icons/Star";
import { Link } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/actions/cartActions";
import "./StarProducts.css";

function StarProducts({ no, categoryName, categoryid }) {
  
  const dispatch = useDispatch();

  const [products, setProducts] = useState([]);
  const [productPrice, setProductPrice] = useState([]);

  const authAxios = axios.create({
    baseURL: "https://dharm.ga/api",
    headers: {
      Authorization: `Bearer ${JSON.parse(localStorage.getItem("userToken"))}`,
    },
  });

  const fetchProducts = async () => {
    const { data } = await authAxios.get("/product");

    setProducts(data.product);
    setProductPrice(data.price);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleAddToCart = (product, unit_price) => {
    dispatch(addToCart(product, product.product_id, unit_price, 1)); //if dropdown appears then put dropdown value in place of qty
  };

  var sliceData;
  var pprice = [];

  function afind(arr, pid) {
    const found = pprice.some((e1) => e1.product_id === pid.product_id);
    if (!found) {
      pprice.push(pid);
    }
    return pprice;
  }
  sliceData = products
    .filter((iteam) => iteam.category_id === categoryid)
    .slice(0, 4);
  sliceData.map((product) => {
    productPrice.map((price) => {
      if (price.product_id === product.product_id) {
        afind(pprice, price);
      }
    });
  });
  
  return (
    <div className="starproducts_container">
      <div className="starproducts_head_title">
        {categoryName}
        <span className="starproducts_head_dic"> (10% off)</span>
      </div>
      <div className="starproducts_line" />
      <div className="starproducts_card_con">
        {sliceData.map((product,key) => {
          return (
            <div className="starproduct_card" key={key}>
              <Link
                className="link_class"
                style={{ textDecoration: "none" }}
                to={`/product/${product.product_id}`}
              >
                <div className="starproduct_img">
                  <img
                    className="starproduct_img_data"
                    src={product.product_img}
                    alt={product.product_name}
                  />
                  {/* <div className="starproduct_dis_label">4%</div> */}
                </div>
              </Link>
              <div className="starproduct_data">
                {/* <div className="starproduct_rating">
                  <StarIcon style={{ color: "gold" }} />
                  <StarIcon style={{ color: "gold" }} />
                </div> */}
                <Link
                  className="link_class"
                  to="/product/flower"
                  style={{ textDecoration: "none" }}
                >
                  <div className="starproduct_title">
                    {product.product_name}
                  </div>
                  <div className="starproduct_high">
                    SQ Special | Best Price
                  </div>
                  {pprice
                    .filter((item) => item.product_id === product.product_id)
                    .map((p) => {
                      return (
                        <div className="starproduct_price">
                          ₹{p.product_price} per/{p.price_unit_name}
                          <del className="starproduct_price_delete">
                            MRP ₹70.00
                          </del>
                        </div>
                      );
                    })}
                </Link>
              </div>
              <div className="starproduct_btn_con">
                {pprice
                  .filter((item) => item.product_id === product.product_id)
                  .map((p) => {
                    return (
                      <div
                        className="starproduct_btn"
                        onClick={() =>
                          handleAddToCart(product, p.product_price)
                        }
                      >
                        ADD
                      </div>
                    );
                  })}
              </div>
            </div>
          );
        })}

        <div
          className={`starproduct_color_card ${
            no === "evan"
              ? "starproduct_color_card_color_one"
              : "starproduct_color_card_color_two"
          }`}
        >
          <div className="starproduct_color_card_title">Save Max!</div>
          <div className="starproduct_color_card_subt">
            Handpicked deals with best Prices.
          </div>
          <Link
            className="link_class"
            to={`/products/${categoryid}/${categoryName}`}
            style={{ textDecoration: "none" }}
          >
            <div className="starproduct_color_card_btn">View All</div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default StarProducts;
