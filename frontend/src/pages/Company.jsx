import React, { useState } from "react";

const CompanyPage = () => {

  const [companies, setCompanies] = useState([
    {
      name: "TCS",
      role: "Software Developer",
      package: "4 LPA",
      location: "Bangalore",
      eligibility: "BCA / B.Tech"
    },
    {
      name: "Infosys",
      role: "System Engineer",
      package: "3.6 LPA",
      location: "Hyderabad",
      eligibility: "BCA / MCA"
    },
    {
      name: "Wipro",
      role: "Project Engineer",
      package: "3.5 LPA",
      location: "Chennai",
      eligibility: "BCA / B.Sc"
    }
  ]);

  const [editIndex, setEditIndex] = useState(null);

  const handleChange = (e, index) => {
    const updatedCompanies = [...companies];
    updatedCompanies[index][e.target.name] = e.target.value;
    setCompanies(updatedCompanies);
  };

  const handleEdit = (index) => {
    setEditIndex(index);
  };

  const handleSave = () => {
    setEditIndex(null);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">

      <h1 className="text-3xl font-bold text-center mb-8">
        Available Companies
      </h1>

      {companies.map((company, index) => (
        <div
          key={index}
          className="bg-white p-6 rounded-lg shadow-md mb-6 max-w-md mx-auto"
        >

          {editIndex === index ? (
            <div className="space-y-3">

              <input
                className="border p-2 w-full rounded"
                name="name"
                value={company.name}
                onChange={(e) => handleChange(e, index)}
              />

              <input
                className="border p-2 w-full rounded"
                name="role"
                value={company.role}
                onChange={(e) => handleChange(e, index)}
              />

              <input
                className="border p-2 w-full rounded"
                name="package"
                value={company.package}
                onChange={(e) => handleChange(e, index)}
              />

              <input
                className="border p-2 w-full rounded"
                name="location"
                value={company.location}
                onChange={(e) => handleChange(e, index)}
              />

              <input
                className="border p-2 w-full rounded"
                name="eligibility"
                value={company.eligibility}
                onChange={(e) => handleChange(e, index)}
              />

              <button
                onClick={handleSave}
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
              >
                Save
              </button>

            </div>
          ) : (
            <div>

              <h2 className="text-xl font-semibold mb-2">{company.name}</h2>
              <p>Role: {company.role}</p>
              <p>Package: {company.package}</p>
              <p>Location: {company.location}</p>
              <p>Eligibility: {company.eligibility}</p>

              <div className="mt-4 space-x-3">

                <button
                  onClick={() => handleEdit(index)}
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                  Edit
                </button>

                <button className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600">
                  Apply
                </button>

              </div>

            </div>
          )}

        </div>
      ))}

    </div>
  );
};

export default CompanyPage;