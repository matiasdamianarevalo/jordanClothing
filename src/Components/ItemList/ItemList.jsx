import Item from "../Item/Item";
import { Link } from "react-router-dom";
import '../style/itemlist.css';

const ItemList = ({ lista }) => {
  return (
    <>
      <h1 className="animation text-center">PRODUCTOS</h1>
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
    </>
  );
};

export default ItemList;
