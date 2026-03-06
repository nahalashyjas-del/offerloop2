import React from "react";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      
      <Navbar/>

      {/* Welcome Section */}
      <div className="p-8">
        <h2 className="text-3xl font-bold text-gray-700 mb-2">
          Welcome to Placement Dashboard
        </h2>
        <p className="text-gray-500 mb-8">
          Manage students, companies, and placement records easily.
        </p>

        {/* Dashboard Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          
          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition">
            <h3 className="text-lg font-semibold text-gray-600">
              Total Students
            </h3>
            <p className="text-3xl font-bold text-blue-600 mt-2">120</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition">
            <h3 className="text-lg font-semibold text-gray-600">
              Companies Visited
            </h3>
            <p className="text-3xl font-bold text-green-600 mt-2">35</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition">
            <h3 className="text-lg font-semibold text-gray-600">
              Students Placed
            </h3>
            <p className="text-3xl font-bold text-purple-600 mt-2">85</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Home;
