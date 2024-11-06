import React, { useState } from 'react';
import './Navbar.css';
import SearchIcon from '@mui/icons-material/Search';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('Jobs'); // Track active nav link
  const navigate = useNavigate(); // Using useNavigate for navigation

  // Function to handle link clicks
  const handleLinkClick = (linkName, path) => {
    setActiveLink(linkName); // Set the active nav link
    if (path) {
      navigate(path); // Navigate to the new path
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link className="navbar-logo" to="/">
          <span className="brand-highlight">Flexi</span>Work
        </Link>

        <div className="search-container">
          <input type="text" className="navbar-search" placeholder="Search Jobs" />
          <SearchIcon className="search-icon" />
        </div>
      </div>

      <div className="navbar-center">
        <Link
          className={`navbar-link ${activeLink === 'Learn' ? 'active' : ''}`}
          to="#"
          onClick={() => handleLinkClick('Learn')}
        >
          Learn
        </Link>
        <Link
          className={`navbar-link ${activeLink === 'Practice' ? 'active' : ''}`}
          to="#"
          onClick={() => handleLinkClick('Practice')}
        >
          Practice
        </Link>
        <Link
          className={`navbar-link ${activeLink === 'Mentorship' ? 'active' : ''}`}
          to="#"
          onClick={() => handleLinkClick('Mentorship')}
        >
          Mentorship
        </Link>
        <Link
          className={`navbar-link ${activeLink === 'Compete' ? 'active' : ''}`}
          to="#"
          onClick={() => handleLinkClick('Compete')}
        >
          Compete
        </Link>
        <Link
          className={`navbar-link ${activeLink === 'Internships' ? 'active' : ''}`}
          to="/Internship"
          onClick={() => handleLinkClick('Internships')}
        >
          Internships
        </Link>
        <Link
          className={`navbar-link ${activeLink === 'Jobs' ? 'active' : ''}`}
          to="/"
          onClick={() => handleLinkClick('Jobs', '/')}
        >
          Jobs
        </Link>
      </div>

      <div className="navbar-right">
        {/* Notification Icon as a Link */}
        <Link
          to="/Notification"
          className={`navbar-icon ${activeLink === 'Notifications' ? 'active' : ''}`}
          onClick={() => handleLinkClick('Notifications')}
        >
          <img
            src="src/images/i1.png"
            alt="Notification Icon"
            className="notification-icon"
          />
        </Link>

        {/* Profile Icon as a Link */}
        <Link
          to="/Profile"
          className={`navbar-icon ${activeLink === 'Profile' ? 'active' : ''}`}
          onClick={() => handleLinkClick('Profile')}
        >
          <img
            src="src/images/i2.png"
            alt="Profile Icon"
            className="profile-icon"
          />
        </Link>

        <button
          className={`navbar-button host-button ${activeLink === 'Login' ? 'active' : ''}`}
          onClick={() => handleLinkClick('Login', '/login')}
        >
          Login
        </button>

        <button
          className={`navbar-button business-button ${activeLink === 'Sign in' ? 'active' : ''}`}
          onClick={() => handleLinkClick('Sign in', '/Signup')}
        >
          Sign in
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
