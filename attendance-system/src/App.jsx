import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import MarkAttendance from "./pages/MarkAttendance"; // Import MarkAttendance page
import "./App.css";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/MarkAttendance" element={<MarkAttendance />} /> 
    </Routes>
  );
};

export default App;
