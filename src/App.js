
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TopBar from './components/TopBar';
import NavBar from './components/NavBar';
import About from './pages/About';
import Contact from './pages/Contact';
import Policy from "./pages/Policy";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import { React,useState } from 'react';

function App() {
  const [cartItemsCount, setCartItemsCount] = useState(0);
  //const [cartItems, setCartItems] = useState([]);

  return (
    <BrowserRouter>
      <TopBar/>
      <NavBar cartItemsCount={cartItemsCount}/>
      <Routes>
      <Route path="/" element={<Home cartItemsCount={cartItemsCount} setCartItemsCount={setCartItemsCount}/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/Policy" element={<Policy/>}/>
        <Route path="/Cart" element={<Cart/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
