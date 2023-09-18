import React from "react";
import LoginForm from "./components/Auth/LoginForm";
import { Routes, Route } from "react-router-dom";
import DashBoard from "./pages/DashBoard";
import Department from "./pages/Department";
import Staff from "./pages/Staff";
import Leave from "./pages/Leave";
import LeaveType from "./pages/LeaveType";
import Layout from "./pages/Layout";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginForm />} />
      <Route path="/dashboard" element={<DashBoard />} />
      <Route path="/department" element={<Department />} />
      <Route path="/staff" element={<Staff />} />
      <Route path="/leave" element={<Leave />} />
      <Route path="/leave-type" element={<LeaveType />} />
      <Route path="/layout" element={<Layout />} />
    </Routes>
  );
};

export default App;
