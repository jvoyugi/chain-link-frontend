import './App.css';
import Home from './landing/Home';
import AboutUs from "./about-us/AboutUs";
import Solutions from "./our-solutions/solutions";
import Contact from "./contact-us/ContactUs";
import React from "react";
import { Routes, BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
