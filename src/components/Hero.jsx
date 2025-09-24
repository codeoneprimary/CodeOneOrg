 import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-container">
      <div className="hero-left">
        <h1 className="hero-title">
          Transforming Ideas <br /> into Digital Solutions
        </h1>
        <p className="hero-subtext">
          Your trusted partner for Salesforce, Web, Mobile, Staffing, and Digital Marketing solutions.
        </p>
        <div className="hero-buttons">
          
          <button className="hero-cta-button secondary">
            Explore Services
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
