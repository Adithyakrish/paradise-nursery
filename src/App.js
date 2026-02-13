import { useState } from "react";
import Navbar from "./components/Navbar";
import PlantList from "./components/PlantList";
import Cart from "./components/Cart";
import "./styles.css";
import { useEffect } from "react";
import AboutUs from "./components/AboutUs";
import React from "react";
import { Routes, Route } from "react-router-dom";

function App() {
const [cart, setCart] = useState(() => {
  const savedCart = localStorage.getItem("cart");
  return savedCart ? JSON.parse(savedCart) : [];
});


useEffect(() => {
  localStorage.setItem("cart", JSON.stringify(cart));
}, [cart]);


  const addToCart = (plant) => {
    const existingItem = cart.find(item => item.id === plant.id);

    if (existingItem) {
      setCart(
        cart.map(item =>
          item.id === plant.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...plant, quantity: 1 }]);
    }
  };

  const updateQuantity = (id, qty) => {
    setCart(
      cart.map(item =>
        item.id === id ? { ...item, quantity: qty } : item
      )
    );
  };

  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  return (
     <>
      <Navbar cartCount={cart.length} />

      <Routes>
        <Route
          path="/"
          element={<PlantList addToCart={addToCart} />}
        />
        <Route
          path="/plants"
          element={<PlantList addToCart={addToCart} />}
        />
        <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
              updateQuantity={updateQuantity}
              removeFromCart={removeFromCart}
            />
          }
        />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </>
  );
}

export default App;
