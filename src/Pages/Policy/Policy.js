import React from "react";
import "./Policy.css";

function Policy() {
  return (
    <div className="policy">
      <h1>Platform Usage & Privacy Policy</h1>
      <p className="policy-intro">
        Welcome to EventLiu – the official club events platform for university
        organizations. Please read the following policy carefully to understand
        how we ensure safe, transparent, and responsible use of our services.
      </p>

      <div className="policy-content">
        <section className="policy-section">
          <h2>1. Club Eligibility</h2>
          <p>
            Only officially registered university clubs or student organizations
            are allowed to create and manage events on this platform.
            Unauthorized use is prohibited.
          </p>
        </section>

        <section className="policy-section">
          <h2>2. Code of Conduct</h2>
          <p>
            Clubs must ensure that their events align with university values.
            Any event containing discriminatory, offensive, or illegal content
            will be removed immediately and may result in disciplinary action.
          </p>
        </section>

        <section className="policy-section">
          <h2>3. Data Privacy</h2>
          <p>
            We collect basic information such as names, emails, and event
            preferences solely to improve the platform experience. Data is never
            shared with third parties.
          </p>
        </section>

        <section className="policy-section">
          <h2>4. Media Usage</h2>
          <p>
            Photos or videos taken during club events may be used in university
            promotional content unless explicitly opted out by the club during
            event creation.
          </p>
        </section>

        <section className="policy-section">
          <h2>5. Support & Inquiries</h2>
          <p>
            For questions, complaints, or feedback, please contact the student
            affairs office or use your university club email to reach us at{" "}
            <a href="mailto:support@eventLiu.edu">support@eventLiu.edu</a>.
          </p>
        </section>

        <div className="policy-footer">
          <p>
            By using this platform, you agree to abide by these terms and
            represent your club with integrity.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Policy;
