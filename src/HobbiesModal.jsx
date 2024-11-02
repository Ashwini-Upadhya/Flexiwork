import React, { useState } from 'react';
import './HobbiesModal.css';

const HobbiesModal = ({ onClose }) => {
  const [selectedHobbies, setSelectedHobbies] = useState([]); // Stores selected hobbies
  const [newHobby, setNewHobby] = useState(''); // For custom hobby input

  // Add or remove hobby when clicked
  const handleHobbyClick = (hobby) => {
    if (selectedHobbies.includes(hobby)) {
      setSelectedHobbies(selectedHobbies.filter((h) => h !== hobby));
    } else {
      setSelectedHobbies([...selectedHobbies, hobby]);
    }
  };

  // Handle custom hobby input change
  const handleNewHobbyChange = (e) => setNewHobby(e.target.value);

  // Add new hobby to selected hobbies list
  const handleAddNewHobby = () => {
    if (newHobby && !selectedHobbies.includes(newHobby)) {
      setSelectedHobbies([...selectedHobbies, newHobby]);
      setNewHobby(''); // Clear input
    }
  };

  // Save selected hobbies and close modal
  const handleSave = (e) => {
    e.preventDefault();
    console.log('Selected Hobbies:', selectedHobbies);
    onClose();
  };

  return (
    <div className="hobbies-modal">
      <div className="modal-header">
        <h3>Add Hobbies</h3>
        <button className="close-btn" onClick={onClose}>X</button>
      </div>
      <div className="Profile_saperater_about_details"></div>
      <div className="Profile_separator_about_details"></div>
      <div className="modal-content">
        <label>
          Hobbies
          <br />
          <input
            type="text"
            placeholder="List your hobbies here."
            className="hobbies-input"
            value={newHobby}
            onChange={handleNewHobbyChange}
            onKeyDown={(e) => e.key === 'Enter' && handleAddNewHobby()} // Add hobby on Enter
          />
          <button className="add-hobby-btn" onClick={handleAddNewHobby}>Add Hobby</button>
        </label>
        <div className="selected-hobbies">
          {selectedHobbies.map((hobby) => (
            <div key={hobby} className="hobby-tag">
              {hobby}
              <span className="remove-hobby" onClick={() => handleHobbyClick(hobby)}>X</span>
            </div>
          ))}
        </div>
        <button className="save-btn" onClick={handleSave}>Save</button>
      </div>
    </div>
  );
};

export default HobbiesModal;
