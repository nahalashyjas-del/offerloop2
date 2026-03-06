import React, { useState } from "react";

const ProfilePage = () => {

  const [profile, setProfile] = useState({
    name: "Nahala",
    course: "BCA",
    college: "ABC College",
    email: "nahala@email.com",
    phone: "9876543210",
    skills: "React, JavaScript, HTML, CSS"
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value
    });
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
    console.log(profile); // later send to backend
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">

      <div className="bg-white shadow-lg rounded-xl p-8 w-[400px]">

        <h1 className="text-2xl font-bold text-center text-blue-600 mb-6">
          Student Profile
        </h1>

        <div className="space-y-4">

          {/* Name */}
          <div className="flex justify-between items-center">
            <span className="font-semibold">Name</span>
            {isEditing ? (
              <input
                name="name"
                value={profile.name}
                onChange={handleChange}
                className="border px-2 py-1 rounded"
              />
            ) : (
              <span>{profile.name}</span>
            )}
          </div>

          {/* Course */}
          <div className="flex justify-between items-center">
            <span className="font-semibold">Course</span>
            {isEditing ? (
              <input
                name="course"
                value={profile.course}
                onChange={handleChange}
                className="border px-2 py-1 rounded"
              />
            ) : (
              <span>{profile.course}</span>
            )}
          </div>

          {/* College */}
          <div className="flex justify-between items-center">
            <span className="font-semibold">College</span>
            {isEditing ? (
              <input
                name="college"
                value={profile.college}
                onChange={handleChange}
                className="border px-2 py-1 rounded"
              />
            ) : (
              <span>{profile.college}</span>
            )}
          </div>

          {/* Email */}
          <div className="flex justify-between items-center">
            <span className="font-semibold">Email</span>
            {isEditing ? (
              <input
                name="email"
                value={profile.email}
                onChange={handleChange}
                className="border px-2 py-1 rounded"
              />
            ) : (
              <span>{profile.email}</span>
            )}
          </div>

          {/* Phone */}
          <div className="flex justify-between items-center">
            <span className="font-semibold">Phone</span>
            {isEditing ? (
              <input
                name="phone"
                value={profile.phone}
                onChange={handleChange}
                className="border px-2 py-1 rounded"
              />
            ) : (
              <span>{profile.phone}</span>
            )}
          </div>

          {/* Skills */}
          <div className="flex justify-between items-center">
            <span className="font-semibold">Skills</span>
            {isEditing ? (
              <input
                name="skills"
                value={profile.skills}
                onChange={handleChange}
                className="border px-2 py-1 rounded"
              />
            ) : (
              <span>{profile.skills}</span>
            )}
          </div>

        </div>

        {isEditing ? (
          <button
            onClick={handleSave}
            className="mt-6 w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg"
          >
            Save
          </button>
        ) : (
          <button
            onClick={handleEdit}
            className="mt-6 w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg"
          >
            Edit Profile
          </button>
        )}

      </div>

    </div>
  );
};

export default ProfilePage;