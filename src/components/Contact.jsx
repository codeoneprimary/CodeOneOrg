import React from "react";
import "./Contact.css";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaRegClock,
  FaPaperPlane,
} from "react-icons/fa";

const Contact = () => {
  return (
    <div className="contact-section-container">
      <div className="contact-content-wrapper">
        <div className="contact-text-and-details">
          {/* Main Title Section */}
          <p className="contact-us-tag">CONTACT US</p>
          <h1 className="main-title">
            Our Creative Design
            <br />
            Solutions Are For People,
            <br />
            Contact Our Office.
          </h1>

          {/* Office Details Section */}
          <div className="office-details-grid">
            <div className="detail-item">
              <div className="icon-circle">
                <FaPhoneAlt />
              </div>
              <div className="detail-info">
                <p className="detail-label">Contact Phone</p>
                <p className="detail-value">+55 (9900) 666 22</p>
              </div>
            </div>

            <div className="detail-item">
              <div className="icon-circle">
                <FaEnvelope />
              </div>
              <div className="detail-info">
                <p className="detail-label">Contact Mail</p>
                <p className="detail-value">codeoneprimary@gmail.com</p>
              </div>
            </div>

            <div className="detail-item">
              <div className="icon-circle">
                <FaMapMarkerAlt />
              </div>
              <div className="detail-info">
                <p className="detail-label">Contact Location</p>
                <p className="detail-value multi-line">
                  18/2, Topkhana Road, Australia.
                  <br />
                  27 Division St, New York, USA
                </p>
              </div>
            </div>

            <div className="detail-item">
              <div className="icon-circle">
                <FaRegClock />
              </div>
              <div className="detail-info">
                <p className="detail-label">Office Time</p>
                <p className="detail-value multi-line">
                  Mon- Fri: 7.00 - 22.00
                  <br />
                  St-sun: 9.00 - 20.00
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Get In Touch / Form Section */}
        <div className="contact-form-side">
          <h2 className="form-title">Get In Touch</h2>
          <form className="contact-form">
            <input type="text" placeholder="Your Name" className="form-input" />
            <input
              type="email"
              placeholder="Your Email"
              className="form-input"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="form-input"
            />
            <textarea
              placeholder="Your Message"
              className="form-textarea"
            ></textarea>
            <button type="submit" className="submit-button">
              <FaPaperPlane className="send-icon" /> Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
