import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p>
        &copy; <span id="currentYear"></span> EventHorizon Pro. All Rights
        Reserved.
      </p>
      <p className="footer-links">
        <Link to="/">Home</Link>
        {" | "}
        <Link to="/services">Services</Link>
        {" | "}
        <Link to="/contact">Contact</Link>
        {" | "}
        <Link to="/privacy">Contact</Link>
        {" | "}
        <Link to="/terms">Terms of Service</Link>
        {" | "}
        <Link to="/faq">FAQ</Link>
        {" | "}
        <Link to="/careers">Careers</Link>
      </p>
    </footer>
  );
}

export default Footer;
