import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    // Clear all user credentials
    localStorage.removeItem("user");
    localStorage.removeItem("student");
    // Redirect to login
    navigate("/login");
  };

  const isCompanyPage = location.pathname === '/company';

  const togglePage = () => {
    if (isCompanyPage) {
      navigate("/home");
    } else {
      navigate("/company");
    }
  };

  return (
    <>
      {/* Top Bar */}
      <div className="bg-white shadow-md px-8 py-4 flex justify-between items-center">
        
        {/* Left Section - Logo */}
        <div className="text-2xl font-bold text-blue-600">
          Placement Tracker
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-6">
          
          {/* Navigation Toggle Button */}
          <button onClick={togglePage} className="text-gray-600 font-medium hover:text-blue-600 transition duration-200">
            {isCompanyPage ? "Switch to Dashboard" : "View Placement Offers"}
          </button>

          {/* Profile Icon */}
          <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold cursor-pointer hover:bg-blue-700 transition duration-200">
            P
          </div>

          {/* Logout Button */}
          <button 
            onClick={handleLogout}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition duration-200"
          >
            Logout
          </button>

        </div>
      </div>
    </>
  )
}

export default Navbar