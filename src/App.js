import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Tooltip } from 'react-bootstrap';
import TopBar from './components/TopBar';
import NavBar from './components/NavBar';
import About from './pages/About';
import Contact from './pages/Contact';
import Policy from "./pages/Policy"

function App() {
  return (
    <BrowserRouter>
      <TopBar/>
      <Routes>
        <Route path="/About" element={<About/>}/>
      </Routes>
      <Routes>
        <Route path="/Contact" element={<Contact/>}/>
      </Routes>
      <Routes>
        <Route path="/Policy" element={<Policy/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
