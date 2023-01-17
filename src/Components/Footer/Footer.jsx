import React from "react";
import "./Footer.css";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="4" className="mb-4" md="6">
            <div className="logo">
              <div>
                <h1 className="text-dark">JORDAN CLOTHING</h1>
              </div>
            </div>
            <p className="footer__text mt-4">
              Lorem ipsum dolor si Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Ut autem dolorem, error vel ex voluptatibus
              ipsam ad temporibus.
            </p>
          </Col>

          <Col lg="3" md="3" className="mb-4">
            <div className="footer__quick-links">
              <h4 className="quick__link-title">Top Categories</h4>
              <ListGroup>
                <ListGroupItem className="ps-0 border-0">
                  <Link className="text-dark" to="category/jordan">
                    JORDAN
                  </Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <Link className="text-dark" to="category/sneaker">
                    SNEAKER
                  </Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0 text-decoration-none">
                  <Link className="text-dark" to="category/apparel">
                    APPAREL
                  </Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>

          <Col lg="3" md="4" className="mb-4">
            <div className="footer__quick-links">
              <h4 className="quick__link-title">Contact</h4>
              <ListGroup className="footer__contact">
                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                  <span>
                    <i class="ri-map-pin-line"></i>
                  </span>
                  <p>123, falsa, springfield, USA</p>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                  <span>
                    <i class="ri-phone-line"></i>
                  </span>
                  <p>+54 9 1122334455</p>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                  <span>
                    <i class="ri-mail-line"></i>
                  </span>
                  <p>jordanClothing@gmail.com</p>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>

          <Col lg="12">
            <p className="footer__copyright text-center mt-3">
              Copyright {year} developed by Matias Arevalo. All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
