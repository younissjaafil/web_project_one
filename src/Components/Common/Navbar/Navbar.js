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
          <Link to="/contact" id="contactUsPageNavLink" onClick={closeMenu}>
            Contact
          </Link>
        </li>
        <li>
          <Link to="/organizer" id="loginPageNavLink" onClick={closeMenu}>
            Organizer Event
          </Link>
        </li>
        <li>
          <Link to="/dashboard" id="dashboardPageNavLink" onClick={closeMenu}>
            My Dashboard
          </Link>
        </li>

        <li>
          <Link to="/admin" id="adminDashboardPageNavLink" onClick={closeMenu}>
            Admin Summary
          </Link>
        </li>
      </ul>
    </nav>
  );
}
export default Navbar;
