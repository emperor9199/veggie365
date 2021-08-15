import React from 'react';
import emptyCartImg from "../../img/empty-cart.svg";
import "./EmptyOrders.css";

function EmptyOrders({lab}) {
    return (
        <div className={`${lab === "pro" ? "EmptyOrders_container" : "EmptyOrders_containerO"}`}>
            <div className="emptyorders_card">
                <div className="emptyorder_card_img">
                        <img src={emptyCartImg} alt="EmptyOrder Image" />
                </div>
                <div className="emptyorder-card_btn">
                    <span className="empty_btn">Shop Now</span>
                </div>
            </div>
        </div>
    )
}

export default EmptyOrders
