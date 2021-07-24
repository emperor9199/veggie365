import React from "react";
import StarIcon from "@material-ui/icons/Star";
import { Link } from "react-router-dom";
import "./StarProducts.css";

function StarProducts({ no }) {
  return (
    <div className="starproducts_container">
      <div className="starproducts_head_title">
        Root Vegetable
        <span className="starproducts_head_dic"> (10% off)</span>
      </div>
      <div className="starproducts_line" />
      <div className="starproducts_card_con">
        <Link to="/product/flower" style={{ textDecoration: "none" }}>
          <div className="starproduct_card">
            <div className="starproduct_img">
              <img
                className="starproduct_img_data"
                src="https://media.starquik.com/catalog/product/SQ109022.jpg"
                alt="tomato"
              />
              <div className="starproduct_dis_label">4%</div>
            </div>
            <div className="starproduct_data">
              <div className="starproduct_rating">
                <StarIcon style={{ color: "gold" }} />
                <StarIcon style={{ color: "gold" }} />
              </div>
              <div className="starproduct_title">tomato</div>
              <div className="starproduct_high">SQ Special | Best Price</div>
              <div className="starproduct_price">
                ₹50.00 Per/Kg{" "}
                <del className="starproduct_price_delete">MRP ₹70.00</del>
              </div>
            </div>
            <div className="starproduct_btn_con">
              <div className="starproduct_btn">ADD</div>
            </div>
          </div>
        </Link>
        <Link to="/product/flower" style={{ textDecoration: "none" }}>
        <div className="starproduct_card">
          <div className="starproduct_img">
            <img
              className="starproduct_img_data"
              src="https://media.starquik.com/catalog/product/SQ109006.jpg"
              alt="tomato"
            />
            <div className="starproduct_dis_label">4%</div>
          </div>
          <div className="starproduct_data">
            <div className="starproduct_rating">
              <StarIcon style={{ color: "gold" }} />
              <StarIcon style={{ color: "gold" }} />
            </div>
            <div className="starproduct_title">tomato</div>
            <div className="starproduct_high">SQ Special | Best Price</div>
            <div className="starproduct_price">
              ₹50.00 Per/Kg{" "}
              <del className="starproduct_price_delete">MRP ₹70.00</del>
            </div>
          </div>
          <div className="starproduct_btn_con">
            <div className="starproduct_btn">ADD</div>
          </div>
        </div>
        </Link>
        <Link to="/product/flower" style={{ textDecoration: "none" }}>
          <div className="starproduct_card">
            <div className="starproduct_img">
              <img
                className="starproduct_img_data"
                src="https://media.starquik.com/catalog/product/SQ101373.jpg"
                alt="tomato"
              />
              <div className="starproduct_dis_label">4%</div>
            </div>
            <div className="starproduct_data">
              <div className="starproduct_rating">
                <StarIcon style={{ color: "gold" }} />
                <StarIcon style={{ color: "gold" }} />
              </div>
              <div className="starproduct_title">tomato</div>
              <div className="starproduct_high">SQ Special | Best Price</div>
              <div className="starproduct_price">
                ₹50.00 Per/Kg{" "}
                <del className="starproduct_price_delete">MRP ₹70.00</del>
              </div>
            </div>
            <div className="starproduct_btn_con">
              <div className="starproduct_btn">ADD</div>
            </div>
          </div>
        </Link>
        <Link to="/product/flower" style={{ textDecoration: "none" }}>
          <div className="starproduct_card">
            <div className="starproduct_img">
              <img
                className="starproduct_img_data"
                src="https://media.starquik.com/catalog/product/SQ101374.jpg"
                alt="tomato"
              />
              <div className="starproduct_dis_label">4%</div>
            </div>
            <div className="starproduct_data">
              <div className="starproduct_rating">
                <StarIcon style={{ color: "gold" }} />
                <StarIcon style={{ color: "gold" }} />
              </div>
              <div className="starproduct_title">tomato</div>
              <div className="starproduct_high">SQ Special | Best Price</div>
              <div className="starproduct_price">
                ₹50.00 Per/Kg{" "}
                <del className="starproduct_price_delete">MRP ₹70.00</del>
              </div>
            </div>
            <div className="starproduct_btn_con">
              <div className="starproduct_btn">ADD</div>
            </div>
          </div>
        </Link>

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
          <div className="starproduct_color_card_btn">View All</div>
        </div>
      </div>
    </div>
  );
}

export default StarProducts;
