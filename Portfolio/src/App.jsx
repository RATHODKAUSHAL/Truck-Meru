import React, {useState } from 'react';
import { Route, Routes} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './Pages/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import FAQ from './components/FAQ/Faq';
import Login from './components/Login/Login';
import City from './Admin/City';
import Admin from './Admin/Admin'


function App() {
  const [showLogin, setShowLogin] = useState(false);
  
  return (
    
    <div>
      
      {showLogin ? <Login setShowLogin={setShowLogin} /> : null}
      <Navbar setShowLogin={setShowLogin} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:city' element={<City/>} />
        <Route path='/Admin' element={<Admin/>}/>
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/faq' element={<FAQ />} />
      </Routes>
    </div>
  );
}

export default App;
