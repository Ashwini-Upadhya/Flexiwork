import React, { useState } from 'react';
import './AboutModal.css';

const AboutModal = ({ onClose }) => {
  const [purpose, setPurpose] = useState(''); // State for purpose selection
  const [aboutText, setAboutText] = useState(''); // State for "About Me" text
  const [interests, setInterests] = useState(''); // State for Interests input

  // Purpose selection handler
  const handlePurposeClick = (selectedPurpose) => setPurpose(selectedPurpose);

  // Handle About Me input change
  const handleAboutChange = (e) => setAboutText(e.target.value);

  // Handle Interests input change
  const handleInterestsChange = (e) => setInterests(e.target.value);

  // Save handler (e.g., form submission)
  const handleSave = (e) => {
    e.preventDefault();
    console.log('Purpose:', purpose);
    console.log('About Me:', aboutText);
    console.log('Interests:', interests);
    onClose(); // Close the modal on save
  };

  return (
    <div className="about-modal">
      <div className="modal-header">
        <h3>Add About</h3>
        <button className="close-btn" onClick={onClose}>X</button>
      </div>
      <div className="Profile_saperater_about_details"></div>
      <div className="modal-content">
        <label className="purpose-label">
          Purpose *
          <div className="purpose-buttons">
            <button
              className={`purpose-btn ${purpose === 'Open to Work' ? 'active' : ''}`}
              onClick={() => handlePurposeClick('Open to Work')}
            >
              Open to Work
            </button>
            <button
              className={`purpose-btn ${purpose === 'Hiring' ? 'active' : ''}`}
              onClick={() => handlePurposeClick('Hiring')}
            >
              Hiring
            </button>
            <button
              className={`purpose-btn ${purpose === 'Compete and Upskill' ? 'active' : ''}`}
              onClick={() => handlePurposeClick('Compete and Upskill')}
            >
              Compete and Upskill
            </button>
          </div>
        </label>
        <label>
          Interests *
          <input
            type="text"
            placeholder="List your passion & interests to connect with similar users."
            className="interests-input"
            value={interests}
            onChange={handleInterestsChange}
          />
        </label>
        <label>
          About Me *
          <textarea
            placeholder="Introduce yourself here! Share a brief overview of who you are, your interests, and connect with fellow users, recruiters & organizers."
            className="about-input"
            value={aboutText}
            onChange={handleAboutChange}
          />
        </label>
        <button className="save-btn" onClick={handleSave}>Save</button>
      </div>
    </div>
  );
};

export default AboutModal;
