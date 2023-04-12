import React, { useState } from "react";
import Product from "./Product";
import "./Shop.css";
import { useSelector } from "react-redux";
import { ShoppingCart } from "phosphor-react";
import { useNavigate } from "react-router-dom";

const Shop = () => {
  const products = useSelector((state) => state.products.PRODUCTS);
  const { cartItem } = useSelector((state) => state.products);
  const quantity = cartItem.map((item) => item.quantity);
  const totalQuantity = quantity.reduce((sum, item) => sum + item, 0);
  const [cartBoxShow, setCartBoxShow] = useState(false);
  const navigate = useNavigate();

  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 200) {
      setCartBoxShow(true);
    } else {
      setCartBoxShow(false);
    }
  });

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
      <div
        className="cart-box"
        onClick={() => navigate("/cart")}
        style={{ bottom: cartBoxShow ? "80px" : "" }}
      >
        <ShoppingCart className="cartboxitem" weight="fill" fontSize={32} />
        <span>{totalQuantity !== 0 && totalQuantity}</span>
      </div>
    </div>
  );
};

export default Shop;
