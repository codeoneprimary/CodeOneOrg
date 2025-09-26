import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* About Section */}
        <div className="footer-section footer-about">
          <p>
            CodeOne carry out your company hr <br />
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
            {/* Facebook Icon */}
            <a
              href="https://www.facebook.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.908c0-.817.09-1.192 1.176-1.192h2.824v-5h-3.617c-3.238 0-5.383 1.52-5.383 4.722v3.278z" />
              </svg>
            </a>
            {/* Instagram Icon */}
            <a
              href="https://www.instagram.com/codeonetechnologies?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.071 1.173.061 1.805.249 2.227.415.56.217.96.477 1.385.9.426.426.687.825.903 1.385.166.422.355 1.054.416 2.227.059 1.266.071 1.646.071 4.85s-.012 3.584-.071 4.85c-.061 1.173-.249 1.805-.415 2.227-.217.56-.477.96-.9 1.385-.426.426-.825.687-1.385.903-.422.166-1.054.355-2.227.416-1.266.059-1.646.071-4.85.071s-3.584-.012-4.85-.071c-1.173-.061-1.805-.249-2.227-.415-.56-.217-.96-.477-1.385-.9-.426-.426-.687-.825-.903-1.385-.166-.422-.355-1.054-.416-2.227-.059-1.266-.071-1.646-.071-4.85s.012-3.584.071-4.85c.061-1.173.249-1.805.415-2.227.217-.56.477-.96.9-1.385.426-.426.825-.687 1.385-.903.422-.166 1.054-.355 2.227-.416C8.416 2.175 8.796 2.163 12 2.163zm0-2.163c-3.837 0-4.336.014-5.834.077-1.503.064-2.505.28-3.19.544-.725.279-1.366.699-1.989 1.32-.622.623-1.041 1.264-1.321 1.989-.264.685-.48 1.687-.544 3.19-.063 1.498-.077 1.996-.077 5.834s.014 4.336.077 5.834c.064 1.503.28 2.505.544 3.19.279.725.699 1.366 1.32 1.989.623.622 1.264 1.041 1.989 1.321.685.264 1.687.48 3.19.544 1.498.063 1.996.077 5.834.077s4.336-.014 5.834-.077c1.503-.064 2.505-.28 3.19-.544.725-.279 1.366-.699 1.989-1.32.622-.623 1.041-1.264 1.321-1.989.264-.685.48-1.687.544-3.19.063-1.498.077-1.996.077-5.834s-.014-4.336-.077-5.834c-.064-1.503-.28-2.505-.544-3.19-.279-.725-.699-1.366-1.32-1.989-.623-.622-1.264-1.041-1.989-1.321-.685-.264-1.687-.48-3.19-.544-1.498-.063-1.996-.077-5.834-.077zm0 8.019c-2.199 0-3.981 1.782-3.981 3.981s1.782 3.981 3.981 3.981 3.981-1.782 3.981-3.981-1.782-3.981-3.981-3.981zm0 6.577c-1.438 0-2.596-1.159-2.596-2.596s1.158-2.596 2.596-2.596 2.596 1.159 2.596 2.596-1.158 2.596-2.596 2.596zm5.16-6.882c-.596 0-1.08.484-1.08 1.08s.484 1.08 1.08 1.08 1.08-.484 1.08-1.08-.483-1.08-1.08-1.08z" />
              </svg>
            </a>
            {/* LinkedIn Icon */}
            <a
              href="https://www.linkedin.com/in/codeone-technologies-90bb28380"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 6.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.011-3.922v-2.147z" />
              </svg>
            </a>
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
