import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/actions/cartActions";

const TestProducts = () => {
  const dispatch = useDispatch();

  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const { data } = await axios("https://dharm.ga/api/product");
    setProducts(data.product);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product, product.product_id, 1)); //if dropdown appears then put dropdown value in place of qty
  };

  return (
    <div>
      Test Products
      {products.map((item, index) => {
        return (
          <div key={index}>
            <h3>
              {item.product_id} - {item.product_name}
              <button onClick={() => handleAddToCart(item)}>add</button>
            </h3>
          </div>
        );
      })}
    </div>
  );
};

export default TestProducts;
