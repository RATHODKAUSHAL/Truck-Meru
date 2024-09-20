import React, {useEffect, useState } from 'react';
import { Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './Pages/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import FAQ from './components/FAQ/Faq';
import Login from './components/Login/Login';
import City from './Admin/City';
import ExternalTracking from './components/External-Tracking/External-Tracking';


function App() {
  const [showLogin, setShowLogin] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem('token');
    if(token){
      setShowLogin(true);
    }
  },[]);

  const handleLogin = () => {
    setShowLogin(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setShowLogin(false)
  };
  
  return (
    
    <div>
      
      {!showLogin ? (<Login onLogin={handleLogin} /> ):( 
      <>
      <Navbar onLogout={handleLogout} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:city' element={<City/>} />
        <Route path='/about' element={<About />} />
        <Route path='/external-traking' element={<ExternalTracking />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/faq' element={<FAQ />} />
      </Routes>
      </>
      )}
    </div>
  );
}

export default App;
