import React,{ useState } from 'react';
import { allproducts } from "../../Data/AllProducts";
import "./AllProducts.css";
import SortingBar from '../SortingBar/SortingBar';
import AllProductsCards from '../AllProductCards/AllProductsCards';

function AllProducts() {
    
    const [sortVal,setSortval] = useState("acend");
    const [sortName,setSortname] = useState("acend");
    console.log(sortVal);
    
    if (sortVal === "acend"){
        allproducts.sort((a,b) => {
            return(a.price - b.price);
        })
    }
    if(sortVal === "desc"){
        allproducts.sort((a,b) => {
            return(b.price - a.price);
        })
    }
    if (sortVal === "acends"){
        allproducts.sort((a,b) => {
            let fa = a.title.toLowerCase(),fb = b.title.toLowerCase();
            if (fa < fb) {
                return -1;
            }
            if (fa > fb) {
                return 1;
            }
            return 0;
        })
    }
    if(sortVal === "descs"){
        allproducts.sort((a,b) => {
            let fa = a.title.toLowerCase(),fb = b.title.toLowerCase();
            if (fa > fb) {
                return -1;
            }
            if (fa < fb) {
                return 1;
            }
            return 0;
        })
    }
    
    return (
        <div className="AllProducts_container">
            <div className="allproducts_cont">
                <div className="allproducts_cat_name">Root Vegetable<div className="soloproduct_line" /></div>
                <div className="allproducts_sorting">
                    <SortingBar setSortval={setSortval}/>
                </div>
                <hr />
                <div className="allproducts_cards">
                    <AllProductsCards productData={allproducts}/>
                </div>
            </div>
        </div>
    )
}

export default AllProducts
