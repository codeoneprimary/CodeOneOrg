 import React from 'react';
import './Contact.css';

function ContactCard({ icon, label, info }) {
  return (
    <div className="contact-card">
      <div className="contact-item">
        <div className="icon-container">
          <span className="icon">{icon}</span>
        </div>
        <div>
          <div className="contact-label">{label}</div>
          <div className="contact-info">{info}</div>
        </div>
      </div>
    </div>
  );
}

export default ContactCard;