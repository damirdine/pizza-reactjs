import logo from './logo.svg';
import './App.css';
import TopBar from './components/TopBar';
import { BrowserRouter } from 'react-router-dom';
import { Tooltip } from 'react-bootstrap';

function App() {
  return (
    <BrowserRouter>
      <TopBar/>
    </BrowserRouter>
  );
}

export default App;
