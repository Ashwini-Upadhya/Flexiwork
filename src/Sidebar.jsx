import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="profile-info">
        <img src="profile-pic.png" alt="Profile" className="profile-avatar" />
        <h3 className="profile-name">Akshat Rodwal</h3>
        <p className="profile-email">modiakshat13@gmail.com</p>
      </div>

      <div className='sidebar_saperter'></div>

      <ul className="sidebar-links">
        <li className="active">Profile</li>
        <li>Registrations/Applications</li>
      </ul>
      <button className="logout-btn">Logout</button>
    </div>
  );
};

export default Sidebar;
