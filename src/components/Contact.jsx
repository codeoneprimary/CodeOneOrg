 import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page-container">
      {/* Header Section */}
      <div className="contact-header-image">
        <div className="contact-header-overlay">
          <h1 className="header-title">GET IN TOUCH</h1>
          <p className="header-subtitle">We're ready to listen. What would you like to discuss?</p>
        </div>
      </div>

      {/* Contact Form Section */}
      <section className="contact-form-section">
        <div className="contact-form-title-container">
          <div className="contact-form-line"></div>
          <h2 className="contact-form-title">CONTACT US</h2>
        </div>
        <h2 className="contact-form-subtitle">Don't Hesitate To<br />Contact Us</h2>
        <form className="contact-form">
          <div className="form-row">
            <div className="form-group">
              <input type="text" placeholder="Full Name Here" className="form-input" />
              <i className="form-icon">👤</i>
            </div>
            <div className="form-group">
              <input type="email" placeholder="Email Here" className="form-input" />
              <i className="form-icon">✉️</i>
            </div>
            <div className="form-group">
              <select className="form-select">
                <option value="" disabled selected>Subject</option>
                <option value="general">General Inquiry</option>
                <option value="support">Support</option>
                <option value="feedback">Feedback</option>
              </select>
              <i className="form-icon-arrow">⌄</i>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group full-width">
              <textarea placeholder="Write Message" className="form-textarea"></textarea>
              <i className="form-icon-edit">✎</i>
            </div>
          </div>
          <button type="submit" className="submit-button">SEND MESSAGE</button>
        </form>
      </section>
    </div>
  );
};

export default Contact;