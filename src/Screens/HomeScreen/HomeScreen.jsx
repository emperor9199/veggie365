import React, { useState, useEffect } from "react";
import Banner from "../../components/Banner/Banner";
import Testinomial from "../../components/Testinomial/Testinomial";
import Features from "../../components/Features/Features";
import StarProducts from "../../components/StarProducts/StarProducts";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/actions/cartActions";

const HomeScreen = () => {
  const dispatch = useDispatch();

  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);

  const authAxios = axios.create({
    baseURL: "https://dharm.ga/api",
    headers: {
      Authorization: `Bearer ${JSON.parse(localStorage.getItem("userToken"))}`,
    },
  });

  const fetchProducts = async () => {
    const { data } = await authAxios.get("/product");

    setProducts(data.product);
    setCategory(data.category);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  var count = 0;
  var arrCat = [];
  category.map((iteam) => {
    products?.map((cat) => {
      if (iteam.category_id === cat.category_id) {
        count++;
      }
    });
    if (count >= 4) {
      arrCat.push({ id: iteam.category_id, name: iteam.category_name });
    }
    count = 0;
  });

  return (
    <>
      <Banner />
      <Features />
      {arrCat.map((d) => {
        return (
          <StarProducts
            no="odd"
            categoryid={d.id}
            key={d.id}
            categoryName={d.name}
          />
        );
      })}
      <Testinomial />
    </>
  );
};

export default HomeScreen;
