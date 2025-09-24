import React from "react";
import "./Careers.css";

const openRoles = [
  { id: 1, title: "Salesforce Developer", location: "Chennai, India" },
  { id: 2, title: "Full Stack Web Developer", location: "Remote" },
  { id: 3, title: "Mobile App Developer", location: "Pune, India" },
  { id: 4, title: "Digital Marketing Specialist", location: "Remote" },
];

const Careers = () => {
  return (
    <section className="careers-container">
      <h2 className="careers-title">Careers at CodeOne Technologies</h2>

      {/* Open Roles Section */}
      <div className="open-roles">
        <h3>Open Roles</h3>
        <ul>
          {openRoles.map((role) => (
            <li key={role.id}>
              <span className="role-title">{role.title}</span>
              <span className="role-location">{role.location}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Why Work With Us Section */}
      <div className="why-work">
        <h3>Why Work With Us</h3>
        <p>
          At CodeOne Technologies, we value innovation, growth, and collaboration.
          Join a team of passionate professionals and work on cutting-edge projects
          in Salesforce, Web, Mobile, IT Staffing, and Digital Marketing domains.
        </p>
        <ul>
          <li>Work with industry experts</li>
          <li>Continuous learning and upskilling</li>
          <li>Flexible work environment</li>
          <li>Career growth opportunities</li>
        </ul>
      </div>

      {/* Apply Form Section */}
      <div className="apply-form">
        <h3>Apply Now</h3>
        <form>
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email Address" required />
          <input type="text" placeholder="Position Applying For" required />
          <input type="file" placeholder="Upload Resume" />
          <textarea placeholder="Cover Letter / Message"></textarea>
          <button type="submit">Submit Application</button>
        </form>
      </div>
    </section>
  );
};

export default Careers;
