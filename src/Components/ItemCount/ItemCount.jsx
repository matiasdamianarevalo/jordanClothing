import { useState } from "react";
import { motion } from "framer-motion";
import './itemcount.css'

const ItemCount = ({ onAdd }) => {
  const [count, setCount] = useState(0);

  const decrease = () => {
    setCount((count) => Math.max(count - 1, 0));
  };

  const increase = () => {
    setCount(count + 1);
  };

  return (
    <div className="text-center">
      <span
        className="add"
        key={count}
        onClick={decrease}
      ><i class="ri-indeterminate-circle-fill"></i>
      </span>
      <span className="count m-3">{count}</span>
      <span className="add"
        key={count >= 1}
        onClick={increase}
      ><i class="ri-add-circle-fill"></i></span>
      <div>
        <motion.button
          whileTap={{ scale: 1.1 }}
          className="buy__btn "
          onClick={() => onAdd(count)}
        >
          Add to cart
        </motion.button>
      </div>
    </div>
  );
};

export default ItemCount;
