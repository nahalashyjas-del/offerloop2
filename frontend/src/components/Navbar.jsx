import React from 'react'

const Navbar = () => {
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
          
          {/* Home Button */}
          <button className="text-gray-600 font-medium hover:text-blue-600 transition duration-200">
            Home
          </button>

          {/* Profile Icon */}
          <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold cursor-pointer hover:bg-blue-700 transition duration-200">
            P
          </div>

          {/* Logout Button */}
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition duration-200">
            Logout
          </button>

        </div>
      </div>
    </>
  )
}

export default Navbar