import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Common/Navbar/Navbar";
import Footer from "./Components/Common/Footer/Footer";
import Home from "./Pages/Home/Home";
import Events from "./Pages/Events/Events";
import Services from "./Pages/Services/Services";
import Contact from "./Pages/Contact/Contract";
import Policy from "./Pages/Policy/Policy";
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/policy" element={<Policy />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
