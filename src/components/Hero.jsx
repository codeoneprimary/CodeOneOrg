import React from "react";
import { Link } from "react-router-dom"; // Import Link for routing
import "./Hero.css";

const Hero = () => {
  return (
    <>
      {/* -------------------- Top Slider/Hero Section -------------------- */}
      <section className="hero-container">
        <div className="hero-overlay"></div> {/* Dark overlay layer */}
        <div className="hero-content">
          <p className="hero-small-text">TECH TALENT TOGETHER</p>
          <h1 className="hero-title">
            ONE TEAM LIMITLESS INNOVATION
            <br />
          </h1>

          <div className="hero-buttons">
            <Link to="/contact">
              <button className="hero-cta-button">Contact us</button>
            </Link>
          </div>
        </div>
      </section>

      {/* -------------------- "Welcome To Creative & Innovative" Section -------------------- */}
      <section className="welcome-section-content">
        <h1 className="welcome-title-content">
          Welcome To Creative & Innovative
        </h1>
        <p className="welcome-text-content">
          your trusted partner in digital transformation. We believe innovation
          begins with imagination and thrives through collaboration. Our team
          specializes in delivering tailored solutions across Salesforce, web
          and mobile development, digital marketing, and IT staffing. We combine
          strategic thinking, technical expertise, and creative vision to help
          businesses thrive in today’s fast-paced world.
        </p>
        <p className="welcome-text-content">
          Whether you're a startup looking to make your mark or an enterprise
          seeking to scale and optimize, we’re here to turn your ideas into
          reality. Experience a partnership where creativity meets precision —
          and where your goals become our mission.
        </p>

        {/* -------------------- About Us Section (Two Columns) -------------------- */}
        <div className="about-us-section">
          <div className="about-content">
            <p className="about-us-tag">ABOUT US</p>
            <h2 className="about-headline">
              At CodeOne Technologies, we combine expertise
              <br /> in staffing, IT services, and digital solutions to
              <br /> help businesses scale faster and smarter. Whether you need
              a skilled workforce,
              <br />
              custom software, or a strong online presence, we’ve got you
              covered.
            </h2>

            <p className="about-subtext">
              Your business deserves the right people, the right tools, and the
              right technology
            </p>

            {/* Features Grid */}
            <div className="features-grid">
              <div className="feature-col">
                <p className="feature-title">Award Winning</p>
                <p className="feature-sub">Professional Staff</p>
              </div>
              <div className="feature-col">
                <p className="feature-title">24/7 Support</p>
                <p className="feature-sub">Fair Prices</p>
              </div>
            </div>

            {/* Contact Block */}
            <div className="contact-block">
              <div className="phone-icon-box">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.4 19.4 0 0 1-5.32-5.32 19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 3.08 2h3a2 2 0 0 1 2 1.73l.7 6.42a2 2 0 0 1-.54 1.9l-2.61 2.61A15.96 15.96 0 0 0 16 19.92l2.61-2.61a2 2 0 0 1 1.9-.54l6.42.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </div>
              <div className="phone-details">
                <p>Call to ask any question</p>
                <p className="phone-number">+918208171281</p>
              </div>
            </div>

            <button className="request-quote-button">Request A Quote</button>
          </div>

          {/* The Image Column */}
          <div className="about-image-container">
            {/* Image is handled via CSS background-image */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
