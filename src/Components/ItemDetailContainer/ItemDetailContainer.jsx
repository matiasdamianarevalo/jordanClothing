import React from "react";
import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { getSingleItem } from "../../Firebase/config";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState([]);
  let { catId } = useParams();

  useEffect(() => {
    getSingleItem(catId).then((res) => {
      setProduct(res);
    });
  }, [catId]);

  return (
    <>
      <ItemDetail product={product} />{" "}
    </>
  );
};

export default ItemDetailContainer;
