import React from "react";
import Banner from "../../components/Banner/Banner";
// import CategoryCard from "../../components/CategoryCard/CategoryCard";
// import CabCards from "../../components/CabCards/CabCards";
import Testinomial from "../../components/Testinomial/Testinomial";
// import ProductCards from "../../components/ProductCards/ProductCards";
// import OurBest from "../../components/OurBest/OurBest";

const HomeScreen = () => {
  return (
    <>
      <Banner />
      <Testinomial />

      {/* 
      <CategoryCard />
      <CabCards />
      <ProductCards
        title="Root Vegetable"
        discount="10"
        subtitle="Fresh Root Vegetable"
      />
      <ProductCards
        title="Root Vegetable"
        discount="10"
        subtitle="Fresh Root Vegetable"
      />
      <ProductCards
        title="Root Vegetable"
        discount="10"
        subtitle="Fresh Root Vegetable"
      />
      <OurBest />
       */}
    </>
  );
};

export default HomeScreen;
