import React from "react";
import { useCartContext } from "../../Context/CartContext";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import { toast } from "react-toastify";

const ItemCart = ({ product }) => {
  const { removeProduct } = useCartContext();
  const notify = () => toast("Delete item Cart!");

  return (
    <>
      {" "}
      <Container>
        <Row>
          <Col lg="6" md="10" xs="12" className="p-5">
            <motion.img
              whileHover={{ scale: 1.2 }}
              src={product.pictureUrl}
              alt="imgUrl"
            />
          </Col>
          <Col lg="6" md="10" xs="12">
            <div className="product__detail">
              <h2>{product.title}</h2>
              <div className="product__rating d-flex align-items-center gap-5 mb-4">
                <div>
                  <span>
                    <i class="ri-star-s-fill"></i>
                  </span>
                  <span>
                    <i class="ri-star-s-fill"></i>
                  </span>
                  <span>
                    <i class="ri-star-s-fill"></i>
                  </span>
                  <span>
                    <i class="ri-star-s-fill"></i>
                  </span>
                  <span>
                    <i class="ri-star-half-s-fill"></i>
                  </span>
                </div>
                <p>(Ratings)</p>
              </div>
              <div className="d-flex align-items-center gap-3">
                <span className="product__price">$ {product.price}</span>
                <span className="product__price">
                  {" "}
                  {product.quantity}=Unit,
                </span>
                <span className="product__price">
                  Subtotal= $ {product.quantity * product.price}
                </span>
              </div>

              <div className="d-flex align-items-center ">
                <button
                  className="buy__btn"
                  onClick={() => removeProduct(product.id)}
                >
                  <i class="ri-delete-bin-6-line" onClick={notify}></i>
                </button>
                <span className="m-2">
                  <Link to="/">
                    {" "}
                    <button className="buy__btn">Continue shopping</button>
                  </Link>
                </span>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ItemCart;
