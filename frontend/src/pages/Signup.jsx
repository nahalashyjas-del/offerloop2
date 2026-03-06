import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignupPage = () => {

  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  const handleSignup = (e) => {
    e.preventDefault();
    alert("Signup Successful\nName: " + user.name);
  };

  const goToLogin = () => {
    navigate("/login");
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">

      <form
        onSubmit={handleSignup}
        className="bg-white p-8 rounded-lg w-80 shadow-lg"
      >

        <h2 className="text-center text-2xl font-bold mb-5">
          Signup
        </h2>

        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={user.name}
          onChange={handleChange}
          className="w-full p-2 mb-4 border rounded"
        />

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={user.email}
          onChange={handleChange}
          className="w-full p-2 mb-4 border rounded"
        />

        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={user.password}
          onChange={handleChange}
          className="w-full p-2 mb-5 border rounded"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
        >
          Sign Up
        </button>

        {/* Login Redirect Section */}

      

        <p className="text-center mt-4 text-sm text-gray-600">
  If you already have an account?{" "}
  <span
    onClick={goToLogin}
    className="text-blue-600 cursor-pointer font-semibold hover:underline"
  >
    Login
  </span>
</p>

      </form>

    </div>
  );
};

export default SignupPage;