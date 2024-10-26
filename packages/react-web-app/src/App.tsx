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

type CartItem = {
  name: string;
  size: string;
  quantity: number;
};
function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [pizzaData] = useState(pizzas);

  const addToCart = (product: {
    name: string;
    size: string;
    quantity: number;
  }) => {
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
    <BrowserRouter>
      <TopBar />
      <NavBar cartItems={cartItems} UserLogged={null} />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              cartItems={cartItems}
              addToCart={addToCart}
              pizzaData={pizzaData}
            />
          }
        />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Policy" element={<Policy />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route
          path="/Cart"
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
