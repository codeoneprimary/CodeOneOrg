import React from 'react';
import './About.css'; // Shared CSS

function AboutSection({ title, content, isLightBackground = false }) {
  const sectionClass = isLightBackground ? "about-section light-bg" : "about-section dark-bg";
  return (
    <section className={sectionClass}>
      <div className="about-section-content">
        <h2>{title}</h2>
        {typeof content === 'string' ? <p>{content}</p> : content}
      </div>
    </section>
  );
}

export default AboutSection;