import React from 'react';
import './RecruiterSidebar.css';

const RecruiterSidebar = ({ activeSection, setActiveSection }) => {
  return (
    <div className="recruiter-sidebar">
      <div className="recruiter-profile-info">
        <img src="company-logo.png" alt="Company Logo" className="recruiter-profile-avatar" />
        <h3 className="recruiter-profile-name">Company Name</h3>
        <p className="recruiter-profile-email">companyemail@example.com</p>
      </div>

      <div className='recruiter-sidebar-separator'></div>

      <ul className="recruiter-sidebar-links">
        <li 
          onClick={() => setActiveSection('profile')}
          className={activeSection === 'profile' ? 'active' : ''}
        >
          Profile
        </li>
        <li 
          onClick={() => setActiveSection('job-posted')}
          className={activeSection === 'job-posted' ? 'active' : ''}
        >
          Job Posted
        </li>
      </ul>
      <button className="recruiter-logout-btn">Logout</button>
    </div>
  );
};

export default RecruiterSidebar;


