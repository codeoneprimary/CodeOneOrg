import React, { useState } from "react";
import axios from "axios";
import {
  FaHome,
  FaChevronRight,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";
import "./Career.css";
import careerImage from "../assets/images/carrer1.png";

// 🌟 Header Section
const CareerHeader = () => (
  <div
    className="career-header-section"
    style={{ backgroundImage: "url('/path-to-your-career-banner-image.jpg')" }}
  >
    <div className="header-overlay"></div>
    <div className="header-content-v2">
      <h1 className="header-main-title-v2">Join Our Team</h1>
      <div className="header-breadcrumb-v2">
        <FaHome style={{ marginRight: "5px" }} /> CodeOne Technologies
        <FaChevronRight style={{ margin: "0 8px" }} /> Careers
      </div>
    </div>
  </div>
);

// 💻 Job Intro Section
const JobIntroSection = () => (
  <section className="job-intro-section light-bg">
    <div className="content-wrapper">
      <div className="intro-text-column">
        <p className="section-tag">OPPORTUNITIES</p>
        <h2 className="section-title">
          Discover a career where passion meets purpose.
        </h2>
        <p className="section-description">
          At CodeOne Technologies, we combine expertise in staffing, IT
          services, and digital solutions to help businesses scale faster and
          smarter. Whether you need a skilled workforce, custom software, or a
          strong online presence, we’ve got you covered.
        </p>

        <div className="job-list-container">
          <h3 className="list-title">Current Openings:</h3>
          <ul className="job-list">
            <li>Senior React Developer (Remote)</li>
            <li>Mobile App Developer (On-site)</li>
            <li>Cybersecurity Analyst (On-site)</li>
            <li>Salesforce Dev (On-site)</li>
          </ul>
        </div>
      </div>

      <div className="intro-image-column">
        <img
          src={careerImage}
          alt="Team collaboration and success"
          className="career-intro-image"
        />
      </div>
    </div>
  </section>
);

// 📝 Career Application Form
const CareerFormSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    message: "",
  });

  const [resumeFile, setResumeFile] = useState(null);
  const [loading, setLoading] = useState(false); // ⬅ Loading state

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setResumeFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!resumeFile) {
      alert("Please select a resume file.");
      return;
    }

    const formPayload = new FormData();
    formPayload.append("fullName", formData.name);
    formPayload.append("email", formData.email);
    formPayload.append("phoneNumber", formData.phone);
    formPayload.append("positionApplyingFor", formData.position);
    formPayload.append("coverLetter", formData.message);
    formPayload.append("resume", resumeFile);

    try {
      setLoading(true); // ⬅ Show spinner
      await axios.post("http://localhost:8082/api/career/apply", formPayload, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      alert("Application submitted successfully!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        position: "",
        message: "",
      });
      setResumeFile(null);
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to submit application. Please try again.");
    } finally {
      setLoading(false); // ⬅ Hide spinner
    }
  };

  return (
    <section className="career-form-section dark-bg">
      <div className="form-content-wrapper">
        <div className="contact-info">
          <p className="section-tag">APPLY NOW</p>
          <h2 className="section-title">Ready for Your Next Challenge?</h2>
          <p className="section-description">
            Fill out the form to apply for any of our open positions. We look
            forward to reviewing your application!
          </p>
          <div className="contact-details">
            <p>
              <FaMapMarkerAlt /> Joyville Hadapsar Annexe
            </p>
            <p>
              <FaEnvelope /> codeoneprimary@gmail.com
            </p>
            <p>
              <FaPhone /> (555) 123-4567
            </p>
          </div>
        </div>

        <form className="application-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="position"
              placeholder="Position Applying For"
              value={formData.position}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <textarea
              name="message"
              placeholder="Briefly tell us why you're a great fit..."
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group file-upload">
            <label>Upload Resume (PDF/DOCX):</label>
            <input
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={handleFileChange}
              required
            />
          </div>
          <button
            type="submit"
            className="submit-button"
            disabled={loading} // ⬅ Disable while loading
          >
            {loading ? "Uploading..." : "Submit Application"}{" "}
          </button>
        </form>
      </div>
    </section>
  );
};

function Career() {
  return (
    <div className="career-page-container">
      <CareerHeader />
      <JobIntroSection />
      <CareerFormSection />
    </div>
  );
}

export default Career;
