import React from 'react';
import './ProfileSection.css';

const ProfileSection = ({ title, buttonText, icon, streaks, onClick }) => {
    return (
      <div className="profile-section">
        <div className="section-header">
          <span className="section-icon">{icon}</span>
          <h3 className="section-title">{title}</h3>
          {buttonText && (
            <button className="section-btn" onClick={() => {
                console.log("Add About button clicked"); // Debugging log
                onClick();
              }}>
              {buttonText}
            </button>
          )}
        </div>
        {streaks && (
          <div className="streaks-container">
            <p>Current Streak: 1 Day</p>
            <p>Max Streak: 8 Days</p>
          </div>
        )}
      </div>
    );
  };
  

export default ProfileSection;
