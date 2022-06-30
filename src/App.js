
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TopBar from './components/TopBar';
import NavBar from './components/NavBar';
import About from './pages/About';
import Contact from './pages/Contact';
import Policy from "./pages/Policy";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import { React,useState, useEffect} from 'react';

function App() {

  useEffect(()=>{
      fetch("http://localhost:8080/pizzas")
      .then(response => {
          if(response.ok){
              return response.json()
          }
      })
      .then(data => {setPizzasData(data)})
      .catch(err => {console.log(err,"WE CATCH AN ERROR")})
  },[])
  
  const [cartItems,setCartItems] = useState([])
  const [pizzaData, setPizzasData] = useState(null);

  const addToCart = (product) => {
    let isExist = cartItems.find((item)=> item.name === product.name && item.size === product.size)
    if(isExist){
      isExist.quantity += product.quantity
      setCartItems(cartItems)
    }else{
      setCartItems([...cartItems,product])
    }
  }

  const deleteFromCart = (product)=>{
    setCartItems((products) => products.filter((_, index) => index !== 0));
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
        <Route path="/Cart" element={<Cart cartItems={cartItems} deleteFromCart={deleteFromCart} setCartItems={setCartItems} pizzaData={pizzaData}/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
