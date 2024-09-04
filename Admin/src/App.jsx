import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from "./component/Pages/Dashboard/Dashboard";
import City from "./component/Pages/City/City";
import Sidebar from "./component/Navbar/Sidebar";
import Navbar from './component/Navbar/Navbar';
import Add from './component/Pages/Add/Add';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from './component/Login/Login';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    // Logic to authenticate user goes here
    // If successful:
    setIsLoggedIn(true);
  };

  return (
    <div className="flex h-screen">
      {!isLoggedIn ? (
        <div className="flex flex-grow items-center justify-center">
          <Login onLogin={handleLogin} />
        </div>
      ) : (
        <>
          <Sidebar className="w-1/4" /> {/* Adjust width as needed */}
          <div className="flex flex-col flex-grow">
            <ToastContainer />
            <Navbar className="h-16" /> {/* Adjust height as needed */}
            <div className="flex-grow overflow-auto p-4">
              <Routes>
                <Route path="/admin/dashboard" element={<Dashboard />} />
                <Route path="/admin/city" element={<City />} />
                <Route path="/admin/city/add" element={<Add />} />
                {/* other routes... */}
              </Routes>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
