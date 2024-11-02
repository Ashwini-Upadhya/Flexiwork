import React, { useState } from 'react';
import './WorkExpModal.css';

const WorkExpModal = ({ onClose }) => {
  const [experiences, setExperiences] = useState([
    { companyName: '', jobTitle: '', jobType: '', location: '', startDate: '', endDate: '', currentlyWorking: false, description: '' },
  ]);

  const handleExperienceChange = (index, field, value) => {
    const updatedExperiences = experiences.map((experience, i) => 
      i === index ? { ...experience, [field]: value } : experience
    );
    setExperiences(updatedExperiences);
  };

  const handleAddExperience = () => {
    setExperiences([
      ...experiences,
      { companyName: '', jobTitle: '', jobType: '', location: '', startDate: '', endDate: '', currentlyWorking: false, description: '' },
    ]);
  };

  const handleRemoveExperience = (index) => {
    const updatedExperiences = experiences.filter((_, i) => i !== index);
    setExperiences(updatedExperiences);
  };

  const handleSave = (e) => {
    e.preventDefault();
    console.log('Experiences:', experiences);
    onClose();
  };

  return (
    <div className="workexp-modal">
      <div className="modal-header">
        <h3>Add Work Experience</h3>
        <button className="close-btn" onClick={onClose}>X</button>
      </div>
      <div className="Profile_saperater_about_details"></div>
      <div className="modal-content">
        {experiences.map((experience, index) => (
          <div key={index} className="experience-form">
            <label>
              Company Name *
              <input
                type="text"
                placeholder="Enter company name"
                value={experience.companyName}
                onChange={(e) => handleExperienceChange(index, 'companyName', e.target.value)}
                className="input-field"
              />
            </label>
            <label>
              Job Title *
              <input
                type="text"
                placeholder="Enter job title"
                value={experience.jobTitle}
                onChange={(e) => handleExperienceChange(index, 'jobTitle', e.target.value)}
                className="input-field"
              />
            </label>
            <label>
              Job Type *
              <input
                type="text"
                placeholder="Full-Time, Part-Time, etc."
                value={experience.jobType}
                onChange={(e) => handleExperienceChange(index, 'jobType', e.target.value)}
                className="input-field"
              />
            </label>
            <label>
              Location *
              <input
                type="text"
                placeholder="City, Country"
                value={experience.location}
                onChange={(e) => handleExperienceChange(index, 'location', e.target.value)}
                className="input-field"
              />
            </label>
            <label className="duration-label">
              Duration *
              <div className="duration-container">
                <input
                  type="date"
                  value={experience.startDate}
                  onChange={(e) => handleExperienceChange(index, 'startDate', e.target.value)}
                  className="date-field"
                />
                <span>to</span>
                <input
                  type="date"
                  value={experience.currentlyWorking ? '' : experience.endDate}
                  onChange={(e) => handleExperienceChange(index, 'endDate', e.target.value)}
                  disabled={experience.currentlyWorking}
                  className="date-field"
                />
                <label className="currently-working">
                  <input
                    type="checkbox"
                    checked={experience.currentlyWorking}
                    onChange={() => handleExperienceChange(index, 'currentlyWorking', !experience.currentlyWorking)}
                  />
                  Currently Working
                </label>
              </div>
            </label>
            <label>
              Description *
              <textarea
                placeholder="Describe your responsibilities and achievements"
                value={experience.description}
                onChange={(e) => handleExperienceChange(index, 'description', e.target.value)}
                className="description-field"
              />
            </label>
            <button className="remove-btn" onClick={() => handleRemoveExperience(index)}>Remove</button>
            {index < experiences.length - 1 && <hr className="separator-Exp-line" />}
          </div>
        ))}
        <button className="add-experience-btn" onClick={handleAddExperience}>Add Another Experience</button>
        <button className="save-Exp-btn" onClick={handleSave}>Save</button>
      </div>
    </div>
  );
};

export default WorkExpModal;
