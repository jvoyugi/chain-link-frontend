import React from "react";
import { Routes, BrowserRouter as Router, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import './App.css';
import Home from './landing/Home';
import AboutUs from "./about-us/AboutUs";
import Solutions from "./our-solutions/solutions";
import Contact from "./contact-us/ContactUs";
import Login from './login/Login';
import Register from './user-management/register/Register';
import Dashboard from "./portal/dashboard/Dashboard";
import ManualInput from "./portal/manualInput/ManualInput";
import Integration from "./portal/integration/Integration";
import UpdateUser from './user-management/update/UpdateUser';
import Inventory from "./portal/inventory/Inventory";

function App() {
  return (
    <>
      <ToastContainer />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<Register />} />
          <Route path="/portal/dashboard" element={<Dashboard />} />
          <Route path="/portal/business" element={<Integration />} />
          <Route path="/portal/inputs" element={<ManualInput />} />
          <Route path="/account" element={<UpdateUser/>} />
          <Route path="/inventory" element={<Inventory />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
