import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";

const CompanyPage = () => {

  const [user, setUser] = useState(null);
  const [companies, setCompanies] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [showAddForm, setShowAddForm] = useState(false);

  const emptyCompany = {
    company_id: "",
    company_name: "",
    company_address: "",
    company_details: "TBD",
    hr_name: "",
    hr_email: "",
    hr_contact: "",
    company_website: "",
    industry_type: "IT",
    role: "",
    package: "",
    eligibility: "",
    min_cgpa: 0.0
  };

  const [newCompany, setNewCompany] = useState(emptyCompany);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      const storedStudent = localStorage.getItem("student");
      if (storedStudent) {
        setUser(JSON.parse(storedStudent));
      }
    }
  }, []);

  // Fetch from API
  const fetchCompanies = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/api/companies/");
      const data = await response.json();
      if (response.ok) {
        setCompanies(data);
      }
    } catch (error) {
      console.error("Failed to fetch companies:", error);
    }
  };

  useEffect(() => {
    fetchCompanies();
  }, []);

  const isAdmin = user?.role === "admin";
  const studentCgpa = parseFloat(user?.cgpa || 0);

  const handleChange = (e, index) => {
    const updatedCompanies = [...companies];
    updatedCompanies[index][e.target.name] = e.target.value;
    setCompanies(updatedCompanies);
  };

  const handleNewChange = (e) => {
    setNewCompany({ ...newCompany, [e.target.name]: e.target.value });
  };

  const handleEdit = (index) => {
    setEditIndex(index);
  };

  const handleSave = async (index, id) => {
    const companyData = companies[index];
    try {
      const response = await fetch(`http://127.0.0.1:8000/api/companies/update/${id}/`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(companyData)
      });
      if (response.ok) {
        alert("Company updated!");
        setEditIndex(null);
        fetchCompanies();
      } else {
        alert("Update failed");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (id) => {
    if(!window.confirm("Are you sure you want to delete this company?")) return;
    try {
      const response = await fetch(`http://127.0.0.1:8000/api/companies/delete/${id}/`, {
        method: "DELETE"
      });
      if (response.ok) {
        alert("Company deleted!");
        fetchCompanies();
      } else {
        alert("Delete failed");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleAddCompany = async () => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/api/companies/add/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newCompany)
      });
      if (response.ok) {
        alert("Company added!");
        setNewCompany(emptyCompany);
        setShowAddForm(false);
        fetchCompanies();
      } else {
        const errorData = await response.json();
        alert("Failed to add: " + JSON.stringify(errorData));
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 pb-8">
      <Navbar />
      
      <div className="p-8">
        <h1 className="text-4xl font-extrabold text-gray-800 text-center mb-8">
          Available Placement Offers
        </h1>

      {isAdmin && (
        <div className="flex justify-center mb-6">
          <button 
            onClick={() => setShowAddForm(!showAddForm)}
            className="bg-blue-600 text-white font-semibold px-6 py-2 rounded-full shadow hover:bg-blue-700 transition"
          >
            {showAddForm ? "Cancel Adding" : "+ Add New Company"}
          </button>
        </div>
      )}

      {showAddForm && isAdmin && (
        <div className="bg-white p-6 rounded-xl shadow-lg mb-8 max-w-2xl mx-auto border-t-4 border-blue-500">
          <h2 className="text-2xl font-bold mb-4">Add New Placement Offer</h2>
          <div className="grid grid-cols-2 gap-4">
            <input className="border p-2 rounded" name="company_id" placeholder="Company ID (Unique)" onChange={handleNewChange} value={newCompany.company_id} />
            <input className="border p-2 rounded" name="company_name" placeholder="Company Name" onChange={handleNewChange} value={newCompany.company_name} />
            <input className="border p-2 rounded" name="role" placeholder="Job Role" onChange={handleNewChange} value={newCompany.role} />
            <input className="border p-2 rounded" name="package" placeholder="Package / CTC" onChange={handleNewChange} value={newCompany.package} />
            <input className="border p-2 rounded" name="company_address" placeholder="Location" onChange={handleNewChange} value={newCompany.company_address} />
            <input className="border p-2 rounded" name="eligibility" placeholder="Eligibility" onChange={handleNewChange} value={newCompany.eligibility} />
            <input className="border p-2 rounded" type="number" step="0.1" name="min_cgpa" placeholder="Minimum CGPA" onChange={handleNewChange} value={newCompany.min_cgpa} />
            <input className="border p-2 rounded" name="hr_name" placeholder="HR Name" onChange={handleNewChange} value={newCompany.hr_name} />
            <input className="border p-2 rounded" name="hr_email" placeholder="HR Email" type="email" onChange={handleNewChange} value={newCompany.hr_email} />
            <input className="border p-2 rounded" name="hr_contact" placeholder="HR Contact" onChange={handleNewChange} value={newCompany.hr_contact} />
          </div>
          <button onClick={handleAddCompany} className="mt-6 w-full bg-green-500 text-white font-bold py-2 rounded hover:bg-green-600">
            Publish Offer
          </button>
        </div>
      )}

      <div className="flex flex-wrap gap-6 justify-center">
        {companies.filter(company => isAdmin || studentCgpa >= company.min_cgpa).map((company, index) => (
          <div
            key={company.id || index}
            className="bg-white p-6 rounded-2xl shadow-md w-full max-w-md border border-gray-100 hover:shadow-lg transition-shadow"
          >

            {editIndex === index ? (
              <div className="space-y-3">
                <input className="border p-2 w-full rounded" name="company_name" placeholder="Name" value={company.company_name} onChange={(e) => handleChange(e, index)} />
                <input className="border p-2 w-full rounded" name="role" placeholder="Role" value={company.role} onChange={(e) => handleChange(e, index)} />
                <input className="border p-2 w-full rounded" name="package" placeholder="Package" value={company.package} onChange={(e) => handleChange(e, index)} />
                <input className="border p-2 w-full rounded" name="company_address" placeholder="Location" value={company.company_address} onChange={(e) => handleChange(e, index)} />
                <input className="border p-2 w-full rounded" name="eligibility" placeholder="Eligibility" value={company.eligibility} onChange={(e) => handleChange(e, index)} />
                <input className="border p-2 w-full rounded" name="min_cgpa" type="number" step="0.1" placeholder="Min CGPA" value={company.min_cgpa} onChange={(e) => handleChange(e, index)} />
                
                <div className="flex gap-2">
                  <button onClick={() => handleSave(index, company.id)} className="flex-1 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">Save</button>
                  <button onClick={() => setEditIndex(null)} className="flex-1 bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500">Cancel</button>
                </div>
              </div>
            ) : (
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-1">{company.company_name}</h2>
                <div className="text-gray-600 space-y-1 mb-4">
                  <p><span className="font-semibold text-gray-700">Role:</span> {company.role || 'N/A'}</p>
                  <p><span className="font-semibold text-gray-700">Package:</span> {company.package || 'N/A'}</p>
                  <p><span className="font-semibold text-gray-700">Location:</span> {company.company_address}</p>
                  <p><span className="font-semibold text-gray-700">Eligibility:</span> {company.eligibility || 'N/A'}</p>
                  <p><span className="font-semibold text-gray-700">Min CGPA:</span> {company.min_cgpa}</p>
                </div>

                <div className="mt-4 pt-4 border-t flex space-x-3">
                  {isAdmin ? (
                    <>
                      <button onClick={() => handleEdit(index)} className="flex-1 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 font-semibold shadow-sm transition">
                        Edit
                      </button>
                      <button onClick={() => handleDelete(company.id)} className="flex-1 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 font-semibold shadow-sm transition">
                        Delete
                      </button>
                    </>
                  ) : (
                    <button className="w-full bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 font-bold shadow-md transition">
                      Apply Now
                    </button>
                  )}
                </div>
              </div>
            )}
          </div>
        ))}
        {companies.length === 0 && !isAdmin && (
          <p className="text-gray-500 text-lg">No placement offers available for your CGPA at the moment.</p>
        )}
      </div>
      </div>

    </div>
  );
};

export default CompanyPage;