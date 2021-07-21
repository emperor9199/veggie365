import React from "react";
import Banner from "../../components/Banner/Banner";
import Testinomial from "../../components/Testinomial/Testinomial";
import Features from "../../components/Features/Features";
import StarProducts from "../../components/StarProducts/StarProducts";

const HomeScreen = () => {
  return (
    <>
      <Banner />
      <Features />
      <StarProducts no="evan"/>
      <StarProducts no="odd"/>
      <Testinomial />
    </>
  );
};

export default HomeScreen;
