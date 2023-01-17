import { useState } from "react";
import { motion } from "framer-motion";

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
      <button
        className="buy__btn bg-danger rounded-circle"
        key={count}
        onClick={decrease}
      >
        -
      </button>
      <span className="buy__btn m-2">{count}</span>
      <button
        className="buy__btn bg-danger rounded-circle"
        key={count >= 1}
        onClick={increase}
      >
        +
      </button>
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
