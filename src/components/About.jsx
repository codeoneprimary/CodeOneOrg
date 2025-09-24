import React, { useState } from 'react';
import './About.css';

// Reusable Accordion Component
const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="accordion-item">
      <button className="accordion-header" onClick={() => setIsOpen(!isOpen)}>
        <span className="accordion-icon">{isOpen ? '−' : '+'}</span>
        <h5 className="accordion-title">{title}</h5>
      </button>
      {isOpen && <div className="accordion-content">{content}</div>}
    </div>
  );
};

function About() {
  return (
    <div className="about-page-container">
      {/* Header Section */}
      <div className="about-header-section">
        <h1>About Us</h1>
        <p>CodeOne Technologies > ABOUT US</p>
      </div>

      {/* Main Content Sections */}
      <section className="about-section dark-bg">
        <div className="about-section-content">
          <h2>Your Partner in Technology & Talent</h2>
          <p>
            At **CodeOne Technologies**, we believe in the power of technology to transform businesses and careers. We are a leading IT services and consulting provider specializing in **Salesforce staffing and consulting, web development, and cybersecurity**. Our mission is to deliver innovative solutions and top-tier talent that empower our clients to achieve their goals.
          </p>
        </div>
      </section>

      <section className="about-section light-bg">
        <div className="about-section-content">
          <h2>Salesforce Staffing & Consulting</h2>
          <p>
            With years of experience in the Salesforce ecosystem, our dedicated team of recruitment specialists has a deep understanding of the platform. We connect businesses with exceptional Salesforce professionals, from **Developers and Administrators to Architects and Project Managers**. Whether you need to build a new team, fill a critical role, or find a short-term consultant, we provide the talent you need to succeed.
          </p>
        </div>
      </section>

      <section className="about-section dark-bg">
        <div className="about-section-content">
          <h2>Expert Web Development</h2>
          <p>
            We don't just build websites; we create modern, responsive, and high-performing digital experiences. Our web development team uses cutting-edge technologies like **React, Angular, and Vue.js** to craft custom solutions tailored to your business needs. From e-commerce platforms to complex web applications, we focus on clean code, seamless user experience, and scalable architecture.
          </p>
        </div>
      </section>

      <section className="about-section light-bg">
        <div className="about-section-content">
          <h2>Comprehensive Cybersecurity Services</h2>
          <p>
            In today's digital landscape, security is paramount. **CodeOne Technologies** offers robust cybersecurity solutions to protect your critical assets. Our experts provide services like **threat detection and prevention, security audits, and compliance planning**. We help businesses identify vulnerabilities and implement proactive strategies to safeguard their data and maintain a secure digital environment.
          </p>
        </div>
      </section>

      <section className="about-image-content-section">
        <div className="about-text-content">
          <div className="text-block">
            <h3>Why Choose CodeOne Technologies?</h3>
            <p>
              We are committed to delivering excellence through our tailored approach. We take the time to understand your unique challenges and provide flexible, professional solutions. Our extensive network of skilled professionals, combined with our in-depth market knowledge, ensures you receive the highest quality of service and talent.
            </p>
          </div>
        </div>
      </section>

      {/* Accordion/FAQ Section */}
      <section className="about-accordion-section">
        <div className="accordion-wrapper">
          <Accordion
            title="What types of Salesforce roles do you staff?"
            content="We staff a wide range of Salesforce roles, including Salesforce Administrators, Developers, Business Analysts, Solution Architects, Technical Architects, and Project Managers."
          />
          <Accordion
            title="What technologies do you use for web development?"
            content="Our team is skilled in a variety of modern technologies, including JavaScript frameworks like React, Angular, and Vue.js, as well as Node.js, and various databases."
          />
          <Accordion
            title="What cybersecurity services do you offer?"
            content="We offer a full suite of cybersecurity services, including security assessments, vulnerability testing, threat detection and response, and security policy development."
          />
          <Accordion
            title="How is CodeOne Technologies different from other tech companies?"
            content="Our unique blend of top-tier staffing, specialized development, and dedicated cybersecurity expertise sets us apart. We offer a holistic approach to your technology needs, ensuring you have the right people and the right solutions to succeed."
          />
        </div>
      </section>
    </div>
  );
}

export default About;