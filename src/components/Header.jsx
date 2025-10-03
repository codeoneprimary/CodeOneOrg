import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/images/logo.jpg"; // ✅ Make sure the path is correct
import "./Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo image only */}
        <div className="logo">
          <Link to="/" className="logo-link">
            <img src={logo} alt="CodeOne Logo" className="logo-image" />
          </Link>
        </div>

        {/* Hamburger Menu Icon */}
        <div className="menu-icon" onClick={toggleMenu}>
          &#x22EE;
        </div>

        {/* Navigation Links */}
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
