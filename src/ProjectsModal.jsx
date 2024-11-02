import React, { useState } from 'react';
import './WorkExpModal.css';

const ProjectsModal = ({ onClose }) => {
  const [experiences, setExperiences] = useState([
    { ProjectName: '', TechnologyName: '', startDate: '', endDate: '', currentlyWorking: false, description: '', projectLink: '' },
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
      { ProjectName: '', TechnologyName: '', startDate: '', endDate: '', currentlyWorking: false, description: '', projectLink: '' },
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
        <h3>Add Project </h3>
        <button className="close-btn" onClick={onClose}>X</button>
      </div>
      <div className="Profile_saperater_about_details"></div>
      <div className="modal-content">
        {experiences.map((experience, index) => (
          <div key={index} className="experience-form">
            <label>
              Project Name *
              <input
                type="text"
                placeholder="Enter project name"
                value={experience.ProjectName}
                onChange={(e) => handleExperienceChange(index, 'ProjectName', e.target.value)}
                className="input-field"
              />
            </label>
            <label>
              Technology Used *
              <input
                type="text"
                placeholder="Enter technology used"
                value={experience.TechnologyName}
                onChange={(e) => handleExperienceChange(index, 'TechnologyName', e.target.value)}
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
                placeholder="Describe your project"
                value={experience.description}
                onChange={(e) => handleExperienceChange(index, 'description', e.target.value)}
                className="description-field"
              />
            </label>
            <label>
              Project Link *
              <input
                type="url"
                placeholder="Enter project link"
                value={experience.projectLink}
                onChange={(e) => handleExperienceChange(index, 'projectLink', e.target.value)}
                className="input-field "
              />
            </label>
            <button className="remove-btn" onClick={() => handleRemoveExperience(index)}>Remove</button>
            {index < experiences.length - 1 && <hr className="separator-Exp-line" />}
          </div>
        ))}
        <button className="add-experience-btn" onClick={handleAddExperience}>Add Another Project</button>
        <button className="save-Exp-btn" onClick={handleSave}>Save</button>
      </div>
    </div>
  );
};

export default ProjectsModal;
