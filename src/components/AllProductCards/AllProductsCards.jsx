import React from 'react';
import StarIcon from "@material-ui/icons/Star";
import "./AllProductsCards.css";

function AllProductsCards({productData}) {
    return (
        <div className="allproducts_cards_container">
            {
                productData.map((product) => {
                    return(
                        <div className="allproduct_card" key={product.id}>
                            <div className="starproduct_img">
                                <img
                                className="starproduct_img_data"
                                src={product.img}
                                alt={product.title}
                                />
                                <div className="starproduct_dis_label">4%</div>
                            </div>
                            <div className="starproduct_data">
                                <div className="starproduct_rating">
                                <StarIcon style={{ color: "gold" }} />
                                <StarIcon style={{ color: "gold" }} />
                                </div>
                                <div className="starproduct_title">{product.title}</div>
                                <div className="starproduct_high">SQ Special | Best Price</div>
                                <div className="starproduct_price">₹{product.price}.00 Per/Kg <del className="starproduct_price_delete">MRP ₹70.00</del></div>
                            </div>
                            <div className="starproduct_btn_con">
                                <div className="starproduct_btn">ADD</div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default AllProductsCards
