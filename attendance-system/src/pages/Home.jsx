import { useNavigate } from "react-router-dom";
import "../styles/Home.css";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <h1>Attendance System</h1>
      <div className="button-group">
        <button onClick={() => navigate("/attendance")}>Mark Attendance</button>
        <button onClick={() => navigate("/add-member")}>Add New Member</button>
      </div>
    </div>
  );
};

export default Home;
