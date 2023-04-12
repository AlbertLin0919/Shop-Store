import React from "react";
import Product from "./Product";
import "./Shop.css";
import { useSelector } from "react-redux";

const Shop = () => {
  const products = useSelector((state) => state.products.PRODUCTS);
  console.log(products);
  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>Albert Shop</h1>
      </div>
      <div className="products-container">
        <div className="products">
          {products.map((product) => {
            return <Product data={product} key={product.id} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Shop;
