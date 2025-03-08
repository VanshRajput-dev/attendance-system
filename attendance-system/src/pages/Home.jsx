import React from "react";
import { useNavigate } from "react-router-dom";
import "./../styles/Home.css"; // Import CSS

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h1>Attendance Marking System</h1>
      <div className="button-group">
        <button onClick={() => navigate("/MarkAttendance")}>
          Mark Attendance
        </button>
        <button onClick={() => navigate("/AddMember")}>Add Member</button>
      </div>
    </div>
  );
};

export default HomePage;
