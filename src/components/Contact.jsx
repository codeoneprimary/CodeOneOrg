import React, { useState } from "react";
import "./Contact.css";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaRegClock,
  FaPaperPlane,
} from "react-icons/fa";

// Directly use Render URL
const API_BASE_URL = "https://codeone-contactservice.onrender.com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState(null);
  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.subject ||
      !formData.message
    ) {
      setStatus({
        success: false,
        message: "Please fill in all required fields.",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const sentTime = new Date().toISOString();

      const response = await fetch(`${API_BASE_URL}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...formData, sentTime }),
      });

      if (response.ok) {
        setShowSuccess(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
        setStatus(null);
        setTimeout(() => setShowSuccess(false), 3000);
      } else {
        const errorData = await response.json();
        setStatus({
          success: false,
          message: errorData.message || "Failed to send message.",
        });
      }
    } catch (error) {
      setStatus({
        success: false,
        message: "Error sending message: " + error.message,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-page-container">
      <section className="contact-header-section">
        <div className="header-overlay"></div>
        <div className="header-content-v2">
          <h1 className="header-main-title-v2">Contact Us</h1>
          <p className="header-breadcrumb-v2">Home &raquo; Contact Us</p>
        </div>
      </section>

      <section className="contact-section-container">
        <div className="contact-content-wrapper">
          <div className="contact-text-and-details">
            <p className="contact-us-tag">CONTACT US</p>
            <h1 className="main-title">
              Our Creative Design <br />
              Solutions Are For People, <br />
              Contact Our Office.
            </h1>

            <div className="office-details-grid">
              <div className="detail-item">
                <div className="icon-circle">
                  <FaPhoneAlt />
                </div>
                <div className="detail-info">
                  <p className="detail-label">Contact Phone</p>
                  <p className="detail-value">+918208171281</p>
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
                    Joyville Hadapsar Annexe T3 Building, 22nd Floor Shewalwadi
                    <br />
                    Hadapsar Annexe Pune – 412307 Maharashtra, India
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
                    Mon- Fri: 9.00 AM - 7.00 PM
                    <br />
                    Sat-Sun: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-side">
            <h2 className="form-title">Get In Touch</h2>
            <form className="contact-form" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="form-input"
                value={formData.name}
                onChange={handleChange}
                required
                disabled={isSubmitting}
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="form-input"
                value={formData.email}
                onChange={handleChange}
                required
                disabled={isSubmitting}
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                className="form-input"
                value={formData.phone}
                onChange={handleChange}
                disabled={isSubmitting}
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                className="form-input"
                value={formData.subject}
                onChange={handleChange}
                required
                disabled={isSubmitting}
              />
              <textarea
                name="message"
                placeholder="Your Message"
                className="form-textarea"
                value={formData.message}
                onChange={handleChange}
                required
                disabled={isSubmitting}
              />
              <button
                type="submit"
                className="submit-button"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    <FaPaperPlane className="send-icon" /> Send Message
                  </>
                )}
              </button>
            </form>

            {showSuccess && (
              <p
                style={{
                  marginTop: "10px",
                  color: "green",
                  fontWeight: "bold",
                  backgroundColor: "#e0ffe0",
                  padding: "10px",
                  borderRadius: "5px",
                }}
              >
                Message sent successfully!
              </p>
            )}
            {status && !status.success && (
              <p
                style={{ marginTop: "10px", color: "red", fontWeight: "bold" }}
              >
                {status.message}
              </p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
