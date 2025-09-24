 import React from 'react';
import './ContactForm.css';

function ContactForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted');
  };

  return (
    <div className="contact-form-container">
      <div className="form-header">
        <h4>GET IN TOUCH</h4>
        <p>
          We're here to help you. Fill out the form below, and we'll get <br />
          back to you as soon as possible.
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input type="text" id="name" name="name" placeholder="Name" required />
        </div>
        <div className="form-group">
          <input type="email" id="email" name="email" placeholder="Email" required />
        </div>
        <div className="form-group">
          <input type="tel" id="phone" name="phone" placeholder="Phone Number" />
        </div>
        <div className="form-group">
          <textarea id="message" name="message" rows="5" placeholder="Message" required></textarea>
        </div>
        <button type="submit" className="submit-btn">SEND MESSAGE</button>
      </form>
    </div>
  );
}

export default ContactForm;