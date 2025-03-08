import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./../styles/Login.css"; // Import CSS file

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/home"); // Redirect to home after login
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Welcome Leader</h2>
        <p>Please enter your details</p>

        <form onSubmit={handleSubmit}>
          <label>Email address</label>
          <input type="email" placeholder="Enter your email" required />

          <label>Password</label>
          <input type="password" placeholder="Enter your password" required />

          <button type="submit" className="login-btn">Sign in</button>

           
        </form>

      
      </div>
    </div>
  );
};

export default Login;
