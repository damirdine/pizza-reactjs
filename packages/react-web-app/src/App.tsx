import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TopBar from "./components/TopBar";
import NavBar from "./components/NavBar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Policy from "./pages/Policy";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { useState } from "react";
import { pizzas } from "./product.data";
import { CartItemType } from "./types";

function App() {
  const [cartItems, setCartItems] = useState<CartItemType[]>([]);
  const [pizzaData] = useState(pizzas);

  const addToCart = (product: CartItemType) => {
    const isExist = cartItems.find(
      (item) => item.name === product.name && item.size === product.size
    );
    if (isExist) {
      isExist.quantity += product.quantity;
      setCartItems(cartItems);
    } else {
      setCartItems([...cartItems, product]);
    }
  };
  return (
    <BrowserRouter basename={"/pizza-reactjs/"}>
      <TopBar />
      <NavBar cartItems={cartItems} UserLogged={null} />
      <Routes>
        <Route
          path="/"
          element={<Home addToCart={addToCart} pizzaData={pizzaData} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/cart"
          element={
            <Cart
              cartItems={cartItems}
              setCartItems={setCartItems}
              pizzaData={pizzaData}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
