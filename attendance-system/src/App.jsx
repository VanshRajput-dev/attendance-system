import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import MarkAttendance from "./pages/MarkAttendance";  
import AddMember from "./pages/AddMember";  
import "./App.css";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/MarkAttendance" element={<MarkAttendance />} /> 
      <Route path="/AddMember" element={<AddMember />} />
    </Routes>
  );
};

export default App;
