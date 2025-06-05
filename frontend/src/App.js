import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Home from "./pages/Home";
import Restaurants from "./pages/Restaurants";
import Menu from "./pages/Menu";
import OrderStatus from "./pages/OrderStatus";
import Header from "./components/Header";

function App() {
  return (
    <CartProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/restaurants" element={<Restaurants />} />
          <Route path="/menu/:restaurantId" element={<Menu />} />
          <Route path="/order-status" element={<OrderStatus />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
