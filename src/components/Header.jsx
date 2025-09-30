import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo */}
        <div className="logo">
          <Link to="/" className="logo-link">
            CodeOne <span>Technologies</span>
          </Link>
        </div>

        {/* Hamburger Button */}
        <button
          className={`hamburger-button ${menuOpen ? "open" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
          <span className="menu-text">Menu</span>
        </button>

        {/* Navigation */}
        <nav className={`nav-menu ${menuOpen ? "open" : ""}`}>
          <ul>
            <li>
              <NavLink
                to="/services"
                onClick={closeMenu}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blog"
                onClick={closeMenu}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Tech News
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/careers"
                onClick={closeMenu}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Careers
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                onClick={closeMenu}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                onClick={closeMenu}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
