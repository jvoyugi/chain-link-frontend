import './App.css';
import Home from './landing/Home';
import AboutUs from "./about-us/AboutUs";
import Solutions from "./our-solutions/solutions";
import Contact from "./contact-us/ContactUs";
import Login from './login/Login';
import Register from './register/Register';
import React from "react";
import { Routes, BrowserRouter as Router, Route } from "react-router-dom";
import Dashboard from "./portal/dashboard/Dashboard";
import ManualInput from "./portal/manualInput/ManualInput";
import Integration from "./portal/integration/Integration";

function App() {
  return (
    <>
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
        </Routes>
      </Router>
    </>
  );
}

export default App;
