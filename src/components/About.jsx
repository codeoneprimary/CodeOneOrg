import React from "react";
import { FaCheckCircle, FaHome, FaChevronRight } from "react-icons/fa";
import "./About.css";

// Import images from your src/assets/images folder
import mainImage from "../assets/images/about11.png"; // replace path if needed
import overlayImage from "../assets/images/about12.png"; // replace with overlay image if different

// 🌟 Component: Header Section (Matching Image 1: About Us Banner)
const AboutHeader = () => (
  <div
    className="about-header-section-v2"
    // Update this with your actual banner image URL in public folder or import and use like below
    style={{ backgroundImage: "url('/path-to-your-banner-image.jpg')" }}
  >
    <div className="header-overlay"></div>
    <div className="header-content-v2">
      <h1 className="header-main-title-v2">About Us</h1>
      <div className="header-breadcrumb-v2">
        <FaHome style={{ marginRight: "5px" }} />
        CodeOne Technologies
        <FaChevronRight style={{ margin: "0 8px" }} /> About Us
      </div>
    </div>
  </div>
);

// 💻 Component: Image/Content Block (Matching Images 2 & 3: Ensuring Your Success & Feature List)
const AboutImageContent = () => (
  <section className="image-content-section light-bg">
    <div className="content-wrapper">
      <div className="image-column">
        <div className="main-image-box">
          {/* Use imported image */}
          <img
            src={mainImage}
            alt="Man working with digital interface and globe graphic"
            className="main-image"
          />
        </div>
        {/* Dotted pattern for design accent */}
        <div className="dotted-pattern"></div>
      </div>

      <div className="text-column">
        <p className="section-tag">WHO WE ARE</p>
        <h2 className="section-title">
          Ensuring Your Success
          <br />
          Why Choose CodeOne Technologies
        </h2>
        <p className="section-description">
          We’re not just another IT service provider. CodeOne Technologies was
          founded with a simple belief: technology and talent together drive
          transformation. From delivering next-gen digital solutions to
          connecting organizations with the right professionals, we act as a
          one-stop partner for growth.
        </p>

        {/* Feature List (Matching the checkbox layout) */}
        <div className="feature-list">
          <div className="feature-item">
            <FaCheckCircle className="check-icon" />
            <span>Technology Consultancy</span>
          </div>
          <div className="feature-item">
            <FaCheckCircle className="check-icon" />
            <span>Maintenance And Support</span>
          </div>
          <div className="feature-item">
            <FaCheckCircle className="check-icon" />
            <span>We Provide best services</span>
          </div>
          <div className="feature-item">
            <FaCheckCircle className="check-icon" />
            <span>Requirements Gathering</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

function About() {
  return (
    <div className="about-page-container">
      {/* 1. Header Section */}
      <AboutHeader />

      {/* 2. Main Image/Content Section */}
      <AboutImageContent />

      {/* 3. Placeholder for your other content */}
      <section className="about-section dark-bg">
        <div className="about-section-content">
          <h2>Your Partner in Technology & Talent</h2>
          <p>
            This section serves as a clean, simple content block that you can
            use for Mission, Vision, or any other introductory text.
          </p>
        </div>
      </section>
    </div>
  );
}

export default About;
