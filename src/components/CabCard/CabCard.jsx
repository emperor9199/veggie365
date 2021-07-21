import React from "react";
import { CabContainer } from "./Style";
import img1 from "../../img/cab-book.svg";

const CabCard = () => {
  return (
    <CabContainer>
      <div className="cab-left">
        <img src={img1} alt="truck-one" />
      </div>
      <div className="cab-right">
        <h1>Book a Cab</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque dicta
          corrupti molestias! Blanditiis id voluptates, fugiat dicta cumque at.
          A debitis amet minus, dolorem non hic nesciunt animi pariatur enim.
          lorem
        </p>
        <button>Book a Cab</button>
      </div>
    </CabContainer>
  );
};

export default CabCard;
