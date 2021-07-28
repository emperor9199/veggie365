import React,{useState}  from 'react';
import "./SortingBar.css";

function SortingBar({setSortval}) {
    const [selectedLabel,setSelectedLabel] = useState("lh");
    const handleSort = (txt,label) => {
        setSortval(txt);
        setSelectedLabel(label);
    }
    return (
        <div className="SortingBar_container">
            <div className="allproducts_sort_label">Sort By:</div>
            <div className="allproducts_sort_val" onClick={() => handleSort("acend","lh")}>Price -- Low to High<div className={`${selectedLabel === "lh" ? 'allproducts_active' : ''}`}/></div>
            <div className="allproducts_sort_val" onClick={() => handleSort("desc","hl")}>Price -- High to Low<div className={`${selectedLabel === "hl" ? 'allproducts_active' : ''}`}/></div>
            <div className="allproducts_sort_val" onClick={() => handleSort("acends","az")}>Name -- A to Z<div className={`${selectedLabel === "az" ? 'allproducts_active' : ''}`}/></div>
            <div className="allproducts_sort_val" onClick={() => handleSort("descs","za")}>Name -- Z to A<div className={`${selectedLabel === "za" ? 'allproducts_active' : ''}`}/></div>
        </div>
    )
}

export default SortingBar