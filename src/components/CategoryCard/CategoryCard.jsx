import React from "react";
import { CategoryCardDatas } from "../../Data/CategoryCard";
import "./CategoryCard.css";

function CategoryCard() {
  return (
    <div className="CategoryCard_Container">
      <div className="categorycard_head">
        <span className="small_title">Best Category</span>
        <span className="big_title">Browse Througth Our Best Category</span>
      </div>

      <div className="category_card_con">
        {CategoryCardDatas.map((categorycarddata) => {
          return (
            <div className="categorycard_card" key={categorycarddata.id}>
              <img
                src={categorycarddata.img}
                alt={categorycarddata.text}
                className="categorycard_img"
              />
              <span className="categorycard_card_text">
                {categorycarddata.text}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CategoryCard;
