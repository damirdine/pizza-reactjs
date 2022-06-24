
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TopBar from './components/TopBar';
import NavBar from './components/NavBar';
import About from './pages/About';
import Contact from './pages/Contact';
import Policy from "./pages/Policy";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <TopBar/>
      <NavBar/>
      <Routes>
      <Route path="/" element={<Home/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/Policy" element={<Policy/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
