import React, { useState } from 'react';
import './About.css'; // Shared CSS

function AboutAccordion({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion-item">
      <button className="accordion-header" onClick={toggleAccordion}>
        <span className="accordion-icon">{isOpen ? '−' : '+'}</span>
        <h5 className="accordion-title">{title}</h5>
      </button>
      {isOpen && <div className="accordion-content">{children}</div>}
    </div>
  );
}

export default AboutAccordion;