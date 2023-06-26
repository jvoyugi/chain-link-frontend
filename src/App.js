import { BrowserRouter } from 'react-router-dom';
import './App.css';
import ContactUs from './contact-us/ContactUs';
import Nav from './common/Nav';
import Home from './landing/Home';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Home />
    </BrowserRouter>
  );
}

export default App;
