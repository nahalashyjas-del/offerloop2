import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  // State
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("student");

  // Navigate to signup
  const goToSignup = () => {
    navigate("/signup");
  };

  // 🔥 Handle Login Function
  const handleLogin = async () => {
    const url = role === "admin" 
      ? "http://127.0.0.1:8000/api/students/admin/login/" 
      : "http://127.0.0.1:8000/api/students/login/";
      
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Login successful");

        // store user info
        localStorage.setItem("user", JSON.stringify(data));

        // redirect based on role
        if (data.role === "admin" || role === "admin") {
          navigate("/home");
        } else {
          navigate("/company");
        }
      } else {
        alert(data.error || "Login failed");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      
      <div className="bg-white p-10 rounded-2xl shadow-lg w-80">
        
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">
          Placement Tracker System
        </h2>

        {/* Role Selection Tabs */}
        <div className="flex justify-center mb-6 border-b border-gray-200">
          <button
            className={`flex-1 py-2 font-semibold ${role === 'student' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
            onClick={() => setRole("student")}
          >
            Student
          </button>
          <button
            className={`flex-1 py-2 font-semibold ${role === 'admin' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
            onClick={() => setRole("admin")}
          >
            Admin
          </button>
        </div>

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 mb-4 border border-gray-300 rounded-lg"
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 mb-6 border border-gray-300 rounded-lg"
        />

        <button
          onClick={handleLogin}
          className="w-full bg-blue-500 text-white p-2 rounded-lg font-semibold hover:bg-blue-600"
        >
          Login
        </button>

        <p className="text-center mt-4 text-sm text-gray-600">
          Create an account?{" "}
          <span
            onClick={goToSignup}
            className="text-blue-600 cursor-pointer font-semibold hover:underline"
          >
            Signup
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;