import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from "./component/Pages/Dashboard/Dashboard";
import City from "./component/Pages/City/City";
import Sidebar from "./component/Navbar/Sidebar";
import Navbar from './component/Navbar/Navbar';
import Add from './component/Pages/Add/Add';
import Edit from './component/Pages/Add/Edit';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from '../../Portfolio/src/components/Login/Login';
import CustomerReview from './component/Pages/Customer-Review/CustomerReview';
import CustomerList from './component/Pages/Customer-Review/CustomerList';
import Faq from './component/Pages/FAQ/Faq';
import FaqList from './component/Pages/FAQ/FaqList';
import TransportCitiesList from './component/Pages/TransportCities/TransportCitiesList';
import TransportCities from './component/Pages/TransportCities/TransportCities';
import ExternalTracking from './component/Pages/External-Trackings/ExternalTracking';
import ExternalTrackingList from './component/Pages/External-Trackings/ExternalTrackingList';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if token is in localStorage
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
  };

  return (
    <div className="flex h-screen">
      {!isLoggedIn ? (
        <div className="flex items-center justify-center">
          <Login onLogin={handleLogin} />
        </div>
      ) : (
        <>
          <Sidebar className="w-1/4" /> {/* Adjust width as needed */}
          <div className="flex flex-col">
            <ToastContainer />
            <Navbar className="h-16" onLogout={handleLogout} /> {/* Adjust height as needed */}
            <div className="flex flex-none p-4">
              <Routes>
                <Route path="/admin/dashboard" element={<Dashboard />} />
                <Route path="/admin/city" element={<City />} />
                <Route path="/admin/city/add" element={<Add />} />
                <Route path="/admin/city/edit/:id?" element={<Edit/>} />
                <Route path="/admin/Customer-List" element={<CustomerList />} />
                <Route path="/admin/Transport-Cities-List" element={<TransportCitiesList />} />
                <Route path="/admin/Transport-Cities" element={<TransportCities />} />
                <Route path="/admin/External-Tracting-List" element={<ExternalTrackingList />} />
                <Route path="/admin/External-Tracting" element={<ExternalTracking />} />
                <Route path="/admin/customer-review/:id?" element={<CustomerReview />} />
                <Route path="/admin/faq" element={<Faq />} />
                <Route path="/admin/faq-list" element={<FaqList />} />
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
