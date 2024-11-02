import React, { useState } from 'react';
import './SkillsModal.css';

const SkillsModal = ({ onClose }) => {
  const [selectedSkills, setSelectedSkills] = useState([]); // Stores selected skills
  const [newSkill, setNewSkill] = useState(''); // For custom skill input
  const suggestions = [
    'Java',
    "JavaScript",
    "HTML",
    "CSS",
    "React js",
    "Angular",
    "Vue",
    "Python",
    "C++",
    "C#",
    "node js",
    "Ruby",
    "MySQL",
    "SQL",
    "MongoDB",
    'Analytics',
    'Adobe Illustrator',
    'WordPress',
    'Product Expertise',
    'Weeding',
    'UI Prototyping',
    'Xara Designer Pro X',
    'Collaboration',
    'Cost Accounting',
    'Supply Chain Network Design',
  ];

  // Add or remove skill when clicked
  const handleSkillClick = (skill) => {
    if (selectedSkills.includes(skill)) {
      setSelectedSkills(selectedSkills.filter((s) => s !== skill));
    } else {
      setSelectedSkills([...selectedSkills, skill]);
    }
  };

  // Handle custom skill input change
  const handleNewSkillChange = (e) => setNewSkill(e.target.value);

  // Add new skill to selected skills list
  const handleAddNewSkill = () => {
    if (newSkill && !selectedSkills.includes(newSkill)) {
      setSelectedSkills([...selectedSkills, newSkill]);
      setNewSkill(''); // Clear input
    }
  };

  // Save selected skills and close modal
  const handleSave = (e) => {
    e.preventDefault();
    console.log('Selected Skills:', selectedSkills);
    onClose();
  };

  return (
    <div className="skills-modal">
      <div className="modal-header">
        <h3>Add Skills</h3>
        <button className="close-btn" onClick={onClose}>X</button>
      </div>
      <div className="Profile_saperater_about_details"></div>
      <div className="modal-content">
        <label className="suggestions-label">
          Suggested Skills
          <div className="suggestions-container">
            {suggestions.map((skill) => (
              <button
                key={skill}
                className={`suggestion-btn ${selectedSkills.includes(skill) ? 'selected' : ''}`}
                onClick={() => handleSkillClick(skill)}
              >
                {skill}
                {selectedSkills.includes(skill) && <span className="remove-skill">X</span>}
              </button>
            ))}
          </div>
        </label>
        <br />
        <label>
          Skills
          <br />
          <input
            type="text"
            placeholder="List your skills here, showcasing what you excel at."
            className="skills-input"
            value={newSkill}
            onChange={handleNewSkillChange}
            onKeyDown={(e) => e.key === 'Enter' && handleAddNewSkill()} // Add skill on Enter
          />
          <button className="add-skill-btn" onClick={handleAddNewSkill}>Add Skill</button>
        </label>
        <div className="selected-skills">
          {selectedSkills.map((skill) => (
            <div key={skill} className="skill-tag">
              {skill}
              <span className="remove-skill" onClick={() => handleSkillClick(skill)}>X</span>
            </div>
          ))}
        </div>
        <button className="save-btn" onClick={handleSave}>Save</button>
      </div>
    </div>
  );
};

export default SkillsModal;
