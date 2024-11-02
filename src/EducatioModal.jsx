// EducationModal.js
import React, { useState } from 'react';
import './EducatioModal.css';

const EducatioModal = ({ onClose }) => {
  const [collegeDetails, setCollegeDetails] = useState([
    { collegeName: '', degreeName: '', courseName: '', collegeLocation: '', collegeMarks: '', collegeStartDate: '', collegeEndDate: '', currentlyStudying: false },
  ]);

  const [schoolDetails, setSchoolDetails] = useState([
    { schoolName: '', boardName: '', className: '', schoolLocation: '', schoolMarks: '', schoolStartDate: '', schoolEndDate: '' },
  ]);

  const handleCollegeChange = (index, field, value) => {
    const updatedColleges = collegeDetails.map((college, i) => 
      i === index ? { ...college, [field]: value } : college
    );
    setCollegeDetails(updatedColleges);
  };

  const handleAddCollege = () => {
    setCollegeDetails([
      ...collegeDetails,
      { collegeName: '', degreeName: '', courseName: '', collegeLocation: '', collegeMarks: '', collegeStartDate: '', collegeEndDate: '', currentlyStudying: false },
    ]);
  };

  const handleRemoveCollege = (index) => {
    const updatedColleges = collegeDetails.filter((_, i) => i !== index);
    setCollegeDetails(updatedColleges);
  };

  const handleSchoolChange = (index, field, value) => {
    const updatedSchools = schoolDetails.map((school, i) => 
      i === index ? { ...school, [field]: value } : school
    );
    setSchoolDetails(updatedSchools);
  };

  const handleAddSchool = () => {
    setSchoolDetails([
      ...schoolDetails,
      { schoolName: '', boardName: '', className: '', schoolLocation: '', schoolMarks: '', schoolStartDate: '', schoolEndDate: '' },
    ]);
  };

  const handleRemoveSchool = (index) => {
    const updatedSchools = schoolDetails.filter((_, i) => i !== index);
    setSchoolDetails(updatedSchools);
  };

  const handleSave = (e) => {
    e.preventDefault();
    console.log('College Details:', collegeDetails);
    console.log('School Details:', schoolDetails);
    onClose();
  };

  return (
    <div className="education-modal">
      <div className="modal-header">
        <h3>Add Education</h3>
        <button className="close-btn" onClick={onClose}>X</button>
      </div>
      <div className="Profile_saperater_about_details"></div>
      <div className="modal-content">
        {collegeDetails.map((college, index) => (
          <div key={index} className="college-section">
            <h2>College Details</h2>
            <br />
            <label>
              College Name *
              <input
                type="text"
                placeholder="Enter college name"
                value={college.collegeName}
                onChange={(e) => handleCollegeChange(index, 'collegeName', e.target.value)}
                className="input-field"
              />
            </label>
            <label>
              Degree Name *
              <input
                type="text"
                placeholder="Enter degree name"
                value={college.degreeName}
                onChange={(e) => handleCollegeChange(index, 'degreeName', e.target.value)}
                className="input-field"
              />
            </label>
            <label>
              Course Name *
              <input
                type="text"
                placeholder="Enter course name"
                value={college.courseName}
                onChange={(e) => handleCollegeChange(index, 'courseName', e.target.value)}
                className="input-field"
              />
            </label>
            <label>
              Location *
              <input
                type="text"
                placeholder="City, Country"
                value={college.collegeLocation}
                onChange={(e) => handleCollegeChange(index, 'collegeLocation', e.target.value)}
                className="input-field"
              />
            </label>
            <label>
              Marks *
              <input
                type="text"
                placeholder="Percentage or CGPA"
                value={college.collegeMarks}
                onChange={(e) => handleCollegeChange(index, 'collegeMarks', e.target.value)}
                className="input-field"
              />
            </label>
            <label className="duration-label">
              Duration *
              <div className="duration-container">
                <input
                  type="date"
                  value={college.collegeStartDate}
                  onChange={(e) => handleCollegeChange(index, 'collegeStartDate', e.target.value)}
                  className="date-field"
                />
                <span>to</span>
                <input
                  type="date"
                  value={college.currentlyStudying ? '' : college.collegeEndDate}
                  onChange={(e) => handleCollegeChange(index, 'collegeEndDate', e.target.value)}
                  disabled={college.currentlyStudying}
                  className="date-field"
                />
                <label className="currently-studying">
                  <input
                    type="checkbox"
                    checked={college.currentlyStudying}
                    onChange={() => handleCollegeChange(index, 'currentlyStudying', !college.currentlyStudying)}
                  />
                  Currently Studying
                </label>
              </div>
            </label>
            <button className="remove-btn" onClick={() => handleRemoveCollege(index)}>Remove</button>
            {index < collegeDetails.length - 1 && <hr className="separator-line" />}
          </div>
        ))}
        <button className="add-experience-btn" onClick={handleAddCollege}>Add Another College</button>
        

        {/* <div className="Profile_saperater_about_details"></div> */}
        <br /> <br />

        <div className="school-section">
          {schoolDetails.map((school, index) => (
            <div key={index} className="school-form">
              <h3>School Details</h3>
              <br />
              <label>
                School Name *
                <input
                  type="text"
                  placeholder="Enter school name"
                  value={school.schoolName}
                  onChange={(e) => handleSchoolChange(index, 'schoolName', e.target.value)}
                  className="input-field"
                />
              </label>
              <label>
                Board Name *
                <input
                  type="text"
                  placeholder="Enter board name"
                  value={school.boardName}
                  onChange={(e) => handleSchoolChange(index, 'boardName', e.target.value)}
                  className="input-field"
                />
              </label>
              <label>
                Class Name *
                <input
                  type="text"
                  placeholder="Enter class name"
                  value={school.className}
                  onChange={(e) => handleSchoolChange(index, 'className', e.target.value)}
                  className="input-field"
                />
              </label>
              <label>
                Location *
                <input
                  type="text"
                  placeholder="City, Country"
                  value={school.schoolLocation}
                  onChange={(e) => handleSchoolChange(index, 'schoolLocation', e.target.value)}
                  className="input-field"
                />
              </label>
              <label>
                Marks *
                <input
                  type="text"
                  placeholder="Percentage or CGPA"
                  value={school.schoolMarks}
                  onChange={(e) => handleSchoolChange(index, 'schoolMarks', e.target.value)}
                  className="input-field"
                />
              </label>
              <label className="duration-label">
                Duration *
                <div className="duration-container">
                  <input
                    type="date"
                    value={school.schoolStartDate}
                    onChange={(e) => handleSchoolChange(index, 'schoolStartDate', e.target.value)}
                    className="date-field"
                  />
                  <span>to</span>
                  <input
                    type="date"
                    value={school.schoolEndDate}
                    onChange={(e) => handleSchoolChange(index, 'schoolEndDate', e.target.value)}
                    className="date-field"
                  />
                </div>
              </label>
              <button className="remove-btn" onClick={() => handleRemoveSchool(index)}>Remove</button>
              {index < schoolDetails.length - 1 && <hr className="separator-line" />}
            </div>
          ))}
          <button className="add-experience-btn" onClick={handleAddSchool}>Add Another School</button>
        </div>
        <button className="save-Exp-btn" onClick={handleSave}>Save</button>
      </div>
    </div>
  );
};

export default EducatioModal;
