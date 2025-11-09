import React from "react";
import "./Services.css";

export default function Services() {
  return (
    <>
      {/* <div id="homeServicesPage" className="page"> */}
      <h2>Services for Student Clubs & Societies</h2>
      <p>
        We provide essential tools and services tailored for university clubs to
        organize impactful, professional, and memorable campus events.
      </p>

      <div className="services-grid">
        <div className="service-card">
          <div className="service-icon">
            <i className="fas fa-calendar-alt"></i>
          </div>
          <h4>Club Event Planning</h4>
          <p>
            From orientation fairs to cultural nights, we help clubs plan and
            manage every detail of their event successfully.
          </p>
        </div>
        <div className="service-card">
          <div className="service-icon">
            <i className="fas fa-utensils"></i>
          </div>
          <h4>Student Catering</h4>
          <p>
            Affordable, student-friendly catering for workshops, gatherings, and
            major club events. Vegetarian and special diets supported.
          </p>
        </div>
        <div className="service-card">
          <div className="service-icon">
            <i className="fas fa-lightbulb"></i>
          </div>
          <h4>Venue Decoration</h4>
          <p>
            Transform classrooms and auditoriums into themed event spaces with
            creative, budget-conscious decor.
          </p>
        </div>
        <div className="service-card">
          <div className="service-icon">
            <i className="fas fa-microphone-alt"></i>
          </div>
          <h4>Speaker & Talent Booking</h4>
          <p>
            Book inspiring speakers, student DJs, or performers for your club’s
            panels, open mics, or gala nights.
          </p>
        </div>
        <div className="service-card">
          <div className="service-icon">
            <i className="fas fa-camera-retro"></i>
          </div>
          <h4>Media Coverage</h4>
          <p>
            Get your event captured by student photographers and videographers
            for yearbooks, social media, or club archives.
          </p>
        </div>
        <div className="service-card">
          <div className="service-icon">
            <i className="fas fa-bullhorn"></i>
          </div>
          <h4>Promotion & Outreach</h4>
          <p>
            We help you design flyers, promote events on campus platforms, and
            manage student RSVPs and engagement.
          </p>
        </div>
        <div className="service-card">
          <div className="service-icon">
            <i className="fas fa-hands-helping"></i>
          </div>
          <h4>Volunteer Coordination</h4>
          <p>
            Manage signups, assign tasks, and track volunteer hours with our
            event staffing tools.
          </p>
        </div>
        <div className="service-card">
          <div className="service-icon">
            <i className="fas fa-cogs"></i>
          </div>
          <h4>Logistics Support</h4>
          <p>
            On-site setup, tech checks, and equipment rental to ensure your club
            event runs smoothly from start to finish.
          </p>
        </div>
      </div>
      {/* </div> */}
    </>
  );
}
