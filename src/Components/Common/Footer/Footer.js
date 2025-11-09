import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p>
        &copy; <span id="currentYear"></span> EventLiu. All Rights Reserved.
      </p>
      <p className="footer-links">
        <Link to="/">Home</Link>
        {" | "}
        <Link to="/services">Services</Link>
        {" | "}
        <Link to="/events">Events</Link>
        {" | "}
        <Link to="/contact">Contact</Link>
        {" | "}
        <Link to="/policy">Privacy Policy</Link>
        {" | "}
      </p>
    </footer>
  );
}

export default Footer;
