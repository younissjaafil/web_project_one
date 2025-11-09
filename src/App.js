import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Common/Navbar/Navbar.js";
import Home from "./Pages/Home/Home.js";
import Events from "./Pages/Events/Events.js";
import Services from "./Pages/Services/Services.js";
import Contact from "./Pages/Contact/Contract.js";
import Policy from "./Pages/Policy/Policy.js";
import Footer from "./Components/Common/Footer/Footer.js";
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
