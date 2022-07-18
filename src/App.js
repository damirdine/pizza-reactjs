
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TopBar from './components/TopBar';
import NavBar from './components/NavBar';
import About from './pages/About';
import Contact from './pages/Contact';
import Policy from "./pages/Policy";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { React,useState, useEffect} from 'react';

function App() {
  const [UserLogged,setUserLogged] = useState(async()=>{
    try {
        let res = await fetch("http://localhost:8080/users/login", {
          method: "GET",
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
        });
        if (res.status === 200) {
          let data = await res.json()
          setUserLogged(data)
        } else {
          console.log("Some error occured", res);
        }
    } catch (err) {
    console.log(err);
    }
})
  const [cartItems,setCartItems] = useState([])
  const [pizzaData, setPizzasData] = useState();

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
  console.log(UserLogged)
  return (
    <BrowserRouter>
      <TopBar/>
      <NavBar cartItems={cartItems} UserLogged={UserLogged}/>
      <Routes>
        <Route path="/" element={<Home cartItems={cartItems} addToCart={addToCart} pizzaData={pizzaData}/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/Policy" element={<Policy/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Register" element={<Register/>}/>
        <Route path="/Cart" element={<Cart cartItems={cartItems} deleteFromCart={deleteFromCart} setCartItems={setCartItems} pizzaData={pizzaData}/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
