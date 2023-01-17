import { Link } from "react-router-dom";
import { useCartContext } from "../../Context/CartContext";
import { motion } from "framer-motion";
import "./cartwidget.css";

export const CartWidget = () => {
  const { totalProducts } = useCartContext();

  return (
    <Link to="/Cart">
      <div className="nav__icons">
        <motion.span whileTap={{ scale: 0.9 }} className="cart__icon">
          <i class="ri-shopping-cart-line"></i>
          <span className="badge rounded-circle p-1">{totalProducts()||"0 " }</span>
        </motion.span>
      </div>
    </Link>
  );
};
