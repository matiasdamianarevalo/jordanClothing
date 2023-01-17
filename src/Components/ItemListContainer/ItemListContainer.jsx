import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { getAllItems, getAllCategory } from "../../Firebase/config";
import HeaderSection from "../Header/HeaderSection";

const ItemListContainer = () => {
  const [productList, setProductList] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    if (categoryId) {
      getAllCategory(categoryId).then((resultFilter) => {
        setProductList(resultFilter);
      });
    } else {
      getAllItems().then((result) => {
        setProductList(result);
      });
    }
  }, [categoryId]);

  return (
    <>
      <HeaderSection/>
      <ItemList lista={productList} />{" "}
    </>
  );
};

export default ItemListContainer;
