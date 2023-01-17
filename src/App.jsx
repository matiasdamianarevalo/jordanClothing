import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Cart from "./Components/Cart/Cart";
import CheckOut from "./Components/CheckOut/CheckOut";
import Footer from "./Components/Footer/Footer";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import NavBar from "./Components/NavBar/NavBar";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";
import NotFound from "./Components/NotFound/NotFound";
import CartProvider from "./Context/CartContext";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <CartProvider>
      <ToastContainer
        theme="dark"
        position="top-right"
        autoClose={1200}
        closeOnClick
        pauseOnHover={false}
        />
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:categoryId"element={<ItemListContainer />} />
            <Route path="/Cart" element={<Cart />} />
            <Route path="/item/:catId" element={<ItemDetailContainer />} />
            <Route path="*" element={<NotFound />} />
            <Route path="NotFound" element={<NotFound />} />
            <Route path="CheckOut" element={<CheckOut />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </CartProvider>
    </>
  );
}

export default App;
