import React from "react";
import { useDispatch } from "react-redux";
import {
  addToCart,
  decreaseFromCart,
  changeQuantity,
  removeFromCart,
} from "../../store/productSlice";
import { Link } from "react-router-dom";

const CartItem = ({ item }) => {
  const { id, productName, productImage, price, quantity } = item;
  const dispatch = useDispatch();
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  return (
    <div className="cartItem">
      <Link to={`/item/${id}`} className="itemDetail">
        <img src={productImage} />
        <h3>{productName}</h3>
      </Link>

      <div className="price">
        <p>${numberWithCommas(price)}</p>
      </div>
      <div className="amount">
        <button onClick={() => dispatch(decreaseFromCart({ id }))}>-</button>
        <input
          max="99"
          type="number"
          value={quantity}
          onChange={(e) =>
            dispatch(changeQuantity({ id, quantity: Number(e.target.value) }))
          }
        />
        <button onClick={() => dispatch(addToCart({ id }))}>+</button>
      </div>
      <div className="total">
        <p>${numberWithCommas(price * quantity)}</p>
      </div>
      <div className="delete" onClick={() => dispatch(removeFromCart({ id }))}>
        刪除
      </div>
    </div>
  );
};

export default CartItem;
