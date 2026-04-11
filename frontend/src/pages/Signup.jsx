import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignupPage = () => {

  const navigate = useNavigate();

  const [user, setUser] = useState({
  name: "",
  usn: "",
  email: "",
  password: "",
  contact_number: "",
  address: "",
  dob: "",
  cgpa: "",
  education: "",
  career_preference: "",
  expected_ctc: ""
});

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  const handleSignup = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch("http://127.0.0.1:8000/api/students/signup/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    const data = await response.json();

    if (response.ok) {
      alert("Signup Successful ✅");

      // Redirect to login page
      navigate("/login");
    } else {
      console.log(data);
      alert("Signup Failed ❌");
    }
  } catch (error) {
    console.error(error);
    alert("Error connecting to server");
  }
};

  const goToLogin = () => {
    navigate("/login");
  };

  return (
<div className="min-h-screen bg-gray-100 flex justify-center py-10">

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

        <input
          type="number"
          name="cgpa"
          placeholder="Enter cgpa"
          value={user.cgpa}
          onChange={handleChange}
          className="w-full p-2 mb-5 border rounded"
        />

        <input
  type="text"
  name="usn"
  placeholder="Enter USN"
  value={user.usn}
  onChange={handleChange}
  className="w-full p-2 mb-4 border rounded"
/>

<input
  type="text"
  name="contact_number"
  placeholder="Enter Contact Number"
  value={user.contact_number}
  onChange={handleChange}
  className="w-full p-2 mb-4 border rounded"
/>

<input
  type="text"
  name="address"
  placeholder="Enter Address"
  value={user.address}
  onChange={handleChange}
  className="w-full p-2 mb-4 border rounded"
/>

<input
  type="date"
  name="dob"
  value={user.dob}
  onChange={handleChange}
  className="w-full p-2 mb-4 border rounded"
/>

<input
  type="text"
  name="education"
  placeholder="Enter Education"
  value={user.education}
  onChange={handleChange}
  className="w-full p-2 mb-4 border rounded"
/>

<input
  type="text"
  name="career_preference"
  placeholder="Career Preference"
  value={user.career_preference}
  onChange={handleChange}
  className="w-full p-2 mb-4 border rounded"
/>

<input
  type="number"
  name="expected_ctc"
  placeholder="Expected CTC"
  value={user.expected_ctc}
  onChange={handleChange}
  className="w-full p-2 mb-4 border rounded"
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