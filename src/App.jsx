import { useState } from "react";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import "./App.css";

function App() {
  const [cart, setCart] = useState([]);

  function addToCart(product) {
    setCart([...cart, product]);
  }

  function removeFromCart(index) {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  }

  return (
    <div>
      <h1>🛒 My E-commerce App</h1>
      <ProductList addToCart={addToCart} />
      <Cart cart={cart} removeFromCart={removeFromCart} />
    </div>
  );
}

export default App;

