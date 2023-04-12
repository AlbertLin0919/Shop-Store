import React from "react";
import "./Cart.css";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, ShoppingCartSimple } from "phosphor-react";
const Cart = () => {
  const { cartItem } = useSelector((state) => state.products);
  const navigate = useNavigate();
  console.log(cartItem);

  let totalAmount = cartItem.reduce(
    (sum, item) => sum + item.quantity * item.price,
    0
  );
  let totalQuantity = cartItem.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      <div className="container">
        <div className="backToHome">
          <div className="left" onClick={() => navigate("/")}>
            <ArrowLeft className="arrow" />
            <span>Continue Shopping</span>
          </div>
          <div className="right">
            <ShoppingCartSimple
              size={32}
              color="#d0011b"
              weight="fill"
              className="cart"
            />
            <span>{totalQuantity}</span>
          </div>
        </div>
        <div className="cart">
          <div className="cartTop">
            <div className="cartTop-product">商品</div>
            <div className="cartTop-price">單價</div>
            <div className="cartTop-count">數量</div>
            <div className="cartTop-total">總計</div>
            <div className="cartTop-delete">刪除</div>
          </div>
          <div className="cartItems-container">
            {cartItem.map((item) => {
              return <CartItem key={item.id} item={item} />;
            })}
          </div>
        </div>
        {cartItem.length == 0 ? (
          <h1 className="empty">你的購物車還是空的!</h1>
        ) : (
          <div className="totalPrice">
            <h2>
              <span>總計:</span> {totalAmount}元
            </h2>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
