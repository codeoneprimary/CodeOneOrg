 import React from 'react';
import { Link, NavLink } from 'react-router-dom'; 
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        {/* Logo */}
        <div className="logo">
          <Link to="/" className="logo-link">
            CodeOne <span>Technologies</span>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="nav-menu">
          <ul>
            <li>
              <NavLink to="/services" activeclassname="active">
                Services
              </NavLink>
            </li>
            <li>
              <NavLink to="/portfolio" activeclassname="active">
                Portfolio / Case Studies
              </NavLink>
            </li>
            <li>
              <NavLink to="/careers" activeclassname="active">
                Careers
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" activeclassname="active">
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" activeclassname="active">
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
