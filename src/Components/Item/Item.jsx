import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "../style/item.css";

import React from "react";
import Card from "react-bootstrap/Card";

function Item(props) {
  let detailItem = `/item/${props.id}`;

  return (
    <div className="text-center">
      <Card style={{ width: "18rem" }}>
        <motion.img
          className="p-2"
          whileHover={{ scale: 0.9 }}
          variant="top"
          src={props.pictureUrl}
        />
        <Card.Body>
          <h2 className="text-h2">{props.title}</h2>
          <h3 className="text-h3">{props.categoryId}</h3>
          <p className="text-p">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <h4 className="text-price">$ {props.price}</h4>
          <Link to={detailItem}>
            <motion.button
              className="buy__btn"
              whileTap={{ scale: 1.2 }}
              variant="primary"
            >
              Detail Product
            </motion.button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Item;
