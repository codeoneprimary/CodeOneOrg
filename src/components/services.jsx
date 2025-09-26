import React from "react";

// Component for a single service card
const ServiceCard = ({ icon, title, description }) => (
  <div className="service-card">
    <div className="icon-box">{icon}</div>
    <h3 className="card-title">{title}</h3>
    <p className="card-description">{description}</p>
  </div>
);

// Component for the new header section
const ServicesHeader = () => {
  // Replaced react-icons with inline SVGs
  const HomeIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      viewBox="0 0 16 16"
      style={{ marginRight: "5px" }}
    >
      <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L8.707 1.5ZM14.5 4.5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .5-.5h2a.5.5 0 0 0-.5.5v3.5a.5.5 0 0 0 1 0V5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v3.5a.5.5 0 0 0 1 0V5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-7A.5.5 0 0 1 4.5 4.5h2z" />
    </svg>
  );
  const ChevronRightIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      viewBox="0 0 16 16"
      style={{ margin: "0 8px" }}
    >
      <path d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
    </svg>
  );

  return (
    <div
      className="services-header-section"
      style={{
        backgroundImage:
          "url('https://via.placeholder.com/1920x400/0033aa/ffffff?text=Services+Banner')",
      }}
    >
      <div className="header-overlay"></div>
      <div className="header-content-v2">
        <h1 className="header-main-title-v2">Our Services</h1>
        <div className="header-breadcrumb-v2">
          <HomeIcon /> CodeOne Technologies
          <ChevronRightIcon /> Services
        </div>
      </div>
    </div>
  );
};

const Services = () => {
  // SVG representations for the new, relevant icons:
  const icons = {
    // Car/Mobility Icon (FaCar)
    car: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M10 20.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" />
        <path d="M17 20.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" />
        <path d="M5 18H3.75c-.69 0-1.25-.56-1.25-1.25V14h19v2.75c0 .69-.56 1.25-1.25 1.25H18" />
        <path d="m5 18 1.48-6.42a2.25 2.25 0 0 1 2.14-1.58h6.76a2.25 2.25 0 0 1 2.14 1.58L18 18H5Z" />
        <path d="M5 11.25V7.5a2.25 2.25 0 0 1 2.25-2.25h9.5A2.25 2.25 0 0 1 19 7.5V11.25" />
      </svg>
    ),
    // Code Icon (FaCode - for development)
    code: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="16 18 22 12 16 6"></polyline>
        <polyline points="8 6 2 12 8 18"></polyline>
      </svg>
    ),
    // Mobile Icon (FaMobileAlt)
    mobile: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
        <line x1="12" y1="18" x2="12" y2="18"></line>
      </svg>
    ),
    // Cloud Icon (FaCloud - for Salesforce/Solutions)
    cloud: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>
      </svg>
    ),
    // Shield Icon (FaShieldAlt - for Security)
    shield: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
      </svg>
    ),
    // User Group Icon (FaUsers - for Staff/Training)
    users: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
        <circle cx="9" cy="7" r="4"></circle>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
      </svg>
    ),
  };

  return (
    <div className="services-page-container">
      <ServicesHeader />
      <section className="services-container">
        {/* Section Header */}
        <div className="services-header">{/* New Header */}</div>

        {/* Services Grid (now with six cards) */}
        <div className="cards-grid six-column-grid">
          {/* Card 1: Web Development (Code Icon) */}
          <ServiceCard
            icon={icons.code}
            title="Web Development"
            description="We provide cutting-edge web development services tailored to meet your business goals and ensure a seamless user experience."
          />

          {/* Card 2: Android & IOS (Mobile Icon) */}
          <ServiceCard
            icon={icons.mobile}
            title="Android & IOS"
            description="Build powerful, cross-platform mobile applications for both Android and iOS devices, ensuring maximum market reach."
          />

          {/* Card 3: Salesforce Solutions (Cloud Icon) */}
          <ServiceCard
            icon={icons.cloud}
            title="Salesforce Solutions"
            description="Expert consultancy and implementation services for Salesforce to optimize your CRM, sales, and customer service processes."
          />

          {/* Card 4: Staff Management (Users Icon) */}
          <ServiceCard
            icon={icons.users}
            title="Staff Management"
            description="Solutions for efficient HR and staff management, including payroll, scheduling, and performance tracking systems."
          />

          {/* Card 5: Digital Marketing (Shield Icon) */}
          <ServiceCard
            icon={icons.shield}
            title="Digital Marketing"
            description="Comprehensive digital marketing strategies to boost your online presence, drive traffic, and increase conversions."
          />

          {/* Card 6: Corporate Training (Car Icon - using a mobility theme icon) */}
          <ServiceCard
            icon={icons.car}
            title="Corporate Training"
            description="Professional training and workshops for your employees on the latest technologies, soft skills, and industry best practices."
          />
        </div>

        {/* The scroll-up button visible in the bottom right of the screenshot */}
        <a href="#top" className="scroll-up-button">
          ↑
        </a>
      </section>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');

          /* --- General Reset & Utility Styles --- */
          * {
              box-sizing: border-box;
          }

          body {
              font-family: 'Poppins', sans-serif;
              margin: 0;
              padding: 0;
              background-color: #ffffff;
          }

          .services-page-container {
              padding: 0;
              margin: 0;
          }

          /* ========================================================== */
          /* 1. HEADER SECTION (Matching pattern) */
          /* ========================================================== */
          .services-header-section {
              position: relative;
              background-image: url('https://via.placeholder.com/1920x400/0033aa/ffffff?text=Services+Banner');
              background-size: cover;
              background-position: center;
              height: 350px;
              display: flex;
              align-items: center;
              color: #ffffff;
              overflow: hidden;
          }

          .header-overlay {
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              background: linear-gradient(to right, rgba(0, 51, 170, 0.9), rgba(0, 0, 0, 0.7));
          }

          .header-content-v2 {
              position: relative;
              max-width: 1200px;
              width: 100%;
              margin: 0 auto;
              padding: 0 20px;
              z-index: 10;
          }

          .header-main-title-v2 {
              font-size: 3.5rem;
              font-weight: 700;
              color: #ffffff;
              margin: 0 0 10px 0;
          }

          .header-breadcrumb-v2 {
              display: inline-flex;
              align-items: center;
              font-size: 1rem;
              color: #ffffff;
              font-weight: 500;
              opacity: 0.8;
          }

          /* Custom header shape */
          .services-header-section::before {
              content: '';
              position: absolute;
              bottom: -150px;
              left: -150px;
              width: 300px;
              height: 300px;
              background-color: #007bff;
              clip-path: polygon(0% 100%, 100% 100%, 100% 0%);
              z-index: 15;
              transform: rotate(-45deg);
              opacity: 0.8;
          }

          /* ========================================================== */
          /* 2. SERVICES SECTION (Grid and Cards) */
          /* ========================================================== */

          /* Container for the entire section */
          .services-container {
              padding: 80px 20px;
              background-color: #f8f9fa; /* Light background color from the screenshot */
              font-family: 'Poppins', sans-serif;
              text-align: center;
          }

          /* Section Header */
          .services-header {
              max-width: 800px;
              margin: 0 auto 50px auto;
          }

          .section-pretitle {
              font-size: 1.4rem;
              font-weight: 600;
              color: #007bff;
              text-transform: uppercase;
              letter-spacing: 1px;
              margin-bottom: 5px;
          }

          .section-title {
              font-size: 2rem;
              font-weight: 700;
              color: #343a40; /* Dark text color */
              margin-bottom: 10px;
              position: relative;
              display: inline-block;
          }

          .title-underline {
              width: 50px;
              height: 3px;
              background-color: #007bff; /* Blue underline */
              margin: 0 auto 20px auto;
          }

          .section-subtitle {
              font-size: 1rem;
              color: #6c757d;
              max-width: 600px;
              margin: 0 auto;
          }

          /* Services Grid */
          .cards-grid {
              display: flex;
              justify-content: center;
              gap: 30px; /* Gap between cards */
              max-width: 1200px;
              margin: 0 auto;
              flex-wrap: wrap;
          }

          .service-card {
              background-color: white;
              padding: 40px 30px;
              border-radius: 8px;
              box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
              text-align: center;
              flex: 0 0 calc(33.33% - 20px);
              max-width: calc(33.33% - 20px);
              transition: transform 0.3s ease;
              margin-bottom: 30px;
          }

          .service-card:hover {
              transform: translateY(-5px);
          }

          /* Icon Styling */
          .icon-box {
              width: 60px;
              height: 60px;
              background-color: #e6f2ff; /* Very light blue background */
              color: #007bff; /* Blue icon color */
              border-radius: 50%;
              display: flex;
              justify-content: center;
              align-items: center;
              margin: 0 auto 25px auto;
              border: 2px solid #007bff; /* Blue ring around the icon box */
              position: relative;
          }

          /* Card Content */
          .card-title {
              font-size: 1.3rem;
              font-weight: 700;
              color: #343a40;
              margin-bottom: 15px;
          }

          .card-description {
              font-size: 0.95rem;
              line-height: 1.7;
              color: #6c757d;
          }

          /* Scroll Up Button */
          .scroll-up-button {
              position: fixed;
              bottom: 20px;
              right: 20px;
              width: 40px;
              height: 40px;
              background-color: #007bff;
              color: white;
              text-align: center;
              line-height: 40px;
              font-size: 1.5rem;
              border-radius: 5px;
              text-decoration: none;
              z-index: 1000;
              box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
          }

          /* Responsive Adjustments */
          @media (max-width: 1200px) {
              .service-card {
                  flex: 0 0 calc(50% - 15px);
                  max-width: calc(50% - 15px);
              }
          }

          @media (max-width: 768px) {
              .section-title {
                  font-size: 1.8rem;
              }
              .service-card {
                  flex: 0 0 100%;
                  max-width: 90%;
              }
          }
        `}
      </style>
    </div>
  );
};

export default Services;
