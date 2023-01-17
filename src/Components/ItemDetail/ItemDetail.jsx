import React from "react";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useCartContext } from "../../Context/CartContext";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import "../style/itemdetail.css";
import { toast } from "react-toastify";
import HeaderSection from "../Header/HeaderSection";

const ItemDetail = ({ product }) => {
  const [addCart, setAddCart] = useState(false);
  const { addProduct } = useCartContext();
  const onAdd = (quantity) => {
    addProduct(product, quantity);
    setAddCart(true);
      
    toast.success("Added successfully");
  };

  return (
    <>
    <HeaderSection/>
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
                <span> Category: {product.categoryId}</span>
              </div>
              <p className="mt-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
                praesentium vel nesciunt adipisci impedit saepe molestiae?
                Dignissimos quaerat alias quod! Quaerat cupiditate minus
                architecto omnis esse quo consequatur ab et.
              </p>
              <div className="d-flex m-3 align-items-center ">
                <ItemCount onAdd={onAdd} />

                <Link to="/Cart" onAdd={addCart}>
                  <button className="buy__btn m-4 rounded-circle">
                    <i class="ri-shopping-cart-line"></i>
                  </button>
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ItemDetail;
