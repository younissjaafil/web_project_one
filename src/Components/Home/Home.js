import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="content-container">
      {/* Hero Section */}
      <div className="hero-section">
        <h1>Empowering University Clubs, One Event at a Time</h1>
        <div className="cta-buttons">
          <Link to="/services" className="cta-button">
            Explore Club Services
          </Link>
          <Link to="/login" className="cta-button cta-button-dark">
            Club Admin Login
          </Link>
        </div>
      </div>

      {/* Why Use EventLiu Section */}
      <section className="why-section">
        <h2>Why Use EventLiu for Your Club?</h2>

        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">
              <i className="fas fa-calendar-check"></i>
            </div>
            <h3>Effortless Event Planning</h3>
            <p>
              Organize club fairs, hackathons, social nights, and more with
              streamlined tools and templates.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <i className="fas fa-user-friends"></i>
            </div>
            <h3>Collaboration Made Easy</h3>
            <p>
              Coordinate with team members, assign roles, and track tasks — all
              from one dashboard.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <i className="fas fa-graduation-cap"></i>
            </div>
            <h3>Built for Students</h3>
            <p>
              Designed with campus life in mind, our platform fits the needs and
              pace of active student clubs.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section">
        <h3>Start Your Next Club Event with Confidence</h3>
        <p>
          Join dozens of other campus organizations using EventLiu to deliver
          engaging, well-run student events.
        </p>
      </section>
    </div>
  );
}

export default Home;
