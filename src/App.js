import './App.css';
import Home from './landing/Home';
import About from "./contact-us/ContactUs";
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
          <Route path="/about" element={<About />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
