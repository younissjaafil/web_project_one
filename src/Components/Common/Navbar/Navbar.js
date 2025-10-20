import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">
          Event<span className="highlight">Liu</span>
        </Link>
      </div>
      <ul>
        <li>
          <Link to="/" id="homePageNavLink">
            Home
          </Link>
        </li>
        <li>
          <Link to="/services" id="homeServicesPageNavLink">
            Services
          </Link>
        </li>
        <li>
          <Link to="/policy" id="contactUsPageNavLink">
            Policy
          </Link>
        </li>
        <li>
          <Link to="/organizer" id="loginPageNavLink">
            Organizer Event
          </Link>
        </li>
        <li>
          <Link to="/dashboard" id="dashboardPageNavLink">
            My Dashboard
          </Link>
        </li>

        <li>
          <Link to="/admin" id="adminDashboardPageNavLink">
            Admin Summary
          </Link>
        </li>
      </ul>
    </nav>
  );
}
export default Navbar;
