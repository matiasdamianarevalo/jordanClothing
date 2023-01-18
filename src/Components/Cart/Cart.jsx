import React from "react";
import { useCartContext } from "../../Context/CartContext";
import { Link } from "react-router-dom";
import ItemCart from "../ItemCart/ItemCart";
import "../../App.css";
import HeaderSection from "../Header/HeaderSection";

const Cart = () => {
  const { cart, totalPrice } = useCartContext();

  if (cart.length === 0) {
    return (
      <>
        <HeaderSection title={"Cart"} />
        <div className="items__later text-center">
          <h3 className="text-dark">No items</h3>
          <Link to="/">
            <button className="buy__btn">Back to home</button>
          </Link>
        </div>
      </>
    );
  }

  return (
    <>
      <HeaderSection title={"Cart"} />
      {cart.map((product) => (
        <ItemCart key={product.id} product={product} />
      ))}
      <div className="text-center p-4">
        <h2>TOTAL= $ {totalPrice()}</h2>
        <Link to="/CheckOut">
          <button className="buy__btn">Proceed to checkout</button>{" "}
        </Link>
      </div>
    </>
  );
};
export default Cart;
