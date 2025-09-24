import React from "react";
import "./Portfolio.css";

const Portfolio = () => {
  return (
    <section className="portfolio-container">
      <h2 className="portfolio-title">Our Portfolio & Case Studies</h2>
      <p className="portfolio-subtext">
        Explore some of our recent projects and the measurable impact we created for our clients.
      </p>

      <div className="portfolio-grid">
        <div className="portfolio-card">
          <h3 className="project-title">Salesforce Service Cloud Deployment</h3>
          <p className="project-description">
            Deployed Salesforce Service Cloud for a global retailer – improved case resolution by 40%.
          </p>
          <p className="project-result">Case resolution improved by 40%</p>
        </div>

        <div className="portfolio-card">
          <h3 className="project-title">Custom Web Portal Development</h3>
          <p className="project-description">
            Built a scalable property listing portal handling 10,000+ active users with advanced search and analytics.
          </p>
          <p className="project-result">Customer engagement increased by 65%</p>
        </div>

        <div className="portfolio-card">
          <h3 className="project-title">Mobile App for Logistics</h3>
          <p className="project-description">
            Developed a cross-platform mobile app for a logistics company to track shipments in real-time.
          </p>
          <p className="project-result">Operational efficiency boosted by 55%</p>
        </div>

        <div className="portfolio-card">
          <h3 className="project-title">Digital Marketing Campaign</h3>
          <p className="project-description">
            Executed a digital marketing strategy for an e-commerce brand, driving higher reach and conversions.
          </p>
          <p className="project-result">Sales revenue increased by 70%</p>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
