import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="profile-info">
        <img src="profile-pic.png" alt="Profile" className="profile-avatar" />
        <h3 className="profile-name">Akshat Rodwal</h3>
        <p className="profile-email">modiakshat13@gmail.com</p>
        <p className="profile-details">Institute of Engineering and Science, IPS Academy, Indore</p>
      </div>
      <ul className="sidebar-links">
        <li>Registrations/Applications</li>
        <li>Referrals</li>
        <li>My Rounds</li>
        <li>Unstop Awards Nominations</li>
        <li>Watchlist</li>
        <li>Recently Viewed</li>
        <li>Mentor Sessions</li>
        <li>Courses</li>
      </ul>
    </div>
  );
};

export default Sidebar;
