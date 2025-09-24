 import React from 'react';
import './Footer.css'; 

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* About Section */}
        <div className="footer-section footer-about">
          <p>
            CodeOne                      carry out your company hr <br />
            service needs to providing training <br />
            and managing the hR department <br />
            company. Our consultants provide <br />
            HR outsourcing and inclusive <br />
            services.
          </p>
          <div className="talk-to-support">
            <p className="support-title">Talk To Our Support</p>
            <div className="phone-number">
              <span className="number">020-68310024</span>
              <div className="chat-icon">📞</div>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="footer-section footer-newsletter">
          <h4>NEWSLETTER</h4>
          <p>
            Sign up today for hints, tips and the <br />
            latest product news
          </p>
          <div className="newsletter-form">
            <input type="email" placeholder="Your email address" />
            <button className="subscribe-btn">➤</button>
          </div>
        </div>

        {/* Follow Us Section */}
        <div className="footer-section footer-social">
          <h4>FOLLOW US ON</h4>
          <div className="social-icons">
            {/* You can add icons from a library like Font Awesome */}
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Copyright © 2025 CodeOne Technologies. All Rights Reserved.</p>
        <button className="back-to-top">↑</button>
      </div>
    </footer>
  );
}

export default Footer;