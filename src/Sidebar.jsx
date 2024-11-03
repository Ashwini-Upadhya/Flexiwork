import React from 'react';
import './Sidebar.css';

const Sidebar = ({ activeSection, setActiveSection }) => {
  return (
    <div className="sidebar">
      <div className="profile-info">
        <img src="profile-pic.png" alt="Profile" className="profile-avatar" />
        <h3 className="profile-name">Akshat Rodwal</h3>
        <p className="profile-email">modiakshat13@gmail.com</p>
      </div>

      <div className='sidebar_saperter'></div>

      <ul className="sidebar-links">
        <li 
          onClick={() => setActiveSection('profile')}
          className={activeSection === 'profile' ? 'active' : ''}
        >
          Profile
        </li>
        <li 
          onClick={() => setActiveSection('registrations')}
          className={activeSection === 'registrations' ? 'active' : ''}
        >
          Registrations/Applications
        </li>
      </ul>
      <button className="logout-btn">Logout</button>
    </div>
  );
};

export default Sidebar;
