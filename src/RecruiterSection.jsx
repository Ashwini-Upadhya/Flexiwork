import React, { useState } from 'react';
import './RecruiterSection.css';

const RecruiterSection = () => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [aboutDescription, setAboutDescription] = useState('This is a brief description about the company.');

  const toggleEditMode = () => setIsEditMode(!isEditMode);

  const handleDescriptionChange = (event) => {
    setAboutDescription(event.target.value);
  };

  const handleSave = (e) => {
    e.preventDefault();
    setIsEditMode(false);
  };

  return (
    <div className="recruiter-section-container">
      <div className="recruiter-about-section">
        <h3 className="recruiter-about-heading">About</h3>
        {isEditMode ? (
          <div className="recruiter-edit-description">
            <textarea
              value={aboutDescription}
              onChange={handleDescriptionChange}
              rows="5"
              className="recruiter-textarea"
            />
            <button className="recruiter-save-description-btn" onClick={handleSave}>Save</button>
          </div>
        ) : (
          <div>
            <p className="recruiter-description-content">{aboutDescription}</p>
            <button className="recruiter-edit-about-btn" onClick={toggleEditMode}>Edit</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default RecruiterSection;
