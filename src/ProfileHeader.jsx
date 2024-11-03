import React, { useState } from 'react';
import './ProfileHeader.css';
import defaultBanner from './images/b2.png'; // Default banner image
import defaultAvatar from './images/profile logo 1.png'; // Default avatar image

const ProfileHeader = ({ userData = {}, onBannerChange, onAvatarChange }) => {
  const [bannerImage, setBannerImage] = useState(userData.banner || defaultBanner);
  const [avatarImage, setAvatarImage] = useState(userData.avatar || defaultAvatar);
  const [isEditMode, setIsEditMode] = useState(false);
  
  const [resumeFilename, setResumeFilename] = useState(''); // New state for resume filename
  const [resumeFileUrl, setResumeFileUrl] = useState(null); // New state for resume file URL
  const [profileData, setProfileData] = useState({
    firstName: userData.firstName || '',
    lastName: userData.lastName || '',
    username: userData.username || '',
    email: userData.email || '',
    mobile: userData.mobile || '',
    pronouns: userData.pronouns || '',
    gender: userData.gender || '',
    userType: userData.userType || '',
    college: userData.college || '',
    degree: userData.degree || '',
    courseName: userData.courseName || '',
    location: userData.location || '',
    marks: userData.marks || '',
    startYear: userData.startYear || '',
    endYear: userData.endYear || '',
    schoolName: userData.schoolName || '',
    boardName: userData.boardName || '',
    percentage: userData.percentage || '',
    passingYear: userData.passingYear || '',
    dob: userData.dob || '',
    currentAddressLine1: userData.currentAddressLine1 || '',
    currentAddressLine2: userData.currentAddressLine2 || '',
    currentPincode: userData.currentPincode || '',
    currentLocation: userData.currentLocation || '',
    permanentAddressLine1: userData.permanentAddressLine1 || '',
    permanentAddressLine2: userData.permanentAddressLine2 || '',
    permanentPincode: userData.permanentPincode || '',
    permanentLocation: userData.permanentLocation || '',
    companyName: userData.companyName || '',
    jobTitle: userData.jobTitle || '',
    yearsOfExperience: userData.yearsOfExperience || '',
  });

  const handleBannerChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setBannerImage(URL.createObjectURL(file));
      onBannerChange && onBannerChange(file); // Check if onBannerChange is provided
    }
  };

  const handleAvatarChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setAvatarImage(URL.createObjectURL(file));
      onAvatarChange && onAvatarChange(file); // Check if onAvatarChange is provided
    }
  };

  const toggleEditMode = () => {
    setIsEditMode(!isEditMode);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData({ ...profileData, [name]: value });
  };

  const handlePronounChange = (pronoun) => {
    setProfileData({ ...profileData, pronouns: pronoun });
  };

  const handleGenderChange = (gender) => {
    setProfileData({ ...profileData, gender });
  };

  const handleUserTypeChange = (userType) => {
    setProfileData({ ...profileData, userType });
  };

  const handleSave = (e) => {
    e.preventDefault();
    // Update userData with the new profileData
    userData.firstName = profileData.firstName;
    userData.lastName = profileData.lastName;
    profileData.userType === 'College Student' || profileData.userType === 'Fresher'
      ? (userData.college = profileData.college)
      : (userData.companyName = profileData.companyName);

    // Close the edit form
    setIsEditMode(false);
  };

  const handleResumeUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setResumeFilename(file.name); // Set resume filename
      setResumeFileUrl(URL.createObjectURL(file)); // Set resume file URL
      console.log("Resume uploaded:", file.name);
    }
  };

  return (
    <div className="profile-header">
      {/* Banner Section */}
      <div className="banner-container">
        <img src={bannerImage} alt="Banner" className="banner-image" />
        <label className="banner-upload-btn">
          Change Banner
          <input type="file" onChange={handleBannerChange} style={{ display: 'none' }} />
        </label>
      </div>

      {/* Profile Summary Section */}
      <div className="profile-summary-container">
        <label className="avatar-upload-container">
          <img src={avatarImage} alt="Avatar" className="profile-avatar-large" />
          <input type="file" onChange={handleAvatarChange} style={{ display: 'none' }} />
        </label>

        <div className="profile-summary-details">
          <h2 className="profile-name-large">
            {profileData.firstName || profileData.lastName ? `${profileData.firstName} ${profileData.lastName}` : 'User Name'}
          </h2>
          <p>{profileData.userType === 'College Student' || profileData.userType === 'Fresher' ? profileData.college : profileData.companyName || 'Institute Name'}</p>
          <button className="edit-details-btn" onClick={toggleEditMode}>Edit Details</button>
          
          {/* Resume Upload Section */}
          <label className="resume-upload-btn">
            {resumeFilename ? 'Change Resume' : 'Upload Resume'}
            <input type="file" accept=".pdf,.doc,.docx" onChange={handleResumeUpload} style={{ display: 'none' }} />
          </label>
          {/* Display filename as a link if resumeFileUrl is available */}
          {resumeFilename && (
            <a
              href={resumeFileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="resume-filename"
            >
              {resumeFilename}
            </a>
          )}
        </div>
      </div>

      {/* Edit Details Sidebar */}
      {isEditMode && (
        <div className="edit-details-sidebar">
          <div className="edit-details-header">
            <h2>Edit Profile</h2>
            <button className="close-edit-btn" onClick={toggleEditMode}>X</button>
          </div>
          <div className="Profile_saperater_edit_details"></div>
          <form className="edit-details-form" onSubmit={handleSave}>
            {/* Basic Details */}
            <h3>Basic Details</h3>
            <label>
              First Name:
              <input type="text" name="firstName" value={profileData.firstName} onChange={handleInputChange} required />
            </label>
            <label>
              Last Name:
              <input type="text" name="lastName" value={profileData.lastName} onChange={handleInputChange} required />
            </label>
            <label>
              Username:
              <input type="text" name="username" value={profileData.username} onChange={handleInputChange} required />
            </label>
            <label>
              Email:
              <input type="email" name="email" value={profileData.email} onChange={handleInputChange} required />
            </label>
            <label>
              Mobile Number:
              <input type="tel" name="mobile" value={profileData.mobile} onChange={handleInputChange} required />
            </label>

            {/* Pronouns */}
            <div className="form-group">
              <label>Pronouns:</label>
              <div className="button-Profile-group">
                <button type="button" className={profileData.pronouns === 'He/Him/His' ? 'active' : ''} onClick={() => handlePronounChange('He/Him/His')}>He/Him/His</button>
                <button type="button" className={profileData.pronouns === 'She/Her' ? 'active' : ''} onClick={() => handlePronounChange('She/Her')}>She/Her</button>
                <button type="button" className={profileData.pronouns === 'Do not want to show' ? 'active' : ''} onClick={() => handlePronounChange('Do not want to show')}>Do not want to show</button>
              </div>
            </div>

            {/* Gender */}
            <div className="form-group">
              <label>Gender:</label>
              <div className="button-Profile-group">
                <button type="button" className={profileData.gender === 'Male' ? 'active' : ''} onClick={() => handleGenderChange('Male')}>Male</button>
                <button type="button" className={profileData.gender === 'Female' ? 'active' : ''} onClick={() => handleGenderChange('Female')}>Female</button>
                <button type="button" className={profileData.gender === 'Other' ? 'active' : ''} onClick={() => handleGenderChange('Other')}>Other</button>
              </div>
            </div>

            {/* User Type */}
            <div className="form-group">
              <label>User Type:</label>
              <div className="button-Profile-group">
                <button type="button" className={profileData.userType === 'College Student' ? 'active' : ''} onClick={() => handleUserTypeChange('College Student')}>College Student</button>
                <button type="button" className={profileData.userType === 'Experienced' ? 'active' : ''} onClick={() => handleUserTypeChange('Experienced')}>Experienced</button>
                <button type="button" className={profileData.userType === 'Fresher' ? 'active' : ''} onClick={() => handleUserTypeChange('Fresher')}>Fresher</button>
              </div>
            </div>

            {/* Conditional Fields based on User Type */}
            {(profileData.userType === 'College Student' || profileData.userType === 'Fresher') && (
              <div className="college-details">
                <h3>College Details</h3>
                <label>
                  College Name:
                  <input type="text" name="college" value={profileData.college} onChange={handleInputChange} />
                </label>
                <label>
                  Degree:
                  <input type="text" name="degree" value={profileData.degree} onChange={handleInputChange} />
                </label>
                <label>
                  Course Name:
                  <input type="text" name="courseName" value={profileData.courseName} onChange={handleInputChange} />
                </label>
                <label>
                  Location:
                  <input type="text" name="location" value={profileData.location} onChange={handleInputChange} />
                </label>
                <label>
                  Marks Obtained:
                  <input type="number" name="marks" value={profileData.marks} onChange={handleInputChange} />
                </label>
                <label>
                  Start Year:
                  <input type="number" name="startYear" value={profileData.startYear} onChange={handleInputChange} />
                </label>
                <label>
                  End Year:
                  <input type="number" name="endYear" value={profileData.endYear} onChange={handleInputChange} />
                </label>
              </div>
            )}
            {profileData.userType === 'Experienced' && (
              <div className="company-details">
                <h3>Company Details</h3>
                <label>
                  Company Name:
                  <input type="text" name="companyName" value={profileData.companyName} onChange={handleInputChange} />
                </label>
                <label>
                  Job Title:
                  <input type="text" name="jobTitle" value={profileData.jobTitle} onChange={handleInputChange} />
                </label>
                <label>
                  Years of Experience:
                  <input type="number" name="yearsOfExperience" value={profileData.yearsOfExperience} onChange={handleInputChange} />
                </label>
              </div>
            )}

            {/* Address Section */}
            <h3>Address Details</h3>
            <label>
              Current Address Line 1:
              <input type="text" name="currentAddressLine1" value={profileData.currentAddressLine1} onChange={handleInputChange} />
            </label>
            <label>
              Current Address Line 2:
              <input type="text" name="currentAddressLine2" value={profileData.currentAddressLine2} onChange={handleInputChange} />
            </label>
            <label>
              Current Pincode:
              <input type="text" name="currentPincode" value={profileData.currentPincode} onChange={handleInputChange} />
            </label>
            <label>
              Permanent Address Line 1:
              <input type="text" name="permanentAddressLine1" value={profileData.permanentAddressLine1} onChange={handleInputChange} />
            </label>
            <label>
              Permanent Address Line 2:
              <input type="text" name="permanentAddressLine2" value={profileData.permanentAddressLine2} onChange={handleInputChange} />
            </label>
            <label>
              Permanent Pincode:
              <input type="text" name="permanentPincode" value={profileData.permanentPincode} onChange={handleInputChange} />
            </label>
            <button type="submit" className="save-changes-btn">Save Changes</button>
            <br /><br />
          </form>
        </div>
      )}
    </div>
  );
};

export default ProfileHeader;
