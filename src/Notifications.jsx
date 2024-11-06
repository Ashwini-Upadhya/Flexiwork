import React, { useState, useEffect } from 'react';
import './Notifications.css'; // Import the CSS file
import Navbar from './Navbar';

const Notifications = () => {
  const [messages, setMessages] = useState([]);
  const [showCheckboxes, setShowCheckboxes] = useState(false);
  const [selectedMessages, setSelectedMessages] = useState([]);
  const [selectState, setSelectState] = useState('Select'); // State for button text
  const [showDeleteAll, setShowDeleteAll] = useState(false); // Control Delete All button visibility

  // Dummy job-related notifications
  useEffect(() => {
    const jobNotifications = [
      { _id: 1, text: 'New software developer position available at XYZ Corp.' },
      { _id: 2, text: 'Your application for the Data Analyst position is under review.' },
      { _id: 3, text: 'Backend Developer role at ABC Inc. has been posted.' },
      { _id: 4, text: 'Reminder: Interview for Frontend Developer at 10 AM tomorrow.' },
      { _id: 5, text: 'Job alert: Full-stack Developer opening at DEF Tech.' },
      { _id: 6, text: 'Your profile matches the DevOps Engineer position at GHI Solutions.' }
    ];
    setMessages(jobNotifications);
  }, []);

  // Handle button click logic for cycling through states
  const handleButtonClick = () => {
    if (selectState === 'Select') {
      setShowCheckboxes(true); // Show checkboxes
      setSelectState('Select All');
    } else if (selectState === 'Select All') {
      handleSelectAllClick(); // Select all messages
      setSelectState('Undelete');
    } else if (selectState === 'Undelete') {
      // Reset all selections and hide delete button
      setSelectedMessages([]); 
      setShowCheckboxes(false); // Hide checkboxes
      setSelectState('Select'); // Reset to "Select"
      setShowDeleteAll(false); // Hide "Delete All" button
    }
  };

  // Handle select all functionality
  const handleSelectAllClick = () => {
    if (selectedMessages.length === messages.length) {
      setSelectedMessages([]); // Deselect all if all were selected
      setShowDeleteAll(false); // Hide Delete All button
    } else {
      setSelectedMessages(messages.map((msg) => msg._id)); // Select all messages
      setShowDeleteAll(true); // Show Delete All button
    }
  };

  // Handle individual checkbox change
  const handleCheckboxChange = (id) => {
    let updatedSelectedMessages = [...selectedMessages];
    if (selectedMessages.includes(id)) {
      updatedSelectedMessages = selectedMessages.filter((msgId) => msgId !== id);
    } else {
      updatedSelectedMessages = [...selectedMessages, id];
    }

    setSelectedMessages(updatedSelectedMessages);

    // Show or hide Delete All button based on selection
    if (updatedSelectedMessages.length > 0) {
      setShowDeleteAll(true); // Show Delete All when there is at least one message selected
    } else {
      setShowDeleteAll(false); // Hide Delete All when nothing is selected
    }
  };

  // Delete selected messages or a single message
  const handleDeleteSelected = (id = null) => {
    if (id) {
      // Delete a single message
      setMessages(messages.filter((msg) => msg._id !== id)); // Update state
    } else {
      // Delete selected messages
      setMessages(messages.filter((msg) => !selectedMessages.includes(msg._id)));
      setSelectedMessages([]); // Clear selections after delete
      setShowDeleteAll(false); // Hide the Delete All button
    }
  };

  return (
    <><Navbar /><div className="notification-container">
          <div className="notification-header">
              <button className="select-button" onClick={handleButtonClick}>
                  {selectState}
              </button>

              {/* Display Delete All button when any checkbox is ticked and Select All is clicked */}
              {showDeleteAll && selectState !== 'Select' && (
                  <button className="delete-all-button" onClick={() => handleDeleteSelected()}>
                      Delete All
                  </button>
              )}
          </div>

          <div className="notification-list">
              {messages.map((message) => (
                  <div key={message._id} className="notification-item">
                      {showCheckboxes && (
                          <input
                              type="checkbox"
                              className="checkbox"
                              checked={selectedMessages.includes(message._id)}
                              onChange={() => handleCheckboxChange(message._id)} />
                      )}
                      <span className="notification-text">{message.text}</span>
                      {showCheckboxes && (
                          <button className="delete-button" onClick={() => handleDeleteSelected(message._id)}>
                              Delete
                          </button>
                      )}
                  </div>
              ))}
          </div>
      </div></>
  );
};

export default Notifications;
