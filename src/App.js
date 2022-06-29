
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
  const [cartItems,setCartItems] = useState([])
  const addToCart = (product) => {
    let isExist = cartItems.find((item)=> item.name === product.name && item.size === product.size)
    if(isExist){
      console.log('isExist',product,isExist)
      setCartItems(cartItems.map((item) => isExist ? {...isExist,quantity: isExist.quantity+product.quantity}:item))
      console.log('And update do : ',product)
    }
    setCartItems([...cartItems,product])
    console.log('Product is  add to cart', product,cartItems)
  }
  const deleteFromCart = (product)=>{
    setCartItems((products) => products.filter((_, index) => index !== 0));
    console.log('Product is deleteFromCart', product,cartItems)
  }
  
  return (
    <BrowserRouter>
      <TopBar/>
      <NavBar cartItems={cartItems}/>
      <Routes>
      <Route path="/" element={<Home cartItems={cartItems} addToCart={addToCart}/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/Policy" element={<Policy/>}/>
        <Route path="/Cart" element={<Cart cartItems={cartItems} deleteFromCart={deleteFromCart}/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
