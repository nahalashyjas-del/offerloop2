import React from "react";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      
      <div className="bg-white p-10 rounded-2xl shadow-lg w-80">
        
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">
          Placement Tracker System
        </h2>

        <input
          type="email"
          placeholder="Enter Email"
          className="w-full p-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <input
          type="password"
          placeholder="Enter Password"
          className="w-full p-2 mb-6 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <button
          className="w-full bg-blue-500 text-white p-2 rounded-lg font-semibold hover:bg-blue-600 transition duration-300"
        >
          Login
        </button>

      </div>
    </div>
  );
};

export default Login;