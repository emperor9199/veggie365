import React from "react";
import { Link, useHistory } from "react-router-dom";
import StarIcon from "@material-ui/icons/Star";
import "./AllProductsCards.css";
import { useSelector } from "react-redux";

function AllProductsCards({ sliceData, pprice, handleAddToCart }) {
  const { user } = useSelector((state) => state.userLoginReducer);
  const history = useHistory();

  // if (!Object.keys(user).length) {
  //   history.push("/login");
  // }

  console.log("sliceData", sliceData);
  console.log("pprice", pprice);
  return (
    <div className="allproducts_cards_container">
      {sliceData.map((product) => {
        return (
          <div className="allproduct_card" key={product.product_id}>
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
                <div className="starproduct_title">{product.product_name}</div>
                <div className="starproduct_high">SQ Special | Best Price</div>
                {pprice
                  .filter((item) => item.product_id === product.product_id)
                  .map((p) => {
                    return (
                      <div>
                        <del className="starproduct_price_delete">
                          MRP: ₹
                          {p.discount === 0
                            ? p.product_price + 10
                            : p.discount + p.product_price}
                        </del>
                        <div className="starproduct_price">
                          ₹{p.product_price} per/{p.price_unit_name}
                        </div>
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
                      onClick={() => handleAddToCart(product, p.product_price)}
                    >
                      ADD
                    </div>
                  );
                })}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default AllProductsCards;
