import React from "react";
import { Routes, Route } from "react-router-dom";
import { useAppContext } from "./context/AppContext";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import OrderSuccess from "./pages/OrderSuccess";
import MyOrders from "./pages/MyOrders";
import Contact from "./pages/Contact";
import About from "./pages/About";
import LoginModal from "./components/LoginModal";

const AppContent = () => {
  const { showUserLogin, setShowUserLogin } = useAppContext();

  return (
    <>
      {showUserLogin && <LoginModal close={() => setShowUserLogin(false)} />}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/order-success" element={<OrderSuccess />} />
        <Route path="/my-orders" element={<MyOrders />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
};

const App = () => <AppContent />;
export default App;
