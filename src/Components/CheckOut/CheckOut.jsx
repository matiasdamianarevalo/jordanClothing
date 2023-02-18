import React, { useState } from "react";
import { addDoc, getFirestore, collection } from "firebase/firestore";
import { useCartContext } from "../../Context/CartContext";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import HeaderSection from "../Header/HeaderSection";

function CheckOut() {
  const { cart, totalPrice } = useCartContext();
  const [orderID, setOrderID] = useState("");

  const order = {
    items: cart.map((product) => ({})),
    total: totalPrice(),
  };

  const notify = () => toast("Thank you for your purchase!");

  const handledClick = () => {
    const db = getFirestore();
    const ordersCollection = collection(db, "orders");
    addDoc(ordersCollection, order).then(({ id }) => setOrderID(id));
  };
  return (
    <>
    <HeaderSection/>
      {orderID ? (
        <div className="text-center p-5">
          <h4 className="p-3">ID Order: </h4>
          <h2 className="p-3">{orderID}</h2>

          <p className="text-center">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam rerum
            dolor enim deleniti soluta dicta harum eaque nesciunt odio! Sapiente
            cupiditate accusamus quasi consequatur magni delectus vitae neque,
            consequuntur dolore!
          </p>
          <h3 className="text-center">
            Present the id number to the seller if you pick up at the counter,
            otherwise deliver the number to the delivery or shipping mail!!
          </h3>
          <h4 className="p-5">Thank you for choosing us!</h4>
        </div>
      ) : (
        <div className="text-center m-5 " onClick={notify}>
          <h2>TOTAL= $ {totalPrice()}</h2>
          <button className="buy__btn " onClick={handledClick}>
            Confirm order
          </button>
          
        </div>
      )}
      <div className="text-center">-----------------------------------------</div>
      <div className="text-center p-4">
        
        <Link to="/">
          <button className="buy__btn text-center p-2 m-4">
            Back to home
          </button>
        </Link>
      </div>
    </>
  );
}

export default CheckOut;
