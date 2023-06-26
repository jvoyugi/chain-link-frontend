import { BrowserRouter } from 'react-router-dom';
import './App.css';
import ContactUs from './contact-us/ContactUs';
import Nav from './common/Nav';
import Home from './landing/Home';
import About from "./contact-us/ContactUs";
import Solutions from "./our-solutions/solutions";
import Contact from "./contact-us/ContactUs";
import React from "react";
import { Routes,BrowserRouter as Router,Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Home />
    </BrowserRouter>
  );
}

export default App;
