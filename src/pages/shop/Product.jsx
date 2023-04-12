import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../store/productSlice";
import { Link } from "react-router-dom";
import { AppleLogo, ShoppingCart } from "phosphor-react";

const Product = ({ data }) => {
  const [isClick, setIsClick] = useState(false);
  const { id, productName, discountPrice, productImage } = data;
  const disptach = useDispatch();
  //取出store裡面products的cartItem
  // const { cartItem } = useSelector((state) => state.products);
  // //一開始的時候cartItem都是空的，當點擊button時，會把商品加入cartItem中，並且觸發product
  // const product = cartItem.find((item) => item.id === id);
  // //上面這個方法可以去比對購物車有沒有該商品
  // const quantity = product ? product.quantity : 0;

  const handleClick = () => {
    setIsClick(true);
    disptach(addToCart({ id }));
    setTimeout(() => {
      setIsClick(false);
    }, 1600);
  };

  return (
    <div className="product">
      <Link to={`/item/${id}`} className="productImage">
        <img src={productImage} />
      </Link>
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p>NT${discountPrice}</p>
      </div>
      <button
        className={`addToCartBtn ${isClick ? "clicked" : ""}`}
        onClick={handleClick}
      >
        {/* Add To Cart {quantity > 0 ? <span>({quantity})</span> : ""} */}
        <span className="add-to-cart">Add to cart</span>
        <ShoppingCart className="shoppingCart" size={28} weight="fill" />
        <AppleLogo className="appleLogo" size={16} weight="fill" />
      </button>
    </div>
  );
};

export default Product;
