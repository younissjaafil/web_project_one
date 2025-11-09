import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">
          Event<span className="highlight">Liu</span>
        </Link>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "nav-menu active" : "nav-menu"}>
        <li>
          <Link to="/" id="homePageNavLink" onClick={closeMenu}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/services" id="homeServicesPageNavLink" onClick={closeMenu}>
            Services
          </Link>
        </li>
        <li>
          <Link to="/events" id="eventsPageNavLink" onClick={closeMenu}>
            Events
          </Link>
        </li>

        <li>
          <Link to="/policy" id="policyPageNavLink" onClick={closeMenu}>
            Policy
          </Link>
        </li>
        <li>
          <Link to="/contact" id="contactUsPageNavLink" onClick={closeMenu}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
