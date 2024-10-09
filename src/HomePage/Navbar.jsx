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
        <a className="navbar-link" href="#">Internships</a>
        <a className="navbar-link jobs-button active" href="#">Jobs</a>
      </div>

      <div className="navbar-right">
        {/* Use img tag to insert the SVG icon */}
        <a href="#" className="navbar-icon">
          <img
            src="data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20enable-background%3D%22new%200%200%2024%2024%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20fill%3D%22%23b2b1ff%22%20d%3D%22M18%2013.185V10a6%206%200%201%200-12%200v3.185A2.995%202.995%200%200%200%204%2016v2.001A1%201%200%200%200%205%2019h14.001A1%201%200%200%200%2020%2018v-2a2.995%202.995%200%200%200-2-2.815z%22%2F%3E%3Cpath%20fill%3D%22%236563ff%22%20d%3D%22M8.142%2019A3.995%203.995%200%200%200%2012%2022a3.995%203.995%200%200%200%203.858-3H8.142zM12%204c.341%200%20.674.035%201%20.09V3a1%201%200%201%200-2%200v1.09c.326-.055.659-.09%201-.09z%22%2F%3E%3C%2Fsvg%3E"
            alt="Notification Icon"
            className="notification-icon"
          />
        </a>

        <a className="navbar-icon" href="#">
        <img
            src="data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20enable-background%3D%22new%200%200%2024%2024%22%20viewBox%3D%220%200%2024%2024%22%3E%3Ccircle%20cx%3D%2212%22%20cy%3D%2210%22%20r%3D%224%22%20fill%3D%22%23d8d8ff%22%2F%3E%3Cpath%20fill%3D%22%236563ff%22%20d%3D%22M14.976%2012.65A3.974%203.974%200%200%201%2012%2014a3.974%203.974%200%200%201-2.975-1.35%207.997%207.997%200%200%200-4.815%205.6A10%2010%200%200%200%2012%2022a10%2010%200%200%200%207.79-3.75%207.986%207.986%200%200%200-4.814-5.6z%22%2F%3E%3Cpath%20fill%3D%22%23b2b1ff%22%20d%3D%22M9.025%2012.65A3.969%203.969%200%200%201%208%2010a4%204%200%201%201%208%200%203.969%203.969%200%200%201-1.024%202.65%207.985%207.985%200%200%201%204.807%205.578%209.932%209.932%200%200%200%202.197-6.238c0-5.512-4.468-9.98-9.98-9.98s-9.98%204.468-9.98%209.98c0%202.362.825%204.529%202.197%206.238a7.996%207.996%200%200%201%204.808-5.578z%22%2F%3E%3C%2Fsvg%3E"
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
