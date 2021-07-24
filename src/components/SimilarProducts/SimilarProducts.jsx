import React from "react";
import StarIcon from "@material-ui/icons/Star";
import "./SimilarProducts.css";

function SimilarProducts() {
  return (
    <div className="SimilarProducts_container">
      <div className="aboutproduct_title">
        You Might Also Like
        <div className="soloproduct_line" />
      </div>
      <div className="SimilarProducts_card_con">
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
      </div>
    </div>
  );
}

export default SimilarProducts;
