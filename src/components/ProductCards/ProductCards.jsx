import React from 'react';
import StarIcon from '@material-ui/icons/Star';
import {Products} from "../../Data/Products";
import "./ProductCards.css";

function ProductCards({title,discount,subtitle}) {

    // function stars(star){
    //     console.log(star);
    //     for(let i=0;i<star;i++){
    //         return(
    //             <StarIcon />
    //         )
    //     }
    // }
    
    return (
        <div className="ProductCards_Container" data-aos="fade-right">
            <div className="productcards_head">
                <div className="productcards_head_title_con">
                    <div className="productcards_head_title">{title} <span className="productcards_head_dic">({discount}% off)</span></div>
                </div>
                <div className="productcards_head_subtitle">
                    {subtitle}
                </div>
            </div>
           
            <div className="productcards_card_con">
            
                {
                    Products.map((Product) => {
                        return(
                        <div className="productcard_card" key={Product.id}>
                            <img
                                className="productcard_card_img"
                                src={Product.img}
                                alt={Product.title}
                            />
                            <div className="productcard_card_data">
                                <div className="productcard_card_rating">
                                    <StarIcon style={{color:"gold"}}/>
                                    <StarIcon style={{color:"gold"}}/>
                                    <StarIcon style={{color:"gold"}}/>
                                    <StarIcon style={{color:"gold"}}/>
                                    {

                                     }
                                </div>
                                <div className="productcard_veg_name">
                                    {Product.title}
                                </div>
                                <div className="productcard_veg_price">₹{Product.price} Per/kg</div>
                                <div className="productcard_buy_btn">Add To Cart</div>
                            </div>
                        </div>
                        )
                    })
                }
                 
            </div>
        </div>
    )
}

export default ProductCards
