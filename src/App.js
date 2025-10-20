import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Common/Navbar/Navbar.js";
import Home from "./Components/Home/Home.js";
import Footer from "./Components/Common/Footer/Footer.js";
import "./App.css";
function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}
export default App;
