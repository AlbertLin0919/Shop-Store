import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import "./navbar.css";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { cartItem } = useSelector((state) => state.products);

  const quantity = cartItem.map((item) => item.quantity);
  const totalQuantity = quantity.reduce((sum, item) => sum + item, 0);

  return (
    <div className="navbar">
      <div className="links">
        <Link to="/">Shop</Link>
        <Link to="/cart">
          <ShoppingCart size={32} />
        </Link>
        <span>{totalQuantity}</span>
      </div>
    </div>
  );
};

export default Navbar;
