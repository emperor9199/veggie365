import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/actions/cartActions";

const TestProducts = () => {
  const dispatch = useDispatch();

  const [products, setProducts] = useState([]);
  const [productPrice, setProductPrice] = useState([]);

  const fetchProducts = async () => {
    const { data } = await axios("https://dharm.ga/api/product");
    setProducts(data.product);
    setProductPrice(data.price);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleAddToCart = (product, unit_price) => {
    dispatch(addToCart(product, product.product_id, unit_price, 1)); //if dropdown appears then put dropdown value in place of qty
  };

  return (
    <div>
      Test Products
      {products.map((item, index) => {
        return (
          <div key={index}>
            <h3>
              {item.product_id} - {item.product_name}
              <p>
                Price : 500gm
                {productPrice?.map((price) => {
                  if (item.product_id === price.product_id) {
                    let unit = "500 Gm";
                    if (price.price_unit_name === unit) {
                      return price.product_price;
                    }
                  }
                })}
              </p>
              <p>
                Price : 1kg =
                {productPrice?.map((price) => {
                  if (item.product_id === price.product_id) {
                    let unit = "1 kg";
                    if (price.price_unit_name === unit) {
                      return price.product_price;
                    }
                  }
                })}
              </p>
              <p>
                Price : 2kg =
                {productPrice?.map((price) => {
                  if (item.product_id === price.product_id) {
                    let unit = "2 kg";
                    if (price.price_unit_name === unit) {
                      return price.product_price;
                    }
                  }
                })}
              </p>
              {/* add item to cart */}
              <button onClick={() => handleAddToCart(item, 50)}>add</button>
            </h3>
          </div>
        );
      })}
    </div>
  );
};

export default TestProducts;
