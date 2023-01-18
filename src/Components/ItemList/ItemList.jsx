import Item from "../Item/Item";
import { Link } from "react-router-dom";
import "../style/itemlist.css";
import { Container } from "react-bootstrap";

const ItemList = ({ lista }) => {
  return (
    <>
      <Container>
        <div className="productos">
          {lista.map((product) => (
            <Link key={product.id} to={"/jordan/" + product.id}>
              <Item
                classname="itemlist"
                id={product.id}
                title={product.title}
                price={product.price}
                pictureUrl={product.pictureUrl}
                categoryId={product.categoryId}
              />
            </Link>
          ))}
        </div>
      </Container>
    </>
  );
};

export default ItemList;
