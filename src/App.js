import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Tooltip } from 'react-bootstrap';
import TopBar from './components/TopBar';
import About from './pages/About';

function App() {
  return (
    <BrowserRouter>
      <TopBar/>
      <Routes>
        <Route path="/ABout" element={<About/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
