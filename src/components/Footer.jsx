import React, { useState } from "react";
import axios from "axios";
import "./Footer.css";

function Footer() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  // Simple email validation regex
  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubscribe = async () => {
    if (!email) {
      setMessage("Please enter an email address.");
      return;
    }
    if (!isValidEmail(email)) {
      setMessage("Please enter a valid email address.");
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      // Using live backend URL on Render
      await axios.post(
        "https://codeonebackend-13.onrender.com/api/newsletter/subscribe",
        { email }
      );
      setMessage("✅ Successfully subscribed!");
      setEmail("");
    } catch (error) {
      if (error.response?.status === 400) {
        setMessage("⚠️ Invalid or already subscribed email.");
      } else {
        setMessage("❌ Subscription failed. Try again later.");
      }
    } finally {
      setLoading(false);
    }
  };

  // Scroll smoothly to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* About Section */}
        <div className="footer-section footer-about">
          <p>
            CodeOne carry out your company HR <br />
            service needs to providing training <br />
            and managing the HR department <br />
            company. Our consultants provide <br />
            HR outsourcing and inclusive <br />
            services.
          </p>
          <div className="talk-to-support">
            <p className="support-title">Talk To Our Support</p>
            <div className="phone-number">
              <span className="number">8208171281</span>
              <div className="chat-icon" aria-label="Phone icon" role="img">
                📞
              </div>
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
            <input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={loading}
              aria-label="Email address"
            />
            <button
              className="subscribe-btn"
              onClick={handleSubscribe}
              disabled={loading}
              aria-label="Subscribe to newsletter"
            >
              {loading ? "⏳" : "➤"}
            </button>
          </div>
          {message && (
            <p
              className="subscription-message"
              role="alert"
              aria-live="polite"
              aria-atomic="true"
            >
              {message}
            </p>
          )}
        </div>

        {/* Follow Us Section */}
        <div className="footer-section footer-social">
          <h4>FOLLOW US ON</h4>
          <div className="social-icons">
            {/* Facebook */}
            <a
              href="https://www.facebook.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="Facebook"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.908c0-.817.09-1.192 1.176-1.192h2.824v-5h-3.617c-3.238 0-5.383 1.52-5.383 4.722v3.278z" />
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/codeonetechnologies"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="Instagram"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M7.5,2h9A5.5,5.5,0,0,1,22,7.5v9A5.5,5.5,0,0,1,16.5,22h-9A5.5,5.5,0,0,1,2,16.5v-9A5.5,5.5,0,0,1,7.5,2ZM12,7.5A4.5,4.5,0,1,0,16.5,12,4.505,4.505,0,0,0,12,7.5Zm6.5-.9a1.1,1.1,0,1,0,1.1,1.1A1.1,1.1,0,0,0,18.5,6.6Z" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/codeone-technologies-90bb28380"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="LinkedIn"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 6.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.011-3.922v-2.147z" />
              </svg>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/918208171281"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="WhatsApp"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12.004 2c-5.514 0-10 4.486-10 10 0 1.768.468 3.488 1.356 5.004L2 22l5.18-1.332A9.948 9.948 0 0 0 12.004 22c5.514 0 10-4.486 10-10s-4.486-10-10-10Zm0 18a7.94 7.94 0 0 1-4.062-1.114l-.29-.174-3.072.79.82-2.994-.19-.308A7.928 7.928 0 0 1 4.004 12c0-4.418 3.582-8 8-8s8 3.582 8 8-3.582 8-8 8Zm4.274-5.893c-.234-.117-1.382-.681-1.596-.758-.213-.078-.368-.117-.523.117-.156.233-.602.758-.738.914-.135.156-.272.176-.506.058-.234-.117-.99-.364-1.884-1.162-.696-.62-1.166-1.385-1.302-1.619-.135-.233-.014-.36.103-.477.106-.106.234-.273.35-.41.117-.136.156-.233.234-.389.078-.155.039-.292-.02-.41-.059-.117-.523-1.26-.717-1.727-.188-.452-.378-.39-.523-.397-.136-.007-.292-.009-.447-.009-.156 0-.41.058-.625.292s-.82.8-.82 1.949c0 1.149.84 2.258.956 2.414.117.156 1.651 2.523 4.004 3.539.56.242.997.387 1.338.496.562.179 1.074.154 1.478.093.451-.067 1.382-.566 1.576-1.112.195-.546.195-1.014.136-1.112-.058-.098-.213-.155-.447-.272Z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          Copyright © 2025 CodeOne Technologies Solution Pvt Ltd. All Rights
          Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
