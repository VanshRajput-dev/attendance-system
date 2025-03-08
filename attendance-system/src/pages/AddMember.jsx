import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import membersData from "../data/membersData";
import "./../styles/AddMember.css";

const AddMember = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    department: "",
    regNumber: "",
    collegeEmail: "",
    domain: "",
    role: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, department, regNumber, collegeEmail, domain, role } =
      formData;

    if (
      !name ||
      !department ||
      !regNumber ||
      !collegeEmail ||
      !domain ||
      !role
    ) {
      alert("Please fill out all fields!");
      return;
    }

    const newMember = { id: Date.now(), ...formData };

    if (!membersData[domain]) {
      membersData[domain] = [];
    }
    membersData[domain].push(newMember);

    alert(`${name} has been added to ${domain}!`);
    navigate("/");
  };

  return (
    <div className="add-member-container">
      <div className="add-member-box">
        <h1 className="add-member-title">Add New Member</h1>

        <form className="add-member-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Enter Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="department"
            placeholder="Enter Department"
            value={formData.department}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="regNumber"
            placeholder="Enter Registration Number"
            value={formData.regNumber}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="collegeEmail"
            placeholder="Enter College Email"
            value={formData.collegeEmail}
            onChange={handleChange}
            required
          />

<select 
  name="domain" 
  value={formData.domain} 
  onChange={handleChange} 
  required 
  className="input-field"
>
  <option value="">Select Domain</option>
  <option value="Web Development">Web Development</option>
  <option value="Corporate">Corporate</option>
  <option value="R&D">R&D</option>
  <option value="Creatives">Creatives</option>
</select>


          <input
            type="text"
            name="role"
            placeholder="Enter Role (e.g., Member, Lead, Coordinator)"
            value={formData.role}
            onChange={handleChange}
            required
          />

          <button type="submit" className="add-member-btn">
            Add Member
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddMember;
