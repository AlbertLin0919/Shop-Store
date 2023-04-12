import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "./ItemDetail.css";
import { Minus, Plus } from "phosphor-react";
import { addToCartAmount } from "../../store/productSlice";

const ItemDetail = () => {
  const { id } = useParams();
  const [amount, setAmount] = useState(1);
  const products = useSelector((state) => state.products.PRODUCTS);
  const dispatch = useDispatch();
  const product = products.find((p) => p.id == id);
  const {
    price,
    discountPrice,
    productImage,
    productImage2,
    productImage3,
    productImage4,
    productTitle,
    productDetail,
  } = product;
  const images = [productImage, productImage2, productImage3, productImage4];
  //   discount Function
  const discount = (discount, price) => {
    return parseFloat((discount / price).toFixed(2));
  };

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  const [image, setImage] = useState(productImage);
  return (
    <div className="itemDetail-container">
      <div className="item">
        <div className="item-left">
          <div className="item-top">
            <img src={image} />
          </div>
          <div className="item-bottom">
            {images.map((i, index) => {
              return (
                <img
                  src={i}
                  onMouseOver={() => setImage(i)}
                  className={image == i ? "active" : ""}
                  key={index}
                />
              );
            })}
          </div>
        </div>
        <div className="item-right">
          <h2>{productTitle}</h2>
          <div className="report">
            <span>現貨</span>
            <p>檢舉此商品</p>
          </div>
          <div className="discountPrice">
            <span>${numberWithCommas(price)}</span>
            <h2>${numberWithCommas(discountPrice)}</h2>
            <p>{(discount(discountPrice, price) * 10).toFixed(1)}折</p>
          </div>
          <div className="productDetail">
            {productDetail.map((detail, index) => {
              return <p key={index}>◎{detail}</p>;
            })}
          </div>
          <div className="productQuantity">
            <p>數量</p>
            <button
              onClick={() => {
                if (amount == 1) return;
                setAmount((prev) => prev - 1);
              }}
            >
              <Minus className="minus" />
            </button>
            <input
              type="number"
              min="1"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
            <button
              className="plus"
              onClick={() => setAmount((prev) => prev + 1)}
            >
              <Plus />
            </button>
          </div>
          <div className="productButton">
            <button
              className="addToCart"
              onClick={() => dispatch(addToCartAmount({ id: +id, amount }))}
            >
              加入購物車
            </button>
            <button className="purchase">直接購買</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
