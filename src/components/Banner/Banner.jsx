import React from "react";
import bannerImg from "../../img/banner.jpg";
import CabCard from "../CabCard/CabCard";
import { BannerContainer } from "./Style";

const Home = () => {
  return (
    // <BannerContainer>
    //   <div className="img__banner">
    //     <img src={bannerImg} alt="banner-img" />
    //   </div>
    //   <div className="product__row">
    //     <CabCard />
    //   </div>
    // </BannerContainer>
    <BannerContainer>
      <img className="banner-img" src={bannerImg} alt="banner-img" />
      <div className="cab-card">
        <CabCard />
      </div>
    </BannerContainer>
  );
};

export default Home;
