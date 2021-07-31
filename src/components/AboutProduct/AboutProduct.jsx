import React from 'react';
import "./AboutProduct.css";

function AboutProduct({product_about, product_fresh_till, product_storage_tip}) {
    return (
        <div className="AboutProduct_Container">
            <div className="AboutProduct_Cont">
                <div className="aboutproduct_title">About Product<div className="soloproduct_line" /></div>
                <div className="about_product_description">
                    <div className="about_product_description_tite">Description</div>
                    <div className="about_product_description_body">{product_about}</div>
                </div>
                <div className="about_product_other">
                    <div className="about_product_description_tite">Other Tips</div>
                    <div className="about_product_other_body">{product_storage_tip}</div>
                </div>
                <div className="about_product_other">
                    <div className="about_product_description_tite">Product Fresh Till:</div>
                    <div className="about_product_other_body">{product_fresh_till}</div>
                </div>
            </div>
        </div>
    )
}

export default AboutProduct
