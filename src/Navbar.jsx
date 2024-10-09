import React from 'react';
import './Navbar.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <a className="navbar-logo" href="#">
          <span className="brand-highlight">Flexi</span>Work
        </a>

        <div className="search-container">
          <input  type="text" className="navbar-search" placeholder="Search Jobs"  />
          <SearchIcon className="search-icon" />

        </div>
      </div>

      <div className="navbar-center">
        <a className="navbar-link" href="#">Learn</a>
        <a className="navbar-link" href="#">Practice</a>
        <a className="navbar-link" href="#">Mentorship</a>
        <a className="navbar-link" href="#">Compete</a>
        <a className="navbar-link " href="#">Internships</a>
        <a className="navbar-link active" href="/">Jobs</a>
      </div>

      <div className="navbar-right">
        {/* Use img tag to insert the SVG icon */}
        <a href="#" className="navbar-icon">
          <img
            src="src\images\i1.png"
            alt="Notification Icon"
            className="notification-icon"
          />
        </a>

        <a className="navbar-icon" href="#">
        <img
            src="src\images\i2.png"
            alt="Profile Icon"
            className="profile-icon"
          />
          
        </a>
        <button className="navbar-button host-button">Login</button>
        <button className="navbar-button business-button">Sign in</button>
      </div>
    </nav>
  );
};

export default Navbar;
