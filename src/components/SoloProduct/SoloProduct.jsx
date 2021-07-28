import React, { useState } from "react";
import IteamBox from "../IteamBox/IteamBox";
import UpdateIcon from "@material-ui/icons/Update";
import MoneyIcon from "@material-ui/icons/Money";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import "./SoloProduct.css";
import AboutProduct from "../AboutProduct/AboutProduct";
import SimilarProducts from "../SimilarProducts/SimilarProducts";
import CommentSec from "../CommentSec/CommentSec";
import LargeImage from "../LargeImage/LargeImage";
import SmallImage from "../SmallImage/SmallImage";

function SoloProduct() {
  const [img, setImg] = useState(
    "https://media.starquik.com/catalog/product/SQ101373.jpg"
  );
  return (
    <div className="soloproduct_container">
      <div className="soloproduct_content">
        <div className="solo_sec1">
          <div className="small_img">
            <SmallImage setImg={setImg} />
          </div>
          <div className="large_img">
            <LargeImage img={img} />
          </div>
          <div className="soloproduct_info">
            <div className="soloproduct_name">Star Cauliflower</div>
            <div className="soloproduct_price_original soloproduct_common_font">
              MRP: <del>₹70.00 Per/Kg </del>
            </div>
            <div className="soloproduct_price soloproduct_common_font">
              Our Price: <span className="original_pri">₹50.00 Per/Kg</span>
            </div>
            <div className="soloproduct_price_original soloproduct_common_font">
              Discount: 5%
            </div>
            <div className="soloproduct_price soloproduct_common_font">
              You Save: <span className="original_pri">₹20.00</span>
            </div>
            <div className="soloproduct_iteam_varients">
              <IteamBox />
            </div>
            <div className="soloproduct_btns_con">
              <div className="soloproduct_Buy_btn_con">
                <div className="soloproduct_Buy_btn">Buy Now</div>
              </div>
              <div className="soloproduct_Buy_btn_con">
                <div className="soloproduct_Buy_btn">Add To Cart</div>
              </div>
            </div>
            <div className="soloproduct_service">
              <div className="soloproduct_service_title">
                Service <div className="soloproduct_line" />
              </div>
              <div className="soloproduct_service_icons">
                <div className="soloproduct_service_icon extra_border_left">
                  <UpdateIcon style={{ fontSize: 55, color: "#4AC85D" }} />
                  <div className="soloproduct_high_text soloproduct_high_text_extra">
                    20 Min{" "}
                  </div>
                  <div className="soloproduct_high_text_nor">Delivery Time</div>
                </div>
                <div className="soloproduct_service_icon extra_border">
                  <MoneyIcon style={{ fontSize: 55, color: "#4AC85D" }} />
                  <div className="soloproduct_high_text soloproduct_high_text_extra">
                    Cash
                  </div>
                  <div className="soloproduct_high_text_nor">On Delivry</div>
                </div>
                <div className="soloproduct_service_icon extra_border_right">
                  <AccountBalanceIcon
                    style={{ fontSize: 55, color: "#4AC85D" }}
                  />
                  <div className="soloproduct_high_text soloproduct_high_text_extra">
                    Online Payment
                  </div>
                  <div className="soloproduct_high_text_nor">Accepted</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="solo_sec2">
          <div className="soloproduct_detials">
            <AboutProduct />
          </div>
        </div>
        <div className="solo_sec3">
          <div className="related_products">
            <SimilarProducts />
          </div>
        </div>
        <div className="solo_sec4">
          <div className="soloproduct_comments">
            <CommentSec />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SoloProduct;
