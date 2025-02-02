import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate, Link } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import TradeCarbonCredits from "./components/TradeCarbonCredits";

function App() {
  const [userAddress, setUserAddress] = useState("0x1234567890abcdef"); // Dummy address

  const handleLogout = () => {
    // If you still want a logout functionality, you can reset the address
    setUserAddress(null);
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        {/* Navigation Bar */}
        <nav className="bg-green-600 p-4">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-white text-2xl font-bold">Carbon Credit Trading Platform</h1>
            <div className="flex space-x-4">
              <Link to="/dashboard" className="text-white hover:underline">Dashboard</Link>
              <Link to="/trade" className="text-white hover:underline">Trade Credits</Link>
              <button 
                onClick={handleLogout} 
                className="bg-red-500 text-white px-3 py-1 rounded"
              >
                Logout
              </button>
            </div>
          </div>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" />} />
          <Route path="/dashboard" element={<Dashboard userAddress={userAddress} />} />
          <Route path="/trade" element={<TradeCarbonCredits userAddress={userAddress} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;