import React, { useState } from "react";
import membersData from "../data/membersData";
import "./../styles/MarkAttendance.css"; // Ensure correct import

const MarkAttendance = () => {
  const [selectedDomain, setSelectedDomain] = useState("");
  const [attendance, setAttendance] = useState({});

  const handleDomainChange = (event) => {
    setSelectedDomain(event.target.value);
    setAttendance({});
  };

  const handleAttendanceChange = (memberId) => {
    setAttendance((prev) => ({
      ...prev,
      [memberId]: !prev[memberId],
    }));
  };

  const handleSubmit = () => {
    const presentMembers = Object.keys(attendance).filter((id) => attendance[id]);
    alert(`Attendance marked for: ${presentMembers.length} members`);
    console.log("Present Members:", presentMembers);
  };

  return (
    <div className="mark-attendance-container">
      <div className="attendance-box">
        <h1 className="attendance-title">Mark Attendance</h1>

        {/* Dropdown to Select Domain */}
        <select className="dropdown" value={selectedDomain} onChange={handleDomainChange}>
          <option value="">Select Domain</option>
          <option value="Web Development">Web Development</option>
          <option value="Data Science">Data Science</option>
          <option value="Cyber Security">Cyber Security</option>
        </select>

        {/* Member List */}
        {selectedDomain && (
          <div className="member-list">
            <h2 className="member-title">Members:</h2>
            <ul>
              {membersData[selectedDomain]?.map((member) => (
                <li key={member.id} className="member-item">
                  <span>{member.name}</span>
                  <input
                    type="checkbox"
                    checked={attendance[member.id] || false}
                    onChange={() => handleAttendanceChange(member.id)}
                  />
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Submit Button */}
        <button className="submit-btn" onClick={handleSubmit} disabled={!selectedDomain}>
          Submit Attendance
        </button>
      </div>
    </div>
  );
};

export default MarkAttendance;
