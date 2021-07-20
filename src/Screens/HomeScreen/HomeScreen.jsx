import React from "react";
import Carousal from "../../components/Carousal/Carousal";
import CategoryCard from "../../components/CategoryCard/CategoryCard";
import CabCards from "../../components/CabCards/CabCards";
import Testinomial from "../../components/Testinomial/Testinomial";
import ProductCards from "../../components/ProductCards/ProductCards";
import OurBest from "../../components/OurBest/OurBest";
import Footer from "../../components/Footer/Footer";

const HomeScreen = () => {
  return (
    <>
      <Carousal />
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
      <OurBest/>
      <Testinomial />
      <Footer />
    </>
  );
};

export default HomeScreen;
