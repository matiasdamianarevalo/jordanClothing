import "./NavBar.css";
import { CartWidget } from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";
import logo from "./eco-logo.png";
import { Container, Row } from "reactstrap";
import { motion } from "framer-motion";
import React, { useRef, useEffect } from "react";
import { useCartContext } from "../../Context/CartContext";

function NavBar() {
  const headerRef = useRef(null);
  const { totalProducts } = useCartContext();
  const menuRef = useRef(null);

  const stickyHeaderFunc = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("sticky__header");
      } else {
        headerRef.current.classList.remove("sticky__header");
      }
    });
  };

  useEffect(() => {
    stickyHeaderFunc();
    return () => window.removeEventListener("scroll", stickyHeaderFunc);
  });

  const menuToggle = () => menuRef.current.classList.toggle("active__menu");

  return (
    <>
      <header className="header" ref={headerRef}>
        <Container>
          <Row>
            <div className="nav__wrapper">
              <div className="logo">
                <img src={logo} alt="logo" />
                <div>
                  <h1>JORDAN CLOTHING</h1>
                </div>
              </div>
              <div className="navigation" ref={menuRef} onClick={menuToggle}>
                <ul className="menu">
                  <li className="nav-item active">
                    <Link to="/">HOME </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/category/jordan">JORDAN</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/category/sneaker">SNEAKER</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/category/apparel">APPAREL</Link>
                  </li>
                </ul>
              </div>
              <div className="nav__icons">
                <Link to="/Cart">
                  <motion.span whileTap={{ scale: 0.9 }} className="cart__icon">
                    <CartWidget />
                  </motion.span>
                </Link>
                <span className="text-dark">= {totalProducts()||"0"} Unit </span>
                <div className="mobile__menu">
                  <span onClick={menuToggle}>
                    <i class="ri-menu-2-line"></i>
                  </span>
                </div>
              </div>
            </div>
          </Row>
        </Container>
      </header>
    </>
  );
}

export default NavBar;
